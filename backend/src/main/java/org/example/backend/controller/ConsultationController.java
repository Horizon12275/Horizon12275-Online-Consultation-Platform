package org.example.backend.controller;

import org.example.backend.entity.Consultation;
import org.example.backend.entity.Result;
import org.example.backend.service.ConsultationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/consultation")
public class ConsultationController {
    private final ConsultationService service;
    public ConsultationController(ConsultationService service) {
        this.service = service;
    }
    @GetMapping("/list")
    public Result<List<Consultation>> getConsultations() {
        return service.getConsultations();
    }
    @PostMapping("/add/{eid}")
    public Result<Consultation> addConsultation(@PathVariable int eid) {
        return service.addConsultation(eid);
    }
}
