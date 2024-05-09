package org.example.backend.serviceImpl;


import org.example.backend.entity.Expert;
import org.example.backend.entity.ExpertApplication;
import org.example.backend.entity.Result;
import org.example.backend.entity.User;
import org.example.backend.repository.ExpertApplicationRepository;
import org.example.backend.repository.ExpertRepository;
import org.example.backend.repository.UserRepository;
import org.example.backend.service.ExpertApplicationService;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ExpertApplicationServiceImpl implements ExpertApplicationService {
    private final ExpertApplicationRepository repository;
    private final UserRepository userRepository;
    private final ExpertRepository expertRepository;
    public ExpertApplicationServiceImpl(ExpertApplicationRepository repository, UserRepository userRepository, ExpertRepository expertRepository) {
        this.repository = repository;
        this.userRepository = userRepository;
        this.expertRepository = expertRepository;
    }
    public Result<ExpertApplication> addApplication(ExpertApplication application) {
        repository.save(application);
        return Result.success(application);
    }
    public Result<List<ExpertApplication>> getApplications() {
        return Result.success(repository.findAll());
    }
    public Result<ExpertApplication> getApplicationById(int id) {
        ExpertApplication application = repository.findById(id).orElse(null);
        if (application == null) {
            return Result.error(404,"申请不存在");
        }
        return Result.success(application);
    }
    public Result<ExpertApplication> deleteApplication(int id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return Result.success(null);
        }
        return Result.error(404,"申请不存在");
    }
    public Result<ExpertApplication> updateApplication(ExpertApplication application) {
        if (repository.existsById(application.getId())) {
            repository.save(application);
            return Result.success(application);
        }
        return Result.error(404, "申请不存在");
    }
    public Result<ExpertApplication> approveApplication(int id) {
        ExpertApplication application = repository.findById(id).orElse(null);
        if (application == null) {
            return Result.error(404,"申请不存在");
        }
        User user = new User(null, "","", User.Role.expert,null,null,1,0,null,null,null,null,null,null,null   );
        userRepository.save(user);
        Expert expert = new Expert(null, application.getFirstName()+application.getLastName(), application.getFirstName(), application.getLastName(), application.getField(),application.getEducation(),application.getIntroduction(),null,null,null,user,null);
        expertRepository.save(expert);
        repository.deleteById(id);
        return Result.success(application);
    }
}

