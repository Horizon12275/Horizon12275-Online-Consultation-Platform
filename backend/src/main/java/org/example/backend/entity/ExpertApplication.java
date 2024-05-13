package org.example.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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
    private String education;
    private String introduction;
    @JsonProperty(required = false)//不是必须的
    private String certificate;



}
