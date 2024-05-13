package org.example.backend.service;

import org.example.backend.entity.Result;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CommentLikeService {

    Result<String> likeComment(int cid);
    Result<List<Integer>> getCids();
}
