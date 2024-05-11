package org.example.backend.controller;

import org.example.backend.entity.Expert;
import org.example.backend.entity.Result;
import org.example.backend.service.ExpertService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/expert")
public class ExpertController {
    private final ExpertService service;
    public ExpertController(ExpertService service) {
        this.service = service;
    }
    @GetMapping("/list")
    public Result<List<Expert>> list() {
        return service.getExperts();
    }

    @GetMapping("/get/{id}")
    public Result<Expert> getExpertById(@PathVariable int id) {
        return service.getExpertById(id);
    }

    @GetMapping("/recommend/{nums}")
    public Result<List<Expert>> getRecommendations(@PathVariable int nums) {
        return service.getRecommendedExperts(nums);
    }

    @PutMapping("/admin/update/{id}")
    @PreAuthorize("hasRole('expert')")
    public Result<Expert> updateExpert(@PathVariable int id, @RequestBody Expert expert) {
        return service.updateExpert(id, expert);
    }
    @DeleteMapping("/admin/delete/{id}")
    public Result<Expert> deleteExpert(@PathVariable int id) {
        return service.deleteExpert(id);
    }
    @PostMapping("/admin/add")
    public Result<Expert> addExpert(@RequestBody Expert expert) {
        return service.addExpert(expert);
    }
    @GetMapping("/search")
    public Result<List<Expert>> searchExperts(@RequestParam String keyword) {
        return service.searchExperts(keyword);
    }
}
