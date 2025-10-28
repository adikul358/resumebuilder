package com.aj2.latexresumebuilder.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

// Resume Response
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ResumeResponse {

    private String id;
    private String userId;
    private String title;
    private String content;
    private String template;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
