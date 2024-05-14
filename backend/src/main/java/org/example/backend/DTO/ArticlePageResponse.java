package org.example.backend.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.backend.entity.Article;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ArticlePageResponse {
    private long total;
    private int pages;
    private List<Article> articles;
}
