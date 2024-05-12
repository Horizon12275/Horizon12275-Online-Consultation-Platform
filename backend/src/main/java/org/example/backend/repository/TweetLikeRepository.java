package org.example.backend.repository;

import org.example.backend.entity.TweetLike;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TweetLikeRepository extends JpaRepository<TweetLike, Integer> {
    public TweetLike getTweetLikeByUserIdAndTweetId(int uid, int cid);
    public List<TweetLike> getTweetLikesByUserId(int uid);

}
