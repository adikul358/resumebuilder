package com.aj2.latexresumebuilder.service;

import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateExceptionHandler;
import org.springframework.stereotype.Service;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.Instant;
import java.util.Map;
import java.util.concurrent.TimeUnit;

@Service
public class PdfGenerationService {

    private final Configuration fmConfig;
    String TEMPLATE_PATH = "/Users/adityak/Developer/srmist/latexresumebuilder/backend/src/main/resources/templates/resume.tex.ftl";
    String OUTPUT_PATH = "/Users/adityak/Developer/srmist/latexresumebuilder/backend/src/main/resources/static/out/resume.tex";
    String PDF_OUTPUT = "/Users/adityak/Developer/srmist/latexresumebuilder/backend/src/main/static/out/resume.pdf";

    public PdfGenerationService() throws IOException {
        fmConfig = new Configuration(Configuration.VERSION_2_3_31);
        fmConfig.setClassForTemplateLoading(this.getClass(), "/templates");
        fmConfig.setDefaultEncoding("UTF-8");
        fmConfig.setTemplateExceptionHandler(TemplateExceptionHandler.RETHROW_HANDLER);
    }

    public byte[] generatePdfFromData(Map<String, Object> data) throws Exception {

        // Create temp dir per request
        Path tmpDir = Paths.get("src/main/resources/static/resume-"+Instant.now().getEpochSecond());
        try {
            Files.createDirectory(tmpDir);
            System.out.println("Directory created: " + tmpDir);
        } catch (IOException e) {
            System.err.println("Failed to create directory: " + e.getMessage());
        }
        try {
            // Render .tex
            Template template = fmConfig.getTemplate("resume.tex.ftl");
            Path texFile = tmpDir.resolve("resume.tex");
            try (Writer out = new OutputStreamWriter(new FileOutputStream(texFile.toFile()), "UTF-8")) {
                template.process(data, out);
            }

            // Run pdflatex (twice for refs if desired). Use -interaction=nonstopmode to avoid interactive prompt
            runPdflatex(tmpDir, "resume.tex");
            // Optional second run:
            runPdflatex(tmpDir, "resume.tex");

            Path pdf = tmpDir.resolve("resume.pdf");
            if (!Files.exists(pdf)) {
                // capture log for debugging
                String log = Files.readString(tmpDir.resolve("resume.log"));
                throw new RuntimeException("PDF not produced. pdflatex log:\n" + log);
            }

            return Files.readAllBytes(pdf);
        } finally {
            // best-effort cleanup
            cleanupDir(tmpDir);
        }
    }

    private void runPdflatex(Path dir, String texFile) throws Exception {
        ProcessBuilder pb = new ProcessBuilder(
                "pdflatex",
                "-interaction=nonstopmode",
                "-output-directory", dir.toAbsolutePath().toString(),
                texFile
        );
        pb.directory(dir.toFile());
        pb.redirectErrorStream(true);
        Process p = pb.start();

        // capture output to a log file
        try (BufferedReader br = new BufferedReader(new InputStreamReader(p.getInputStream()));
             BufferedWriter logWriter = Files.newBufferedWriter(dir.resolve("resume.log"))) {
            String line;
            while ((line = br.readLine()) != null) {
                logWriter.write(line);
                logWriter.newLine();
            }
        }
        boolean finished = p.waitFor(30, TimeUnit.SECONDS); // avoid hangs
        if (!finished) {
            p.destroyForcibly();
            throw new RuntimeException("pdflatex timed out");
        }
    }

    private void cleanupDir(Path dir) {
        try {
            Files.walk(dir)
                    .sorted((a, b) -> b.compareTo(a)) // delete files before dirs
                    .forEach(path -> {
                        try {
                            Files.deleteIfExists(path);
                        } catch (IOException ignored) {}
                    });
        } catch (IOException ignored) {}
    }

    // Very simple latex escaper. You may want to harden this.
    public static String escapeLaTeX(String input) {
        if (input == null) return "";
        return input
                .replace("\\", "\\textbackslash{}")
                .replace("&", "\\&")
                .replace("%", "\\%")
                .replace("$", "\\$")
                .replace("#", "\\#")
                .replace("_", "\\_")
                .replace("{", "\\{")
                .replace("}", "\\}")
                .replace("~", "\\textasciitilde{}")
                .replace("^", "\\textasciicircum{}")
                .replace("\"", "''"); // naive
    }

    // Functional interface adapter for FreeMarker
    @FunctionalInterface
    public interface LatexEscaper {
        String texEscape(String s);
    }
}
