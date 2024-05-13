package org.example.backend.repository;

import org.example.backend.entity.Consultation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ConsultationRepository extends JpaRepository<Consultation, Integer>{
    Consultation getConsultationByClientIdAndExpertId(int senderId, int receiverId);
    List<Consultation> getConsultationsByClientId(Integer id);
    List<Consultation> getConsultationsByExpertId(Integer id);
}
