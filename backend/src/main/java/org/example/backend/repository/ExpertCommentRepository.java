package org.example.backend.repository;

import org.example.backend.entity.ExpertComment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ExpertCommentRepository extends JpaRepository<ExpertComment, Integer> {
    List<ExpertComment> getExpertCommentsByExpertId(int aid);
    ExpertComment getExpertCommentById(int id);
}
