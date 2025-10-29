package com.aj2.latexresumebuilder.service;

import com.aj2.latexresumebuilder.dto.CreateResumeRequest;
import com.aj2.latexresumebuilder.dto.ResumeResponse;
import com.aj2.latexresumebuilder.dto.UpdateResumeRequest;
import com.aj2.latexresumebuilder.model.Resume;
import com.aj2.latexresumebuilder.repository.ResumeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ResumeService {

    private final ResumeRepository resumeRepository;

    public ResumeResponse createResume(CreateResumeRequest request, String userId) {
        Resume resume = Resume.builder()
                .userId(userId)
                .title(request.getTitle())
                .content(request.getContent())
                .template(request.getTemplate())
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .build();

        Resume savedResume = resumeRepository.save(resume);
        return mapToResponse(savedResume);
    }

    public List<ResumeResponse> getAllResumes(String userId) {
        return resumeRepository.findByUserIdOrderByUpdatedAtDesc(userId)
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public ResumeResponse getResumeById(String id, String userId) {
        Resume resume = resumeRepository.findByIdAndUserId(id, userId)
                .orElseThrow(() -> new RuntimeException("Resume not found or access denied"));

        return mapToResponse(resume);
    }

    public ResumeResponse updateResume(String id, UpdateResumeRequest request, String userId) {
        Resume resume = resumeRepository.findByIdAndUserId(id, userId)
                .orElseThrow(() -> new RuntimeException("Resume not found or access denied"));

        // Update only non-null fields
        if (request.getTitle() != null) {
            resume.setTitle(request.getTitle());
        }
        if (request.getContent() != null) {
            resume.setContent(request.getContent());
        }
        if (request.getTemplate() != null) {
            resume.setTemplate(request.getTemplate());
        }

        resume.setUpdatedAt(LocalDateTime.now());

        Resume updatedResume = resumeRepository.save(resume);
        return mapToResponse(updatedResume);
    }

    @Transactional
    public void deleteResume(String id, String userId) {
        Resume resume = resumeRepository.findByIdAndUserId(id, userId)
                .orElseThrow(() -> new RuntimeException("Resume not found or access denied"));

        resumeRepository.delete(resume);
    }

    public long getResumeCount(String userId) {
        return resumeRepository.countByUserId(userId);
    }

    private ResumeResponse mapToResponse(Resume resume) {
        return ResumeResponse.builder()
                .id(resume.getId())
                .userId(resume.getUserId())
                .title(resume.getTitle())
                .content(resume.getContent())
                .template(resume.getTemplate())
                .createdAt(resume.getCreatedAt())
                .updatedAt(resume.getUpdatedAt())
                .build();
    }
}