package org.example.backend.serviceImpl;

import org.example.backend.entity.Result;
import org.example.backend.entity.Comment;
import org.example.backend.entity.CommentLike;
import org.example.backend.entity.User;
import org.example.backend.repository.CommentLikeRepository;
import org.example.backend.repository.UserRepository;
import org.example.backend.service.CommentLikeService;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CommentLikeServiceImpl implements CommentLikeService {
    private final CommentLikeRepository repository;
    private final UserRepository userRepository;
    public CommentLikeServiceImpl(CommentLikeRepository repository, UserRepository userRepository) {
        this.repository = repository;
        this.userRepository = userRepository;
    }
    public int getUid() {//从数据库里查询id
        String username = ((UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername();
        return userRepository.findUserByEmail(username).getId();
    }
    public Result<String> likeComment(int tid) {
        int uid = getUid();
        CommentLike like = repository.getCommentLikeByUserIdAndCommentId(uid, tid);
        if(like != null)
        {
            repository.delete(like);
            return Result.success("取消点赞");
        }
        like = new CommentLike();
        like.setComment(new Comment());
        like.getComment().setId(tid);
        like.setUser(new User());
        like.getUser().setId(uid);
        repository.save(like);
        return Result.success("点赞成功");
    }
    public Result<List<Integer>> getCids() {
        int uid = getUid();
        List<Integer> cids = new ArrayList<>();
        List<CommentLike> likes = repository.getCommentLikesByUserId(uid);
        for(CommentLike like : likes)
        {
            cids.add(like.getComment().getId());
        }
        return Result.success(cids);
    }
}
