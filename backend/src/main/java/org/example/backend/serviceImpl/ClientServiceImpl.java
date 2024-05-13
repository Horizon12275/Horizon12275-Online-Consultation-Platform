package org.example.backend.serviceImpl;

import org.example.backend.entity.Client;
import org.example.backend.entity.Result;
import org.example.backend.repository.ClientRepository;
import org.example.backend.repository.UserRepository;
import org.example.backend.service.ClientService;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
public class ClientServiceImpl implements ClientService {
    private final ClientRepository repository;
    private final UserRepository userRepository;
    public ClientServiceImpl(ClientRepository repository, UserRepository userRepository) {
        this.repository = repository;
        this.userRepository = userRepository;
    }
    public int getUid() {//从数据库里查询id
        String username = ((UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername();
        return userRepository.findUserByEmail(username).getId();
    }
    public Result<Client> getClientById(int id) {
        Client client = repository.getClientById(id);
        if (client == null) {
            return Result.error(404, "Client not found");
        }
        return Result.success(client);
    }
    public Result<Client> addBalance() {
        int uid = getUid();
        Client client = repository.getClientByUserId(uid);
        client.setBalance(client.getBalance().add(new BigDecimal(50)));
        return Result.success(client);
    }
}
