package org.example.backend.serviceImpl;

import org.example.backend.entity.Expert;
import org.example.backend.entity.Result;
import org.example.backend.repository.ExpertRepository;
import org.example.backend.service.ExpertService;
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
    public Result<List<Expert>> searchExperts(String keyword){
        return Result.success(repository.getExpertsByNameLikeOrIntroductionLike("%"+keyword+"%", "%"+keyword+"%"));
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
        return Result.success(repository.findAll().subList(0, nums));//返回前nums个专家
    }
}
