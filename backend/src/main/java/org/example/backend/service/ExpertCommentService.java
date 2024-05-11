package org.example.backend.service;

import org.example.backend.entity.ExpertComment;
import org.example.backend.entity.ArticleReply;
import org.example.backend.entity.Result;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ExpertCommentService {
    public Result<List<ExpertComment>> getExpertCommentsByEid(int aid);
    public Result<ExpertComment> addExpertComment(int aid, String content);
    public Result<ExpertComment> deleteExpertComment(int id);
    //public Result<ArticleReply> addExpertReply(int acid, String content);

}
