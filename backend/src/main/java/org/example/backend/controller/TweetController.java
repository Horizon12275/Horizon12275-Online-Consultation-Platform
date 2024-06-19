package org.example.backend.controller;

import org.example.backend.entity.Expert;
import org.example.backend.entity.Result;
import org.example.backend.entity.Tweet;
import org.example.backend.service.ExpertService;
import org.example.backend.service.TweetService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/tweet")
public class TweetController {
    private final TweetService service;
    public TweetController(TweetService service) {
        this.service = service;
    }
    @GetMapping("/list")
    public Result<List<Tweet>> list() {
        return service.getTweets();
    }

    @GetMapping("/get/{id}")
    public Result<Tweet> getTweetById(@PathVariable int id) {
        return service.getTweetById(id);
    }

    @PutMapping("/update/{id}")
    public Result<Tweet> updateTweet(@PathVariable int id, @RequestBody Tweet tweet) {
        return service.updateTweet(id, tweet);
    }
    @DeleteMapping("/delete/{id}")
    public Result<Tweet> deleteTweet(@PathVariable int id) {
        return service.deleteTweet(id);
    }
    @PostMapping("/add")
    public Result<Tweet> addTweet(@RequestParam String content,@RequestParam(required = false) MultipartFile file) {
        return service.addTweet(content,file);
    }

    @GetMapping("/search")
    public Result<List<Tweet>> searchTweets(@RequestParam String keyword) {
        return service.getTweetsByContentLike(keyword);
    }
}
