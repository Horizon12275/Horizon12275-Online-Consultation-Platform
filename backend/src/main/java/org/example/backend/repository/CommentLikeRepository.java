package org.example.backend.repository;

import org.example.backend.entity.CommentLike;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentLikeRepository extends JpaRepository<CommentLike, Integer> {
    public CommentLike getCommentLikeByUserIdAndCommentId(int uid, int cid);
    public List<CommentLike> getCommentLikesByUserId(int uid);

}
