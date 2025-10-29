package com.aj2.latexresumebuilder.controller;

import com.aj2.latexresumebuilder.dto.CreateResumeRequest;
import com.aj2.latexresumebuilder.dto.ResumeResponse;
import com.aj2.latexresumebuilder.dto.UpdateResumeRequest;
import com.aj2.latexresumebuilder.security.JwtUtil;
import com.aj2.latexresumebuilder.service.PdfGenerationService;
import com.aj2.latexresumebuilder.service.ResumeService;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/resumes")
@RequiredArgsConstructor
public class ResumeController {

    private final ResumeService resumeService;
    private final JwtUtil jwtUtil;
    private final PdfGenerationService pdfService;
    private final ObjectMapper mapper;

    @PostMapping
    public ResponseEntity<byte[]> createResume(
            @Valid @RequestBody CreateResumeRequest request,
            @RequestHeader("Authorization") String authHeader) {

        String userId = extractUserIdFromToken(authHeader);
        resumeService.createResume(request, userId);

        try {
            // 1. Extract JSON string under "content"
            String jsonString = request.getContent();

            // 2. Parse JSON string into Map
            ObjectMapper mapper = new ObjectMapper();
            Map<String, Object> data = mapper.readValue(jsonString, Map.class);

            byte[] pdf = pdfService.generatePdfFromData(data);
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"resume.pdf\"")
                    .contentType(MediaType.APPLICATION_PDF)
                    .body(pdf);

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(("Error: " + e.getMessage()).getBytes());
        }

//        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping
    public ResponseEntity<List<ResumeResponse>> getAllResumes(
            @RequestHeader("Authorization") String authHeader) {

        String userId = extractUserIdFromToken(authHeader);
        List<ResumeResponse> resumes = resumeService.getAllResumes(userId);

        return ResponseEntity.ok(resumes);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResumeResponse> getResumeById(
            @PathVariable String id,
            @RequestHeader("Authorization") String authHeader) {

        String userId = extractUserIdFromToken(authHeader);
        ResumeResponse resume = resumeService.getResumeById(id, userId);

        return ResponseEntity.ok(resume);
    }

    @PutMapping("/{id}")
    public ResponseEntity<byte[]> updateResume(
            @PathVariable String id,
            @Valid @RequestBody UpdateResumeRequest request,
            @RequestHeader("Authorization") String authHeader) {

        String userId = extractUserIdFromToken(authHeader);
        resumeService.updateResume(id, request, userId);

        try {
            // 1. Extract JSON string under "content"
            String jsonString = request.getContent();

            // 2. Parse JSON string into Map
            ObjectMapper mapper = new ObjectMapper();
            Map<String, Object> data = mapper.readValue(jsonString, Map.class);

            byte[] pdf = pdfService.generatePdfFromData(data);
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"resume.pdf\"")
                    .contentType(MediaType.APPLICATION_PDF)
                    .body(pdf);

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(("Error: " + e.getMessage()).getBytes());
        }
//        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, String>> deleteResume(
            @PathVariable String id,
            @RequestHeader("Authorization") String authHeader) {

        String userId = extractUserIdFromToken(authHeader);
        resumeService.deleteResume(id, userId);

        Map<String, String> response = new HashMap<>();
        response.put("message", "Resume deleted successfully");

        return ResponseEntity.ok(response);
    }

    @GetMapping("/count")
    public ResponseEntity<Map<String, Long>> getResumeCount(
            @RequestHeader("Authorization") String authHeader) {

        String userId = extractUserIdFromToken(authHeader);
        long count = resumeService.getResumeCount(userId);

        Map<String, Long> response = new HashMap<>();
        response.put("count", count);

        return ResponseEntity.ok(response);
    }

    private String extractUserIdFromToken(String authHeader) {
        String token = authHeader.substring(7); // Remove "Bearer " prefix
        return jwtUtil.extractUserId(token);
    }
}