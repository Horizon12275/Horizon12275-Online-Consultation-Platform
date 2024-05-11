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
@Table(name = "articles")
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class Article {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private int id;
    private String title;
    @Lob
    private String content;
    private String cover;
    private LocalDateTime time;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "eid")
    @JsonIgnoreProperties({"articles"})
    private Expert author;
    @JsonIgnoreProperties("article")
    @OneToMany(mappedBy = "article",cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.LAZY)
    private List<ArticleComment> articleComments;
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "article_tag",joinColumns = @JoinColumn(name = "aid"),inverseJoinColumns = @JoinColumn(name = "tid"))
    private List<Tag> tags;
}
