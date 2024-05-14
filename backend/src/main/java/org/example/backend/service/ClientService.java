package org.example.backend.service;

import org.example.backend.entity.Client;
import org.example.backend.entity.Result;
import org.springframework.stereotype.Service;

@Service
public interface ClientService {
    public Result<Client> getClientById(int id);

    public Result<Client> addBalance();

}
