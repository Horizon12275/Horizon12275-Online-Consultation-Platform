package org.example.backend.controller;

import org.example.backend.entity.Article;
import org.example.backend.entity.Result;
import org.example.backend.service.ArticleService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/article")
public class ArticleController {
    private final ArticleService service;
    public ArticleController(ArticleService service) {
        this.service = service;
    }
    @GetMapping("/list")
    public Result<List<Article>> list() {
        return service.getArticles();
    }
    @GetMapping("/get/{id}")
    public Result<Article> getArticleById(@PathVariable int id) {
        return service.getArticleById(id);
    }
    @GetMapping("/recommend/{nums}")
    public Result<List<Article>> getRecommendations(@PathVariable int nums) {
        return service.getRecommendations(nums);
    }
    @PutMapping("/admin/update/{id}")
    @PreAuthorize("hasRole('expert')")
    public Result<Article> updateArticle(@PathVariable int id, @RequestBody Article article) {
        return service.updateArticle(id, article);
    }
    @DeleteMapping("/admin/delete/{id}")
    public Result<Article> deleteArticle(@PathVariable int id) {
        return service.deleteArticle(id);
    }
    @PostMapping("/admin/add")
    public Result<Article> addArticle(@RequestBody Article article) {
        return service.addArticle(article);
    }
    @GetMapping("/search")
    public Result<List<Article>> searchArticles(@RequestParam String keyword) {
        return service.searchArticles(keyword);
    }

}
