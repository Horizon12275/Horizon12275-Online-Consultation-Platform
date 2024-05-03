package org.example.backend.repository;


import org.example.backend.entity.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepository extends JpaRepository<Message, Integer> {
    List<Message> getMessagesByReceiverId(int receiverId);
    List<Message> getMessagesBySenderId(int senderId);
    List<Message> getMessagesBySenderIdAndReceiverId(int senderId, int receiverId);
}
