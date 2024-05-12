package org.example.backend.controller;

import org.example.backend.DTO.ArticlePageResponse;
import org.example.backend.entity.Article;
import org.example.backend.entity.Result;
import org.example.backend.service.ArticleService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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
    @GetMapping("/list/{eid}")
    public Result<List<Article>> getArticlesByEid(@PathVariable int eid) {
        return service.getArticlesByEid(eid);
    }
    @GetMapping("/get/{id}")
    public Result<Article> getArticleById(@PathVariable int id) {
        return service.getArticleById(id);
    }
    @GetMapping("/recommend/{nums}")
    public Result<List<Article>> getRecommendations(@PathVariable int nums) {
        return service.getRecommendations(nums);
    }
    @PutMapping("/update/{id}")
    @PreAuthorize("hasRole('expert')")
    public Result<Article> updateArticle(@PathVariable int id, @RequestBody Article article) {
        return service.updateArticle(id, article);
    }
    @DeleteMapping("/delete/{id}")
    public Result<Article> deleteArticle(@PathVariable int id) {
        return service.deleteArticle(id);
    }
    @PostMapping("/add")
    public Result<Article> addArticle(@RequestParam String content, @RequestParam int[] tids, @RequestParam MultipartFile file, @RequestParam String title) {
        return service.addArticle(content, tids, title, file);
    }
    @GetMapping("/search")
    public Result<ArticlePageResponse> searchArticles(@RequestParam(defaultValue = "") String keyword, @RequestParam(defaultValue = "1") int page, @RequestParam(defaultValue = "10") int pageSize){
        return service.searchArticles(keyword, page, pageSize);
    }
    @GetMapping("/category")
    public Result<ArticlePageResponse> categorySearch(@RequestParam(defaultValue = "") int tag, @RequestParam(defaultValue = "1") int page, @RequestParam(defaultValue = "10") int pageSize){
        return service.categorySearch(tag, page, pageSize);
    }

}
