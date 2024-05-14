package org.example.backend.service;

import org.example.backend.entity.ArticleComment;
import org.example.backend.entity.Reply;
import org.example.backend.entity.Result;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface ArticleCommentService {
    public Result<List<ArticleComment>> getArticleCommentsByAid(int aid);
    public Result<ArticleComment> addArticleComment(int aid, String content);
    public Result<ArticleComment> deleteArticleComment(int id);
    public Result<Reply> addArticleReply(int acid, String content);

}
