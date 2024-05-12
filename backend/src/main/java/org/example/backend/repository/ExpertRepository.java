package org.example.backend.repository;

import org.example.backend.entity.Article;
import org.example.backend.entity.Expert;
import org.example.backend.entity.Speciality;
import org.example.backend.entity.Tag;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExpertRepository extends JpaRepository<Expert, Integer> {
    Expert findExpertByUserId(int uid);
    Expert findExpertById(int id);
    public Page<Expert> getExpertsByNameLikeOrAboutMeLike(String name, String aboutMe, Pageable pageable);

    public Page<Expert> findExpertsBySpecialitiesContains(Speciality speciality, Pageable pageable);
}
