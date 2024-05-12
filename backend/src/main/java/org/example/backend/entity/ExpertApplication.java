package org.example.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Data
@Entity
@Table(name = "expert_applications")
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer","handler","verificationCode"})
public class ExpertApplication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String email;
    private String password;
    private String verificationCode;
    private String firstName;
    private String lastName;
    private String field;//一个json字符串，解析为List<speciality>
    @Enumerated(EnumType.STRING)
    private Expert.educationLevel education;
    private String selfIntroduction;
    private String image;



}
