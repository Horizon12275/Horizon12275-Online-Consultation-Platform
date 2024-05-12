package org.example.backend.service;

import org.example.backend.DTO.ArticlePageResponse;
import org.example.backend.entity.Article;
import org.example.backend.entity.Result;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public interface ArticleService {
    public Result<List<Article>> getArticles();
    public Result<Article> getArticleById(int id);
    public Result<List<Article>> getRecommendations(int nums);
    public Result<Article> addArticle(String content, int[] tids, String title, MultipartFile file);
    public Result<Article> updateArticle(int id, Article article);
    public Result<Article> deleteArticle(int id);
    public Result<ArticlePageResponse> searchArticles(String keyword, int page, int pageSize);
    public Result<ArticlePageResponse> categorySearch(int tid, int page, int pageSize);
    public Result<List<Article>> getArticlesByEid(int eid);
}
