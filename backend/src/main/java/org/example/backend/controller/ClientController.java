package org.example.backend.controller;

import org.example.backend.entity.Client;
import org.example.backend.entity.Result;
import org.example.backend.service.ClientService;
import org.example.backend.service.ExpertService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
