package org.example.backend.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.backend.entity.Article;
import org.example.backend.entity.Expert;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ExpertPageResponse {
    private long total;
    private int pages;
    private List<Expert> experts;
}
