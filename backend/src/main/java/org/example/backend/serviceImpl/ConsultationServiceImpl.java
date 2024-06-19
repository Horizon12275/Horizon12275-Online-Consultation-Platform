package org.example.backend.serviceImpl;

import org.example.backend.entity.*;
import org.example.backend.repository.ClientRepository;
import org.example.backend.repository.ConsultationRepository;
import org.example.backend.repository.ExpertRepository;
import org.example.backend.repository.UserRepository;
import org.example.backend.service.ConsultationService;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ConsultationServiceImpl implements ConsultationService  {
    private final ConsultationRepository repository;
    private final UserRepository userRepository;
    private final ClientRepository clientRepository;
    private final ExpertRepository expertRepository;
    public ConsultationServiceImpl(ConsultationRepository repository, UserRepository userRepository, ClientRepository clientRepository, ExpertRepository expertRepository) {
        this.repository = repository;
        this.userRepository = userRepository;
        this.clientRepository = clientRepository;
        this.expertRepository = expertRepository;
    }
    public int getUid() {//从数据库里查询id
        String username = ((UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername();
        return userRepository.findUserByEmail(username).getId();
    }
    public Result<List<Consultation>> getConsultations() {
        int uid = getUid();
        User user = userRepository.findUserById(uid);
        if(user.getRole()== User.Role.user) {
            int cid = clientRepository.getClientByUserId(uid).getId();
            return Result.success(repository.getConsultationsByClientId(cid));
        }
        else if(user.getRole()== User.Role.expert){
            int eid = expertRepository.findExpertByUserId(uid).getId();
            return Result.success(repository.getConsultationsByExpertId(eid));
        }
        return Result.error(403, "You are not a client or expert");
    }
    public Result<Consultation> addConsultation(int eid) {
        int uid = getUid();
        User user = userRepository.findUserById(uid);
        if(user.getRole()== User.Role.user) {//只有用户才能发起咨询
            int cid = clientRepository.getClientByUserId(uid).getId();
            if(repository.existsConsultationByClientIdAndExpertId(cid, eid)) {//已经存在咨询
                return Result.error(400, "You have already paid for this expert!");
            }
            Consultation consultation = new Consultation();
            Client client = clientRepository.getClientByUserId(uid);
            Expert expert = expertRepository.findExpertById(eid);
            if (client.getBalance().compareTo(expert.getPrice()) < 0) {//余额不足
                return Result.error(400, "Insufficient balance!");
            }
            client.setBalance(client.getBalance().subtract(expert.getPrice()));//扣除余额
            clientRepository.save(client);
            consultation.setClient(client);
            consultation.setExpert(expert);
            consultation.setTime(LocalDateTime.now());
            repository.save(consultation);
            return Result.success(consultation);
        }
        return Result.error(403, "You are not a client");
    }
}
