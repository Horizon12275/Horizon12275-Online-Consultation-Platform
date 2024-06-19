package org.example.backend.controller;

import org.example.backend.entity.Message;
import org.example.backend.entity.Result;
import org.example.backend.repository.MessageRepository;
import org.example.backend.repository.UploadRepository;
import org.example.backend.service.MyUserDetailsService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Comparator;
import java.util.List;

@RestController
@RequestMapping("/api/message")
public class MessageController {
    private final MessageRepository messageRepository;
    private final MyUserDetailsService myUserDetails;
    private final UploadRepository uploadRepository;
    public MessageController(MessageRepository messageRepository, MyUserDetailsService myUserDetails, UploadRepository uploadRepository) {
        this.messageRepository = messageRepository;
        this.myUserDetails = myUserDetails;
        this.uploadRepository = uploadRepository;
    }
    @GetMapping("/history/{rid}")
    public Result<List<Message>> getHistoryMessages(@PathVariable int rid) {
        int sid = myUserDetails.getUid();
        List<Message> historyMessages = messageRepository.getMessagesBySenderIdAndReceiverId(sid, rid);
        if(sid != rid) historyMessages.addAll(messageRepository.getMessagesBySenderIdAndReceiverId(rid, sid));//将双方的消息合并 并按时间排序
        historyMessages.sort(Comparator.comparing(Message::getSendTime));
        return Result.success(historyMessages);
    }
    @PostMapping("/image")
    public Result<String> uploadImage(@RequestParam("file") MultipartFile file) {
        String url;
        try {
            url = uploadRepository.uploadFile(file, "image");
        }
        catch (IOException e) {
            return Result.error(500, e.getMessage());
        }
        return Result.success(url);
    }
}
