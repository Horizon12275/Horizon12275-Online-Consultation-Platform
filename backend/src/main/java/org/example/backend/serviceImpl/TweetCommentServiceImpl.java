package org.example.backend.serviceImpl;

import org.example.backend.entity.*;
import org.example.backend.repository.TweetCommentRepository;
import org.example.backend.repository.UserRepository;
import org.example.backend.service.TweetCommentService;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class TweetCommentServiceImpl implements TweetCommentService {
    private final TweetCommentRepository repository;
    private final UserRepository userRepository;
    public TweetCommentServiceImpl(TweetCommentRepository repository, UserRepository userRepository) {
        this.repository = repository;
        this.userRepository = userRepository;
    }
    public int getUid() {//从数据库里查询id
        String username = ((UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername();
        return userRepository.findUserByEmail(username).getId();
    }
    public Result<List<TweetComment>> getTweetCommentsByAid(int aid) {
        List<TweetComment> tweetComments = repository.getTweetCommentsByTweetId(aid);
        return Result.success(tweetComments);
    }
    public Result<TweetComment> addTweetComment(int aid, String content) {
        int uid = getUid();
        TweetComment tweetComment = new TweetComment();
        tweetComment.setTweet(new Tweet());
        tweetComment.getTweet().setId(aid);
        User user = userRepository.findById(uid).orElse(null);
        tweetComment.setUser(user);
        tweetComment.setContent(content);
        tweetComment.setTime(LocalDateTime.now());//获取当前时间
        repository.save(tweetComment);
        return Result.success(tweetComment);
    }

    public Result<TweetComment> deleteTweetComment(int id) {
        if (repository.existsById(id)) {
            if(repository.getTweetCommentById(id).getUser().getId() != getUid())
                return Result.error(403,"无权删除");
            repository.deleteById(id);
            return Result.success(null);
        }
        return Result.error(404,"评论不存在");
    }

}
