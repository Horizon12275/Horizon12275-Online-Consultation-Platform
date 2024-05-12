package org.example.backend.serviceImpl;

import org.example.backend.entity.*;
import org.example.backend.repository.ClientRepository;
import org.example.backend.repository.CommentRepository;
import org.example.backend.repository.ExpertCommentRepository;
import org.example.backend.repository.UserRepository;
import org.example.backend.service.ExpertCommentService;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ExpertCommentServiceImpl implements ExpertCommentService {
    private final ExpertCommentRepository repository;
    private final UserRepository userRepository;
    private final CommentRepository commentRepository;

    public ExpertCommentServiceImpl(ExpertCommentRepository repository, UserRepository userRepository, CommentRepository commentRepository) {
        this.repository = repository;
        this.userRepository = userRepository;
        this.commentRepository = commentRepository;
    }
    public int getUid() {//从数据库里查询id
        String username = ((UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername();
        return userRepository.findUserByEmail(username).getId();
    }
    public Result<List<ExpertComment>> getExpertCommentsByEid(int eid) {
        List<ExpertComment> expertComments = repository.getExpertCommentsByExpertId(eid);
        return Result.success(expertComments);
    }
    public Result<ExpertComment> addExpertComment(int aid, String content) {
        int uid = getUid();
        if(userRepository.findUserById(uid).getRole() != User.Role.user)
            return Result.error(403,"只有用户才能评论！");
        Comment comment = new Comment();
        commentRepository.save(comment);
        ExpertComment expertComment = new ExpertComment();
        expertComment.setExpert(new Expert());
        expertComment.getExpert().setId(aid);
        expertComment.setUser(new User());
        expertComment.getUser().setId(uid);
        expertComment.setComment(comment);
        expertComment.setContent(content);
        expertComment.setTime(LocalDateTime.now());//获取当前时间
        repository.save(expertComment);
        return Result.success(expertComment);
    }

    public Result<ExpertComment> deleteExpertComment(int id) {
        if (repository.existsById(id)) {
            if(repository.getExpertCommentById(id).getUser().getId() != getUid())
                return Result.error(403,"无权删除");

            repository.deleteById(id);
            return Result.success(null);
        }
        return Result.error(404,"评论不存在");
    }

}
