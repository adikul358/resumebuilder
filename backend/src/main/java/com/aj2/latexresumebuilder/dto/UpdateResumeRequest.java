package com.aj2.latexresumebuilder.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

// Update Resume Request
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UpdateResumeRequest {

    private String title;

    private String content;

    private String template;
}

