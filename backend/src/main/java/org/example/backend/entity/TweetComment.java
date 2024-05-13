package org.example.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@Table(name = "tweet_comments")
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer","handler","tweet"})//忽略cartItems属性 并且解决cartItems属性为null的问题
public class TweetComment {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private int id;
    @Lob
    private String content;
    private LocalDateTime time;
    @OneToOne(fetch=FetchType.LAZY)
    @JoinColumn(name = "cid")
    @JsonIgnoreProperties({"articleComment","expertComment","tweetComment"})
    private Comment comment;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "uid")
    @JsonIgnoreProperties({"tweetComments"})
    private User user;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "tid")
    private Tweet tweet;
}
