package com.aj2.latexresumebuilder.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

// Create Resume Request
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreateResumeRequest {

    @NotBlank(message = "Title is required")
    private String title;

    private String content;

    private String template;
}
