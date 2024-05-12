package org.example.backend.serviceImpl;

import org.example.backend.entity.Client;
import org.example.backend.entity.Result;
import org.example.backend.repository.ClientRepository;
import org.example.backend.service.ClientService;
import org.springframework.stereotype.Service;

@Service
public class ClientServiceImpl implements ClientService {
    private final ClientRepository repository;
    public ClientServiceImpl(ClientRepository repository) {
        this.repository = repository;
    }
    public Result<Client> getClientById(int id) {
        Client client = repository.getClientById(id);
        if (client == null) {
            return Result.error(404, "Client not found");
        }
        return Result.success(client);
    }
}
