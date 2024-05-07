package org.example.backend.controller;

import org.example.backend.entity.Comment;
import org.example.backend.entity.Reply;
import org.example.backend.entity.Result;
import org.example.backend.repository.UserRepository;
import org.example.backend.service.CommentService;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comment")
public class CommentController {
    private final CommentService service;
    private final UserRepository userRepository;
    public CommentController(CommentService service, UserRepository userRepository) {
        this.service = service;
        this.userRepository = userRepository;
    }
    private int getUid() {//从数据库里查询id
        String username = ((UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername();
        return userRepository.findUserByUsername(username).getId();
    }
    @GetMapping("/list/{bid}")
    public Result<List<Comment>> getCommentsByAid(@PathVariable int bid) {
        return service.getCommentsByAid(bid);
    }
    @PostMapping("/add/{bid}")
    public Result<Comment> addComment(@PathVariable int bid,@RequestBody String content) {
        int uid = getUid();
        return service.addComment(bid, uid, content);
    }
    @DeleteMapping("/delete/{id}")
    public Result<Comment> deleteComment(@PathVariable int id) {
        return service.deleteComment(id);
    }
    @PostMapping("/reply/{cid}")
    public Result<Reply> addReply(@PathVariable int cid, @RequestBody String content) {
        int uid = getUid();
        return service.addReply(cid, uid, content);
    }
}
