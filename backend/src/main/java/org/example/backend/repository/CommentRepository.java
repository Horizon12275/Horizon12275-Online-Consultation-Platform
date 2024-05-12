package org.example.backend.repository;

import org.example.backend.entity.Comment;
import org.example.backend.entity.TweetComment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface CommentRepository extends JpaRepository<Comment, Integer> {

}
