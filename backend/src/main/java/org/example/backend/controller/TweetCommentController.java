package org.example.backend.controller;

import org.example.backend.entity.TweetComment;
import org.example.backend.entity.Result;
import org.example.backend.service.TweetCommentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comment/tweet")
public class TweetCommentController {
    private final TweetCommentService service;
    public TweetCommentController(TweetCommentService service) {
        this.service = service;
    }
    @GetMapping("/list/{aid}")
    public Result<List<TweetComment>> getCommentsByAid(@PathVariable int aid) {
        return service.getTweetCommentsByAid(aid);
    }
    @PostMapping("/add/{aid}")
    public Result<TweetComment> addComment(@PathVariable int aid, @RequestBody String content) {
        return service.addTweetComment(aid, content);
    }
    @DeleteMapping("/delete/{id}")
    public Result<TweetComment> deleteComment(@PathVariable int id) {
        return service.deleteTweetComment(id);
    }

}
