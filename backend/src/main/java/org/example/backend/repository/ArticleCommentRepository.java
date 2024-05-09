package org.example.backend.repository;

import org.example.backend.entity.ArticleComment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ArticleCommentRepository extends JpaRepository<ArticleComment, Integer> {
    List<ArticleComment> getArticleCommentsByArticleId(int aid);
    ArticleComment getArticleCommentById(int id);
}
