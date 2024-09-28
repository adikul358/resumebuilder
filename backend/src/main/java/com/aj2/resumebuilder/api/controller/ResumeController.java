package com.aj2.resumebuilder.api.controller;

import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.FileInputStream;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@CrossOrigin(origins = "file://,null")
@RestController
public class ResumeController {

    private static final String FILE_DIRECTORY = "/Users/adityak/Developer/srmist/resume-builder/backend/src/main/resources/static";

    @RequestMapping(value ="test", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public Person updatePerson(@RequestParam("arg1") String arg1,
                               @RequestParam("arg2") String arg2,
                               @RequestBody Person input) throws IOException {
        System.out.println(arg1);
        System.out.println(arg2);
        input.setName("NewName");
        return input;
    }
    public ResponseEntity<Resource> getFile(
            @RequestParam("fullname") String fullname,
            @RequestParam("email") String email,
            @RequestParam("phone") String phone,
            @RequestParam("linkedin") String linkedin,
            @RequestParam("degree") String degree,
            @RequestParam("institute") String institute,
            @RequestParam("year") String year,
            @RequestParam("gpa") String gpa
    ) {
        try {
            Path filePath = Paths.get(FILE_DIRECTORY).resolve("resume.tex").normalize();
            Path tempPath = Paths.get(FILE_DIRECTORY).resolve("modified_resume.tex").normalize();

            String content = Files.readString(filePath, StandardCharsets.UTF_8);
            String modifiedContent = content;
            modifiedContent = modifiedContent.replace("{{FULLNAME}}", fullname);
            modifiedContent = modifiedContent.replace("{{EMAIL}}", email);
            modifiedContent = modifiedContent.replace("{{PHONE}}", phone);
            modifiedContent = modifiedContent.replace("{{LINKEDIN}}", linkedin);
            modifiedContent = modifiedContent.replace("{{DEGREE}}", degree);
            modifiedContent = modifiedContent.replace("{{INSTITUTE}}", institute);
            modifiedContent = modifiedContent.replace("{{YEAR}}", year);
            modifiedContent = modifiedContent.replace("{{GPA}}", gpa);

            Files.writeString(tempPath, modifiedContent);

            byte[] contentBytes = modifiedContent.getBytes(StandardCharsets.UTF_8);
            ByteArrayResource resource = new ByteArrayResource(contentBytes);

            System.out.println(tempPath);
            String[] args = new String[] {"pdflatex", "-synctex=1","-interaction=nonstopmode","-file-line-error","-output-directory="+FILE_DIRECTORY, tempPath.toString()};
            ProcessBuilder proc = new ProcessBuilder();
            proc.command(args);
            proc.start().waitFor();


            String pdfPath = Paths.get(FILE_DIRECTORY).resolve("modified_resume.pdf").normalize().toString();
            FileInputStream fileInputStream = new FileInputStream(pdfPath);

            HttpHeaders headers = new HttpHeaders();
            headers.add("Content-Disposition", "inline; filename=resume.pdf");

            return ResponseEntity
                    .ok()
                    .headers(headers)
                    .contentType(MediaType.APPLICATION_PDF)
                    .body(new InputStreamResource(fileInputStream));

        } catch (Exception e) {
            e.printStackTrace(System.out);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}