package org.example.backend.serviceImpl;

import org.example.backend.entity.*;
import org.example.backend.repository.ArticleCommentRepository;
import org.example.backend.repository.UserRepository;
import org.example.backend.service.ArticleCommentService;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
@Service
public class ArticleCommentServiceImpl implements ArticleCommentService {
    private final ArticleCommentRepository repository;
    private final UserRepository userRepository;
    public ArticleCommentServiceImpl(ArticleCommentRepository repository, UserRepository userRepository) {
        this.repository = repository;
        this.userRepository = userRepository;
    }
    public int getUid() {//从数据库里查询id
        String username = ((UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername();
        return userRepository.findUserByEmail(username).getId();
    }
    public Result<List<ArticleComment>> getArticleCommentsByAid(int aid) {
        List<ArticleComment> articleComments = repository.getArticleCommentsByArticleId(aid);
        return Result.success(articleComments);
    }
    public Result<ArticleComment> addArticleComment(int aid, String content) {
        int uid = getUid();
        ArticleComment articleComment = new ArticleComment();
        articleComment.setArticle(new Article());
        articleComment.getArticle().setId(aid);
        User user = userRepository.findById(uid).orElse(null);
        articleComment.setUser(user);
        articleComment.setContent(content);
        articleComment.setTime(LocalDateTime.now());//获取当前时间
        repository.save(articleComment);
        return Result.success(articleComment);
    }

    public Result<ArticleComment> deleteArticleComment(int id) {
        if (repository.existsById(id)) {
            if(repository.getArticleCommentById(id).getUser().getId() != getUid())
                return Result.error(403,"无权删除");
            repository.deleteById(id);
            return Result.success(null);
        }
        return Result.error(404,"评论不存在");
    }
    public Result<Reply> addArticleReply(int cid, String content) {
        int uid = getUid();
        ArticleComment articleComment = repository.findById(cid).orElse(null);
        if (articleComment == null) {
            return Result.error(404, "评论不存在");
        }
        Reply reply = new Reply();
        //reply.setcomment(articleComment);
        User user = userRepository.findById(uid).orElse(null);
        if (user == null) {
            return Result.error(404, "用户不存在");
        }
        reply.setUser(user);
        reply.setContent(content);
        reply.setTime(LocalDateTime.now());
        return Result.success(reply);
    }
}
