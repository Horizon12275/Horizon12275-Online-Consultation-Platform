package org.example.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Entity
@Table(name = "users")
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer","handler","expert","articleComments","password","sendMessages","receiveMessages"})//忽略cartItems属性 并且解决cartItems属性为null的问题
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String username;
    private String password;
    @Enumerated(EnumType.STRING)
    private Role role;
    private String avatar;
    private String email;
    private int enabled;
    private int level;
    private String tel;
    @Lob
    private String aboutMe;
    @OneToOne(mappedBy = "user",cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.LAZY)
    private Expert expert;
    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.LAZY)
    private List<ArticleComment> articleComments;
    @OneToMany(mappedBy = "sender",cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.LAZY)
    private List<Message> sendMessages;
    @OneToMany(mappedBy = "receiver",cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.LAZY)
    private List<Message> receiveMessages;
    @OneToMany(mappedBy = "poster",cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"poster"})
    private List<Tweet> tweets;

    public enum Role {
        user,expert,admin
    }
}
