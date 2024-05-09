package org.example.backend.repository;

import org.example.backend.entity.Expert;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExpertRepository extends JpaRepository<Expert, Integer> {
    Expert findExpertByUserUsername(String username);
    Expert findExpertByUserId(int uid);
    Expert findExpertById(int id);
    List<Expert> getExpertsByNameLikeOrIntroductionLike(String name, String introduction);
}
