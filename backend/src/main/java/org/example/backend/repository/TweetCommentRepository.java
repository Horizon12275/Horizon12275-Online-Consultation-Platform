package org.example.backend.repository;

import org.example.backend.entity.TweetComment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TweetCommentRepository extends JpaRepository<TweetComment, Integer> {
    List<TweetComment> getTweetCommentsByTweetId(int aid);
    TweetComment getTweetCommentById(int id);
}
