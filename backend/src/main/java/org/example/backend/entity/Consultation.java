package org.example.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "consultations")
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class Consultation {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private int id;
    private LocalDateTime time;//最后一次咨询时间
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cid")
    @JsonIgnoreProperties({"consultations"})
    private Client client;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "eid")
    @JsonIgnoreProperties({"consultations"})
    private Expert expert;
}
