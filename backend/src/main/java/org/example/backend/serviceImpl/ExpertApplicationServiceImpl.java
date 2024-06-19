package org.example.backend.serviceImpl;


import com.alibaba.fastjson2.JSON;
import org.example.backend.entity.*;
import org.example.backend.repository.*;
import org.example.backend.service.ExpertApplicationService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;


@Service
public class ExpertApplicationServiceImpl implements ExpertApplicationService {
    private final ExpertApplicationRepository repository;
    private final UserRepository userRepository;
    private final ExpertRepository expertRepository;
    private final SpecialityRepository specialityRepository;
    private final UploadRepository uploadRepository;
    public ExpertApplicationServiceImpl(ExpertApplicationRepository repository, UserRepository userRepository, ExpertRepository expertRepository, SpecialityRepository specialityRepository, UploadRepository uploadRepository) {
        this.repository = repository;
        this.userRepository = userRepository;
        this.expertRepository = expertRepository;
        this.specialityRepository = specialityRepository;
        this.uploadRepository = uploadRepository;
    }
    public Result<ExpertApplication> addApplication(ExpertApplication application, MultipartFile file) {
        if(file != null&& !file.isEmpty())//如果有图片
            try {
                String url = uploadRepository.uploadFile(file, "image");
                application.setCertificate(url);
            }
            catch (IOException e) {
                return Result.error(500, e.getMessage());
            }
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

        Expert expert = new Expert();
        expert.setFirstName(application.getFirstName());
        expert.setLastName(application.getLastName());
        expert.setName(application.getFirstName() + " " + application.getLastName());
        expert.setAboutMe(application.getIntroduction());
        expert.setEducation(application.getEducation());

        List<Integer> sids = JSON.parseArray(application.getField(), Integer.class);
        List<Speciality> specialities = specialityRepository.findAllById(sids);//根据id查询专长

        expert.setSpecialities(specialities);
        expert.setEducation(application.getEducation());

        userRepository.save(user);
        expert.setUser(user);
        expertRepository.save(expert);
        repository.deleteById(id);
        return Result.success(application);
    }
}

