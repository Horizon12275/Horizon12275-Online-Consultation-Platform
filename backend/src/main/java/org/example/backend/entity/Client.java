package org.example.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

@Data
@Entity
@Table(name = "clients")
@JsonIgnoreProperties({"hibernateLazyInitializer","handler","tweets","user"})
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(precision = 5,scale = 2)
    private BigDecimal balance;
    private String firstName;
    private String lastName;
    private String region;
    private String username;
    @Lob
    private String aboutMe;
    private String avatar;
    @OneToOne(fetch=FetchType.LAZY)
    @JoinColumn(name = "uid")
    private User user;
    @OneToMany(mappedBy = "poster",cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.LAZY)
    private List<Tweet> tweets;
}
