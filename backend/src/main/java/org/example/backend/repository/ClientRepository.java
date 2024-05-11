package org.example.backend.repository;

import com.mysql.cj.MysqlConnection;
import org.example.backend.entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends JpaRepository<Client, Integer> {
    public Client getClientById(int id);
    public Client getClientByUserId(int uid);

    public Client findClientById(int cid);
}
