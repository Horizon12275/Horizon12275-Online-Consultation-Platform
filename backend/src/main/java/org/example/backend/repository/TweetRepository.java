package org.example.backend.repository;

import org.example.backend.entity.Tweet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface TweetRepository extends JpaRepository<Tweet, Integer> {
    public List<Tweet> getTweetsByPosterId(int uid);
    public Tweet getTweetById(int id);
    public List<Tweet> getTweetsByContentLike(String keyword);
}
