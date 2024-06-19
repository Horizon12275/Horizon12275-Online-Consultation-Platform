package org.example.backend.controller;

import org.example.backend.entity.Client;
import org.example.backend.entity.Result;
import org.example.backend.service.ClientService;
import org.example.backend.service.ExpertService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/client")
public class ClientController {
    private final ClientService service;
    public ClientController(ClientService service) {
        this.service = service;
    }
    @GetMapping("/get/{id}")
    public Result<Client> get(@PathVariable int id) {
        return service.getClientById(id);
    }
    @PostMapping("/fund")
    public Result<Client> fund() {
        return service.addBalance();
    }
}
