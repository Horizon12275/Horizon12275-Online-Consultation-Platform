package org.example.backend.controller;

import org.example.backend.entity.ArticleComment;
import org.example.backend.entity.Reply;
import org.example.backend.entity.Result;
import org.example.backend.repository.UserRepository;
import org.example.backend.service.ArticleCommentService;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comment/article")
public class ArticleCommentController {
    private final ArticleCommentService service;
    public ArticleCommentController(ArticleCommentService service) {
        this.service = service;
    }
    @GetMapping("/list/{aid}")
    public Result<List<ArticleComment>> getCommentsByAid(@PathVariable int aid) {
        return service.getArticleCommentsByAid(aid);
    }
    @PostMapping("/add/{aid}")
    public Result<ArticleComment> addComment(@PathVariable int aid, @RequestBody String content) {
        return service.addArticleComment(aid, content);
    }
    @DeleteMapping("/delete/{id}")
    public Result<ArticleComment> deleteComment(@PathVariable int id) {
        return service.deleteArticleComment(id);
    }
    @PostMapping("/reply/{cid}")
    public Result<Reply> addReply(@PathVariable int cid, @RequestBody String content) {
        return service.addArticleReply(cid, content);
    }
}
