package org.example.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

@Data
@Entity
@Table(name = "clients")
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private int money;
    @OneToOne(fetch=FetchType.LAZY)
    @JoinColumn(name = "uid")
    @JsonIgnoreProperties({"clients"})
    private User user;
}
