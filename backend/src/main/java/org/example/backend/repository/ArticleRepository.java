package org.example.backend.repository;

import org.example.backend.entity.Article;
import org.example.backend.entity.Tag;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;
@Repository
public interface ArticleRepository extends JpaRepository<Article, Integer> {
    public Article getArticleById(int id);
    public Page<Article> getArticlesByTitleLikeOrAuthorNameLike(String title, String author, Pageable pageable);
    public Page<Article> findArticlesByTagsContains(Tag tag, Pageable pageable);
    public List<Article> getArticlesByAuthorId(int eid);
}