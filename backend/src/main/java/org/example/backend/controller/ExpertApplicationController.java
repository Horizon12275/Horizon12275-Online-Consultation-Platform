package org.example.backend.controller;

import org.example.backend.entity.ExpertApplication;
import org.example.backend.entity.Result;
import org.example.backend.service.ExpertApplicationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/application")
public class ExpertApplicationController {
    private final ExpertApplicationService service;
    public ExpertApplicationController(ExpertApplicationService service) {
        this.service = service;
    }
    @GetMapping("/list")
    public Result<List<ExpertApplication>> getApplications() {
        return service.getApplications();
    }
    @PostMapping("/add")
    public Result<ExpertApplication> addApplication(@RequestBody ExpertApplication application) {
        return service.addApplication(application);
    }
    @DeleteMapping("/delete/{id}")
    public Result<ExpertApplication> deleteApplication(@PathVariable int id) {
        return service.deleteApplication(id);
    }
    @PutMapping("/update/{id}")
    public Result<ExpertApplication> updateApplication(@RequestBody ExpertApplication application) {
        return service.updateApplication(application);
    }
    @PostMapping("/approve/{id}")
    public Result<ExpertApplication> approveApplication(@PathVariable int id) {
        return service.approveApplication(id);
    }

}
