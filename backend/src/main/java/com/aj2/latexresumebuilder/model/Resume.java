package com.aj2.latexresumebuilder.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "resumes")
public class Resume {

    @Id
    private String id;

    private String userId; // Owner of the resume

    private String title;

    private String content; // LaTeX content or JSON structure

    private String template; // Template name/type

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;
}