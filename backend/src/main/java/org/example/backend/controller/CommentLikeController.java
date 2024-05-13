package org.example.backend.controller;

import org.example.backend.entity.Result;
import org.example.backend.service.CommentLikeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/like/comment")
public class CommentLikeController {
    private final CommentLikeService likeService;
    public CommentLikeController(CommentLikeService likeService) {
        this.likeService = likeService;
    }
    @PostMapping("/{cid}")
    public Result<String> likeComment(@PathVariable int cid) {
        return likeService.likeComment(cid);
    }
    @GetMapping("/list")
    public Result<List<Integer>> getCids() {
        return likeService.getCids();
    }
}
