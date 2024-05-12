package org.example.backend.serviceImpl;

import org.example.backend.entity.Result;
import org.example.backend.entity.Speciality;
import org.example.backend.repository.SpecialityRepository;
import org.example.backend.service.SpecialityService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SpecialityServiceImpl implements SpecialityService {
    private final SpecialityRepository repository;
    public SpecialityServiceImpl(SpecialityRepository repository) {
        this.repository = repository;
    }
    public Result<List<Speciality>> getSpecialities() {
        return Result.success(repository.findAll());
    }
}
