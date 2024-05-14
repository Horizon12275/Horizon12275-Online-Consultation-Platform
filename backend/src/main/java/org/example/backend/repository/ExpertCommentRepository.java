package org.example.backend.repository;

import org.example.backend.entity.ExpertComment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ExpertCommentRepository extends JpaRepository<ExpertComment, Integer> {
    List<ExpertComment> getExpertCommentsByExpertId(int aid);
    ExpertComment getExpertCommentById(int id);
}
