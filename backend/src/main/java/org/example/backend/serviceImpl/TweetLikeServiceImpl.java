package org.example.backend.serviceImpl;

import org.example.backend.entity.Tweet;
import org.example.backend.entity.TweetLike;
import org.example.backend.entity.Result;
import org.example.backend.entity.User;
import org.example.backend.repository.TweetLikeRepository;
import org.example.backend.repository.UserRepository;
import org.example.backend.service.TweetLikeService;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TweetLikeServiceImpl implements TweetLikeService {
    private final TweetLikeRepository repository;
    private final UserRepository userRepository;
    public TweetLikeServiceImpl(TweetLikeRepository repository, UserRepository userRepository) {
        this.repository = repository;
        this.userRepository = userRepository;
    }
    public int getUid() {//从数据库里查询id
        String username = ((UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername();
        return userRepository.findUserByEmail(username).getId();
    }
    public Result<String> likeTweet(int tid) {
        int uid = getUid();
        TweetLike like = repository.getTweetLikeByUserIdAndTweetId(uid, tid);
        if(like != null)
        {
            repository.delete(like);
            return Result.success("取消点赞");
        }
        like = new TweetLike();
        like.setTweet(new Tweet());
        like.getTweet().setId(tid);
        like.setUser(new User());
        like.getUser().setId(uid);
        repository.save(like);
        return Result.success("点赞成功");
    }
    public Result<List<Integer>> getTids() {
        int uid = getUid();
        List<Integer> cids = new ArrayList<>();
        List<TweetLike> likes = repository.getTweetLikesByUserId(uid);
        for(TweetLike like : likes)
        {
            cids.add(like.getTweet().getId());
        }
        return Result.success(cids);
    }
}
