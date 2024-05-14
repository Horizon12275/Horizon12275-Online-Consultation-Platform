package org.example.backend.service;

import org.example.backend.entity.Consultation;
import org.example.backend.entity.Result;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ConsultationService {
    Result<List<Consultation>> getConsultations();

    Result<Consultation> addConsultation(int eid);
}
