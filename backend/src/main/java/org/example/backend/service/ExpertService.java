package org.example.backend.service;

import org.example.backend.DTO.ExpertPageResponse;
import org.example.backend.entity.Expert;
import org.example.backend.entity.Result;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ExpertService {
    public Result<List<Expert>> getExperts();
    public Result<Expert> getExpertById(int id);
    public Result<Expert> addExpert(Expert expert);
    public Result<Expert> updateExpert(int id, Expert expert);
    public Result<Expert> deleteExpert(int id);
    public Result<ExpertPageResponse> searchExperts(String keyword, int page, int pageSize);
    public Result<List<Expert>> getRecommendedExperts(int nums);
    public Result<ExpertPageResponse> categorySearch(int sid, int page, int pageSize);
}
