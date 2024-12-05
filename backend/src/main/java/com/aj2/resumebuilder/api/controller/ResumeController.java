package com.aj2.resumebuilder.api.controller;

import com.aj2.resumebuilder.api.model.Education;
import com.aj2.resumebuilder.api.model.Experience;
import com.aj2.resumebuilder.api.model.Metadata;
import com.aj2.resumebuilder.api.model.Resume;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.io.File;
import java.io.FileInputStream;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;


@CrossOrigin(origins = "file://,null,http://localhost:5173")
@RestController
public class ResumeController {

    public static String getBlockTex(String input, String start, String end) {
        int startIndex = input.indexOf(start);
        int endIndex = input.indexOf(end);
        if (startIndex == -1 || endIndex == -1 || endIndex <= startIndex) {
            return ""; // Return an empty string if not found or invalid
        }
        String substring = input.substring(startIndex + start.length(), endIndex).trim();
        String[] lines = substring.split("\n");
        return String.join("\n", lines).trim();
    }

    @RequestMapping(value = "/metadata", method = RequestMethod.GET)
    public Metadata getMetadata() {
        Metadata m = new Metadata();
        try {
            Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/resumebuilder", "root", "password");
            System.out.println("Getting Metadata...");
            String query = "SELECT * FROM users WHERE id = 1";
            Statement stmt = conn.createStatement();
          ResultSet rs = stmt.executeQuery(query);
          while(rs.next()) {
             System.out.println(rs.getInt("id")+"  "+rs.getString("email")+"  "+rs.getString("name"));
                m.setName(rs.getString("name"));
                m.setEmail(rs.getString("email"));
                m.setGithub(rs.getString("github"));
                m.setLinkedin(rs.getString("linkedin"));
                m.setPhone(rs.getString("phone"));
                m.setWebsite(rs.getString("website"));
            }
            conn.close();
        } catch (Exception e) {
            System.out.println(e);
        }


        return m;
    }
    @RequestMapping(value = "/metadata", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public String setMetadata(@RequestBody Metadata metadata) {
        try {
            Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/resumebuilder", "root", "password");
            System.out.println("Updating Metadata...");
            String insertQuery = "UPDATE users SET name = ?, email = ?, phone = ?, github = ?, linkedin = ?, website = ? WHERE id = 1";
            try (PreparedStatement pstmt = conn.prepareStatement(insertQuery)) {
                pstmt.setString(1, metadata.getName());
                pstmt.setString(2, metadata.getEmail());
                pstmt.setString(3, metadata.getPhone());
                pstmt.setString(4, metadata.getGithub());
                pstmt.setString(5, metadata.getLinkedin());
                pstmt.setString(6, metadata.getWebsite());
                pstmt.executeUpdate();
            }
            System.out.println("Updated records into the table.");
            conn.close();

            return "Updated records into the table.";
        } catch (Exception e) {
            System.out.println(e);
            return "Failed";
        }
    }

    @RequestMapping(value = "/resumes", method = RequestMethod.GET)
    public List<String> getResumes() {
        List<String> data = new ArrayList<String>();
        try {
            Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/resumebuilder", "root", "password");
            System.out.println("Getting Resumes...");
            String query = "SELECT (uuid) FROM resumes WHERE user_id = 1 ORDER BY timestamp DESC";
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery(query);
            while(rs.next()) {
                System.out.println(rs.getString("uuid"));
                data.add(rs.getString("uuid"));
            }
            conn.close();
            return data;
        } catch (Exception e) {
            System.out.println(e);
        }

        return data;
    }

    @RequestMapping(value = "/get-pdf", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Resource> getFile(@RequestBody Resume resume) {
        try {
            String SOURCE_FILE_PATH = "/Users/adityak/Developer/srmist/resume-builder/frontend/public/resume.tex";
            String OUT_DIRECTORY_PATH = "/Users/adityak/Developer/srmist/resume-builder/frontend/public/generated";

            Path filePath = Paths.get(SOURCE_FILE_PATH).normalize();
            String fileID =  UUID.randomUUID().toString();
            String fileName =  "resume_" + fileID;
            Path tempPath = Paths.get(OUT_DIRECTORY_PATH).resolve(fileName + ".tex").normalize();

            String content = Files.readString(filePath, StandardCharsets.UTF_8);
            String modifiedContent = content;
            String edTO = getBlockTex(content, "%BLOCK_EDUCATION_START", "%BLOCK_EDUCATION_END");
            String exTO = getBlockTex(content, "%BLOCK_EXPERIENCE_START", "%BLOCK_EXPERIENCE_END");
            String educationTex = "";
            String experienceTex = "";

            modifiedContent = modifiedContent.replace("{{NAME}}", resume.metadata.getName());
            modifiedContent = modifiedContent.replace("{{EMAIL}}", resume.metadata.getEmail());
            modifiedContent = modifiedContent.replace("{{PHONE}}", resume.metadata.getPhone());
            modifiedContent = modifiedContent.replace("{{LINKEDIN}}", resume.metadata.getLinkedin());
            modifiedContent = modifiedContent.replace("{{GITHUB}}", resume.metadata.getGithub());

            for (Education e : resume.education) {
                String temp = edTO;
                temp = temp.replace("{{DEGREE}}", e.getDegree());
                temp = temp.replace("{{SCHOOL}}", e.getInstitution());
                temp = temp.replace("{{LOCATION}}", e.getLocation());
                temp = temp.replace("{{DESCRIPTION}}", e.getDescription());
                temp = temp.replace("{{MONTH_START}}", e.getStart_date());
                temp = temp.replace("{{MONTH_END}}", e.getEnd_date());
                educationTex += temp + "\n";
            }

            for (Experience e : resume.experience) {
                String temp = exTO;
                temp = temp.replace("{{POSITION}}", e.getTitle());
                temp = temp.replace("{{COMPANY}}", e.getCompany());
                temp = temp.replace("{{LOCATION}}", e.getLocation());
                temp = temp.replace("{{MONTH_START}}", e.getStart_date());
                temp = temp.replace("{{MONTH_END}}", e.getEnd_date());
                temp = temp.replace("{{DESCRIPTION}}", e.getDescription());
                experienceTex += temp + "\n";
            }

            modifiedContent = modifiedContent.replace(edTO, educationTex);
            modifiedContent = modifiedContent.replace(exTO, experienceTex);
            Files.writeString(tempPath, modifiedContent);

            ProcessBuilder proc = new ProcessBuilder();
            proc.directory(new File(OUT_DIRECTORY_PATH));
            proc.redirectErrorStream(true);

            System.out.println("Compiling Latex to PDF...");
            String[] args = new String[] {"pdflatex", "-synctex=1","-interaction=nonstopmode","-file-line-error", "&& rm", OUT_DIRECTORY_PATH + "/*.{aux,log,out,gz}", tempPath.toString()};
            proc.command(args);
            proc.start().waitFor();
            String pdfPath = Paths.get(OUT_DIRECTORY_PATH).resolve(fileName + ".pdf").normalize().toString();

            System.out.println("Generating image...");
            String[] argsPPM = new String[] {"pdftoppm", "-jpeg", "-r", "72", "-singlefile", "-progress", pdfPath, OUT_DIRECTORY_PATH+"/"+fileName};
            System.out.println(String.join(" ", argsPPM));
            Runtime rt = Runtime.getRuntime();
            rt.exec(argsPPM);

            Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/resumebuilder", "root", "password");
            System.out.println("Inserting resume into the table...");

            ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
            String jsonString = ow.writeValueAsString(resume);

            String insertQuery = "INSERT INTO resumes (uuid, user_id, data) VALUES (?, 1, ?)";
            try (PreparedStatement pstmt = conn.prepareStatement(insertQuery)) {
                pstmt.setString(1, fileID);
                pstmt.setString(2, jsonString);
                pstmt.executeUpdate();
            }
            System.out.println("Inserted records into the table.");
            conn.close();

            FileInputStream fileInputStream = new FileInputStream(pdfPath);

            HttpHeaders headers = new HttpHeaders();
            headers.add("Content-Disposition", "attachment; filename=\"resume.pdf\"\n");

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
