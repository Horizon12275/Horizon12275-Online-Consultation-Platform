package org.example.backend.serviceImpl;

import org.example.backend.entity.*;
import org.example.backend.repository.CommentRepository;
import org.example.backend.repository.UserRepository;
import org.example.backend.service.CommentService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
@Service
public class CommentServiceImpl implements CommentService {
    private final CommentRepository repository;
    private final UserRepository userRepository;
    public CommentServiceImpl(CommentRepository repository, UserRepository userRepository) {
        this.repository = repository;
        this.userRepository = userRepository;
    }
    public Result<List<Comment>> getCommentsByAid(int aid) {
        List<Comment> comments = repository.getCommentsByArticleId(aid);
        return Result.success(comments);
    }
    public Result<Comment> addComment(int bid,int uid, String content) {
        Comment comment = new Comment();

        User user = userRepository.findById(uid).orElse(null);
        comment.setUser(user);
        comment.setContent(content);
        comment.setTime(LocalDateTime.now());//获取当前时间
        comment.setReplies(List.of());//设置回复为空 防止空指针异常
        repository.save(comment);
        return Result.success(comment);
    }
    public Result<Comment> deleteComment(int id) {
       if (repository.existsById(id)) {
            repository.deleteById(id);
            return Result.success(null);
        }
        return Result.error(404,"评论不存在");
    }
    public Result<Reply> addReply(int cid, int uid, String content) {
        Comment comment = repository.findById(cid).orElse(null);
        if (comment == null) {
            return Result.error(404,"评论不存在");
        }
        Reply reply = new Reply();
        reply.setComment(comment);
        User user = userRepository.findById(uid).orElse(null);
        if (user == null) {
            return Result.error(404,"用户不存在");
        }
        reply.setUser(user);
        reply.setContent(content);
        reply.setTime(LocalDateTime.now());
        comment.getReplies().add(reply);
        repository.save(comment);
        return Result.success(reply);
    }
}
