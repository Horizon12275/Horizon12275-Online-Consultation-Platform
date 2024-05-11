package org.example.backend.service;

import org.example.backend.entity.ExpertApplication;
import org.example.backend.entity.Result;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ExpertApplicationService  {
    public Result<ExpertApplication> addApplication(ExpertApplication application);
    public Result<ExpertApplication> getApplicationById(int id);
    public Result<ExpertApplication> deleteApplication(int id);
    public Result<ExpertApplication> updateApplication(ExpertApplication application);
    public Result<ExpertApplication> approveApplication(int id);
    public Result<List<ExpertApplication>> getApplications();

}
