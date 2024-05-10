package org.example.backend.serviceImpl;

import org.example.backend.entity.*;
import org.example.backend.repository.ClientRepository;
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
    private final ClientRepository clientRepository;
    public ExpertCommentServiceImpl(ExpertCommentRepository repository, UserRepository userRepository, ClientRepository clientRepository) {
        this.repository = repository;
        this.userRepository = userRepository;
        this.clientRepository = clientRepository;
    }
    public int getUid() {//从数据库里查询id
        String username = ((UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername();
        return userRepository.findUserByEmail(username).getId();
    }
    public Result<List<ExpertComment>> getExpertCommentsByAid(int aid) {
        List<ExpertComment> expertComments = repository.getExpertCommentsByExpertId(aid);
        return Result.success(expertComments);
    }
    public Result<ExpertComment> addExpertComment(int aid, String content) {
        int uid = getUid();
        if(clientRepository.getClientByUserId(uid) == null)
            return Result.error(403,"只有用户才能评论！");
        ExpertComment expertComment = new ExpertComment();
        expertComment.setExpert(new Expert());
        expertComment.getExpert().setId(aid);
        User user = userRepository.findById(uid).orElse(null);
        expertComment.setUser(user);
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
