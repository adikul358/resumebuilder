package com.aj2.latexresumebuilder.repository;
import com.aj2.latexresumebuilder.model.Resume;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ResumeRepository extends MongoRepository<Resume, String> {

    List<Resume> findByUserIdOrderByUpdatedAtDesc(String userId);

    Optional<Resume> findByIdAndUserId(String id, String userId);

    void deleteByIdAndUserId(String id, String userId);

    long countByUserId(String userId);
}