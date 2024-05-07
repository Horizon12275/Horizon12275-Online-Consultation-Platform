package org.example.backend.serviceImpl;

import org.example.backend.entity.Result;
import org.example.backend.entity.Tweet;
import org.example.backend.repository.TweetRepository;
import org.example.backend.service.TweetService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TweetServiceImpl implements TweetService {
    TweetRepository repository;
    public TweetServiceImpl(TweetRepository repository) {
        this.repository = repository;
    }
    public Result<List<Tweet>> getTweets() {
        List<Tweet> tweets = repository.findAll();
        return Result.success(tweets);
    }
    public Result<Tweet> getTweetById(int id) {
        Tweet tweet = repository.findById(id).orElse(null);
        if (tweet == null) {
            return Result.error(404, "Tweet not found");
        }
        return Result.success(tweet);
    }
    public Result<Tweet> addTweet(Tweet tweet) {
        Tweet newTweet = repository.save(tweet);
        return Result.success(newTweet);
    }
    public Result<Tweet> updateTweet(int id, Tweet tweet) {
        Tweet oldTweet = repository.findById(id).orElse(null);
        if (oldTweet == null) {
            return Result.error(404, "Tweet not found");
        }
        oldTweet.setContent(tweet.getContent());

        return Result.success(repository.save(oldTweet));
    }
    public Result<Tweet> deleteTweet(int id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return Result.success(null);
        } else {
            return Result.error(404, "Tweet not found");
        }
    }
    public Result<List<Tweet>> getTweetsByPosterId(int uid) {
        List<Tweet> tweets = repository.getTweetsByPosterId(uid);
        return Result.success(tweets);
    }
    public Result<List<Tweet>> getTweetsByContentLike(String keyword) {
        List<Tweet> tweets = repository.getTweetsByContentLike("%" + keyword + "%");
        return Result.success(tweets);
    }

}
