package org.example.backend.serviceImpl;

import org.example.backend.entity.Result;
import org.example.backend.entity.Tweet;
import org.example.backend.entity.User;
import org.example.backend.repository.TweetRepository;
import org.example.backend.repository.UserRepository;
import org.example.backend.service.TweetService;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class TweetServiceImpl implements TweetService {
    TweetRepository repository;
    UserRepository userRepository;
    public TweetServiceImpl(TweetRepository repository, UserRepository userRepository) {
        this.repository = repository;
        this.userRepository = userRepository;
    }
    public int getUid() {//从数据库里查询id
        String username = ((UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername();
        return userRepository.findUserByEmail(username).getId();
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
    public Result<Tweet> addTweet(String content) {
        Tweet tweet = new Tweet();
        tweet.setContent(content);
        User poster=new User();
        poster.setId(getUid());
        tweet.setPoster(poster);
        tweet.setTime(LocalDateTime.now());
        return Result.success(repository.save(tweet));
    }
    public Result<Tweet> updateTweet(int id, Tweet tweet) {
        Tweet oldTweet = repository.findById(id).orElse(null);
        if (oldTweet == null) {
            return Result.error(404, "Tweet not found");
        }
        if(oldTweet.getPoster().getId()!=getUid()){
            return Result.error(403, "You are not the poster of this tweet");
        }
        oldTweet.setContent(tweet.getContent());
        return Result.success(repository.save(oldTweet));
    }
    public Result<Tweet> deleteTweet(int id) {
        if (repository.existsById(id)) {
            if(repository.getTweetById(id).getPoster().getId()!=getUid()){
                return Result.error(403, "You are not the poster of this tweet");
            }
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
