package org.example.backend.serviceImpl;

import org.example.backend.DTO.ArticlePageResponse;
import org.example.backend.DTO.ExpertPageResponse;
import org.example.backend.DTO.ExpertPageResponse;
import org.example.backend.entity.*;
import org.example.backend.entity.Expert;
import org.example.backend.repository.ExpertRepository;
import org.example.backend.service.ExpertService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpertServiceImpl implements ExpertService {
    ExpertRepository repository;
    public ExpertServiceImpl(ExpertRepository repository) {
        this.repository = repository;
    }

    public Result<List<Expert>> getExperts(){
        return Result.success(repository.findAll());
    }
    public Result<Expert> getExpertById(int id){
        Expert expert = repository.findById(id).orElse(null);
        if(expert == null){
            return Result.error(404, "专家不存在！");
        }
        return Result.success(expert);
    }
    public Result<Expert> addExpert(Expert expert){
        return Result.success(repository.save(expert));
    }
    public Result<Expert> updateExpert(int id, Expert expert){
        Expert oldExpert = repository.findById(id).orElse(null);
        if(oldExpert == null){
            return Result.error(404, "专家不存在！");
        }

        return Result.success(repository.save(oldExpert));
    }
    public Result<Expert> deleteExpert(int id){
        if(repository.existsById(id)){
            repository.deleteById(id);
            return Result.success(null);
        }else{
            return Result.error(404, "专家不存在！");
        }
    }
    public Result<List<Expert>> getRecommendedExperts(int nums){
        List<Expert> experts = repository.findAll();
        return Result.success(experts.subList(0,Math.min(experts.size(),nums)));//返回前nums个专家
    }
    public Result<ExpertPageResponse> searchExperts(String keyword, int page, int pageSize){
        Pageable pageable = PageRequest.of(page - 1, pageSize);
        Page<Expert> experts = repository.getExpertsByNameLikeOrAboutMeLike("%" + keyword + "%" , "%" + keyword + "%", pageable);
        ExpertPageResponse response = new ExpertPageResponse(
                experts.getTotalElements(),
                experts.getTotalPages(),
                experts.getContent()
        );
        return Result.success(response);
    }
    public Result<ExpertPageResponse> categorySearch(int sid, int page, int pageSize){
        Pageable pageable = PageRequest.of(page - 1, pageSize);
        Speciality speciality = new Speciality();
        speciality.setId(sid);
        Page<Expert> articles = repository.findExpertsBySpecialitiesContains(speciality, pageable);
        ExpertPageResponse response = new ExpertPageResponse(
                articles.getTotalElements(),
                articles.getTotalPages(),
                articles.getContent()
        );
        return Result.success(response);
    }
}
