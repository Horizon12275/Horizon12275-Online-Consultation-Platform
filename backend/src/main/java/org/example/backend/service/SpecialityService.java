package org.example.backend.service;

import org.example.backend.entity.Result;
import org.example.backend.entity.Speciality;
import org.example.backend.entity.Tag;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface SpecialityService {
    public Result<List<Speciality>> getSpecialities();

}
