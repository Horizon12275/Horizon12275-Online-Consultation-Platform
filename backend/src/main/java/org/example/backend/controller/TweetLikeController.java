package org.example.backend.controller;

import org.example.backend.entity.Result;
import org.example.backend.service.TweetLikeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/like/tweet")
public class TweetLikeController {
    private final TweetLikeService likeService;
    public TweetLikeController(TweetLikeService likeService) {
        this.likeService = likeService;
    }
    @PostMapping("/{cid}")
    public Result<String> likeComment(@PathVariable int cid) {
        return likeService.likeTweet(cid);
    }
    @GetMapping("/list")
    public Result<List<Integer>> getCids() {
        return likeService.getTids();
    }
}
