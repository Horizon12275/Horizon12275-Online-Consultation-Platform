package org.example.backend.service;

import org.example.backend.entity.Result;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TweetLikeService {

    Result<String> likeTweet(int cid);
    Result<List<Integer>> getTids();
}
