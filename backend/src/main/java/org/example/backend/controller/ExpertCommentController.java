package org.example.backend.controller;

import org.example.backend.entity.ExpertComment;
import org.example.backend.entity.Result;
import org.example.backend.service.ExpertCommentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comment/expert")
public class ExpertCommentController {
    private final ExpertCommentService service;
    public ExpertCommentController(ExpertCommentService service) {
        this.service = service;
    }
    @GetMapping("/list/{aid}")
    public Result<List<ExpertComment>> getCommentsByAid(@PathVariable int aid) {
        return service.getExpertCommentsByAid(aid);
    }
    @PostMapping("/add/{aid}")
    public Result<ExpertComment> addComment(@PathVariable int aid, @RequestBody String content) {
        return service.addExpertComment(aid, content);
    }
    @DeleteMapping("/delete/{id}")
    public Result<ExpertComment> deleteComment(@PathVariable int id) {
        return service.deleteExpertComment(id);
    }

}
