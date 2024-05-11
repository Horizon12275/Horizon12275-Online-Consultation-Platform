package org.example.backend.repository;

import org.example.backend.entity.ExpertApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExpertApplicationRepository extends JpaRepository<ExpertApplication, Integer> {
}
