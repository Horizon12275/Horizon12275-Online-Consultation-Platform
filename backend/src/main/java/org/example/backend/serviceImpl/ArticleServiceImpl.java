package org.example.backend.serviceImpl;

import org.example.backend.entity.Article;
import org.example.backend.entity.Result;
import org.example.backend.repository.ArticleRepository;
import org.example.backend.service.ArticleService;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class ArticleServiceImpl implements ArticleService {
    private final ArticleRepository repository;
    public ArticleServiceImpl(ArticleRepository repository){
        this.repository = repository;
    }
    public Result<List<Article>> getArticles(){
        return Result.success(repository.findAll());
    }
    public Result<Article> getArticleById(int id){
        Article article = repository.findById(id).orElse(null);
        if(article == null){
            return Result.error(404, "文章不存在！");
        }
        return Result.success(article);
    }
    public Result<List<Article>> getRecommendations(int nums){
        return Result.success(repository.findAll().subList(0, nums));//返回前nums篇文章
    }
    public Result<Article> addArticle(Article article){
        return Result.success(repository.save(article));
    }
    public Result<Article> updateArticle(int id, Article article){
        Article oldArticle = repository.findById(id).orElse(null);
        if(oldArticle == null){
            return Result.error(404, "文章不存在！");
        }
        oldArticle.setTitle(article.getTitle());
        oldArticle.setAuthor(article.getAuthor());
        oldArticle.setContent(article.getContent());
        oldArticle.setCover(article.getCover());
        return Result.success(repository.save(oldArticle));
    }
    public Result<Article> deleteArticle(int id){
        if(repository.existsById(id)){
            repository.deleteById(id);
            return Result.success(null);
        }else{
            return Result.error(404, "文章不存在！");
        }
    }
    public Result<List<Article>> searchArticles(String keyword){
        return Result.success(repository.getArticlesByTitleLikeOrAuthorNameLike(keyword, keyword));
    }
}
