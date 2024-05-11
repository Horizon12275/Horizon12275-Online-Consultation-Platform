package org.example.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Data
@Entity
@Table(name = "experts")
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer","handler","expertComments","articles","user"})
public class Expert {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String region;
    private String firstName;
    private String lastName;
    @Lob
    private String aboutMe;
    private String field;
    @Enumerated(EnumType.STRING)
    private educationLevel education;
    private String introduction;
    private String avatar;
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
    @JsonIgnoreProperties("expert")
    @OneToMany(mappedBy = "expert",cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.LAZY)
    private List<ExpertComment> expertComments;

    public enum educationLevel {
        Junior,Senior,Master,Doctor,Undergraduate
    }
}
