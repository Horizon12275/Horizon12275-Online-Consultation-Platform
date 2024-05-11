package org.example.backend.serviceImpl;


import org.example.backend.entity.Expert;
import org.example.backend.entity.ExpertApplication;
import org.example.backend.entity.Result;
import org.example.backend.entity.User;
import org.example.backend.repository.ExpertApplicationRepository;
import org.example.backend.repository.ExpertRepository;
import org.example.backend.repository.UserRepository;
import org.example.backend.service.ExpertApplicationService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
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
        User user = new User();
        user.setEmail(application.getEmail());
        user.setPassword(new BCryptPasswordEncoder().encode(application.getPassword()));
        user.setRole(User.Role.expert);
        user.setEnabled(true);
        userRepository.save(user);
        Expert expert = new Expert();
        expert.setUser(user);
        expert.setFirstName(application.getFirstName());
        expert.setLastName(application.getLastName());
        expert.setAboutMe(application.getAboutMe());
        expert.setAvatar(application.getAvatar());
        expert.setName(application.getFirstName() + " " + application.getLastName());
        expert.setRegion(application.getRegion());
        expert.setIntroduction(application.getIntroduction());
        expertRepository.save(expert);
        repository.deleteById(id);
        return Result.success(application);
    }
}

