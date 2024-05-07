package org.example.backend.service;

import org.example.backend.entity.Article;
import org.example.backend.entity.Result;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ArticleService {
    public Result<List<Article>> getArticles();
    public Result<Article> getArticleById(int id);
    public Result<List<Article>> getRecommendations(int nums);
    public Result<Article> addArticle(Article article);
    public Result<Article> updateArticle(int id, Article article);
    public Result<Article> deleteArticle(int id);
    public Result<List<Article>> searchArticles(String keyword);
}
