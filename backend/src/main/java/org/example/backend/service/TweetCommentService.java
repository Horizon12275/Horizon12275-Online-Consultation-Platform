package org.example.backend.service;

import org.example.backend.entity.TweetComment;
import org.example.backend.entity.ArticleReply;
import org.example.backend.entity.Result;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TweetCommentService {
    public Result<List<TweetComment>> getTweetCommentsByAid(int aid);
    public Result<TweetComment> addTweetComment(int aid, String content);
    public Result<TweetComment> deleteTweetComment(int id);
   // public Result<ArticleReply> addTweetReply(int acid, String content);

}
