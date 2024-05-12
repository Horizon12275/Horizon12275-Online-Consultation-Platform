package org.example.backend.serviceImpl;

import org.example.backend.DTO.ArticlePageResponse;
import org.example.backend.entity.*;
import org.example.backend.repository.*;
import org.example.backend.service.ArticleService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class ArticleServiceImpl implements ArticleService {
    private final ArticleRepository repository;
    private final TagRepository tagRepository;
    private final UploadRepository uploadRepository;
    private final UserRepository userRepository;
    private final ExpertRepository expertRepository;
    public ArticleServiceImpl(ArticleRepository repository, TagRepository tagRepository, UploadRepository uploadRepository, ExpertRepository expertRepository, UserRepository userRepository) {
        this.repository = repository;
        this.tagRepository = tagRepository;
        this.uploadRepository = uploadRepository;
        this.expertRepository = expertRepository;
        this.userRepository = userRepository;
    }
    public int getUid() {//从数据库里查询id
        String username = ((UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername();
        return userRepository.findUserByEmail(username).getId();
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
    public Result<List<Article>> getArticlesByEid(int eid){
        return Result.success(repository.getArticlesByAuthorId(eid));
    }
    public Result<List<Article>> getRecommendations(int nums){
        return Result.success(repository.findAll().subList(0, nums));//返回前nums篇文章
    }
    public Result<Article> addArticle(String content, int[] tids, String title, MultipartFile file){
        Expert expert = expertRepository.findExpertByUserId(getUid());
        if(expert==null){
            return Result.error(403, "You are not a expert");
        }
        Article article = new Article();
        article.setAuthor(expert);
        article.setContent(content);
        article.setTitle(title);
        article.setTime(LocalDateTime.now());
        if(!file.isEmpty())//如果有图片 上传图片
            try {
                String url = uploadRepository.uploadFile(file, "image");
                article.setCover(url);
            }
            catch (IOException e) {
                return Result.error(500, e.getMessage());
            }
        List<Tag> tags = new ArrayList<>();
        for(int tid:tids){
            tagRepository.findById(tid).ifPresent(tags::add);
        }
        article.setTags(tags);
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
    public Result<ArticlePageResponse> searchArticles(String keyword, int page, int pageSize){
        Pageable pageable = PageRequest.of(page - 1, pageSize);
        Page<Article> books = repository.getArticlesByTitleLikeOrAuthorNameLike("%" + keyword + "%", "%" + keyword + "%", pageable);
        ArticlePageResponse response = new ArticlePageResponse(
                books.getTotalElements(),
                books.getTotalPages(),
                books.getContent()
        );
        return Result.success(response);
    }
    public Result<ArticlePageResponse> categorySearch(int tid, int page, int pageSize){
        Pageable pageable = PageRequest.of(page - 1, pageSize);
        Tag tag = new Tag();
        tag.setId(tid);
        Page<Article> articles = repository.findArticlesByTagsContains(tag, pageable);
        ArticlePageResponse response = new ArticlePageResponse(
                articles.getTotalElements(),
                articles.getTotalPages(),
                articles.getContent()
        );
        return Result.success(response);
    }
}
