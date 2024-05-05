package org.example.backend.controller;

import org.example.backend.entity.Message;
import org.example.backend.entity.Result;
import org.example.backend.repository.MessageRepository;
import org.example.backend.service.MyUserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/message")
public class MessageController {
    private final MessageRepository messageRepository;
    private final MyUserDetails myUserDetails;
    public MessageController(MessageRepository messageRepository, MyUserDetails myUserDetails) {
        this.messageRepository = messageRepository;
        this.myUserDetails = myUserDetails;
    }
    @GetMapping("/history/{rid}")
    public Result<List<Message>> getHistoryMessages(@PathVariable int rid) {
        int sid = myUserDetails.getUid();
        List<Message> historyMessages = messageRepository.getMessagesBySenderIdAndReceiverId(sid, rid);
        historyMessages.addAll(messageRepository.getMessagesBySenderIdAndReceiverId(rid, sid));//将双方的消息合并
        return Result.success(historyMessages);
    }
}
