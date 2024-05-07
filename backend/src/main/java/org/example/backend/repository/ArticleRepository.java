package org.example.backend.repository;

import org.example.backend.entity.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;
@Repository
public interface ArticleRepository extends JpaRepository<Article, Integer> {
    public Article getArticleById(int id);

    public List<Article> getArticlesByTitleLikeOrAuthor_UserUsernameLike(String title, String username);
}