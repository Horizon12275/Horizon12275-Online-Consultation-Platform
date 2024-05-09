package org.example.backend.service;

import org.example.backend.entity.Result;
import org.example.backend.entity.Tweet;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TweetService {
    public Result<List<Tweet>> getTweets();
    public Result<Tweet> getTweetById(int id);
    public Result<Tweet> addTweet(String content);
    public Result<Tweet> updateTweet(int id, Tweet tweet);
    public Result<Tweet> deleteTweet(int id);
    public Result<List<Tweet>> getTweetsByPosterId(int uid);
    public Result<List<Tweet>> getTweetsByContentLike(String keyword);

}
