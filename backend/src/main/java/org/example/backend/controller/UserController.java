package org.example.backend.controller;


import org.example.backend.DTO.RegisterRequest;
import org.example.backend.DTO.UserProfile;
import org.example.backend.entity.Result;
import org.example.backend.entity.User;
import org.example.backend.service.MyUserDetailsService;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {
    private final MyUserDetailsService service;
    public UserController(MyUserDetailsService service) {
        this.service = service;
    }
    @GetMapping("/check")
    public Result<String> check() {//检查是否登录
        UserDetails user =(UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return Result.success("已登录");
    }
    @GetMapping("/get")//获取当前登录用户的信息
    public Result<User> get() {
        UserDetails user =(UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return service.getUserByUsername( user.getUsername());
    }
    @GetMapping("/get/{uid}")//根据用户名获取用户信息 一般是用于查看别人的信息
    public Result<org.example.backend.entity.User> get(@PathVariable int uid) {
        return service.getUserById(uid);
    }
    @PostMapping("/register")
    public Result<org.example.backend.entity.User> register(@RequestBody RegisterRequest request) {
        return service.addUser(request);
    }
    @PutMapping("/update")
    public Result<org.example.backend.entity.User> update(@RequestBody UserProfile request) {
        return service.updateUser(request);
    }
    @DeleteMapping("/admin/delete/{id}")
    public Result<org.example.backend.entity.User> delete(@PathVariable int id) {
        return service.deleteUser(id);
    }
}
