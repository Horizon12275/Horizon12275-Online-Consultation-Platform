package org.example.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

@Data
@Entity
@Table(name = "experts")
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class Expert {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String introduction;
    private String image;
    @Column(precision = 3,scale = 1)
    private BigDecimal rating;
    @Column(precision = 5,scale = 2)
    private BigDecimal price;
    @OneToOne(fetch=FetchType.LAZY)
    @JoinColumn(name = "uid")
    @JsonIgnoreProperties({"expert"})
    private User user;
    @OneToMany(mappedBy = "author",cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"author"})
    private List<Article> articles;
}
