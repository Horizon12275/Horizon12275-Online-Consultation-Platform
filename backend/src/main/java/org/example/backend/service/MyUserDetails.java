package org.example.backend.service;

import org.example.backend.entity.Result;
import org.example.backend.entity.User;
import org.example.backend.entity.UserRequest;
import org.example.backend.repository.UserRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MyUserDetails implements UserDetailsService {
    UserRepository userRepository;
    public MyUserDetails(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findUserByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }
        List< GrantedAuthority > authorities = new ArrayList<>();
        authorities.add((GrantedAuthority) () -> "ROLE_" + user.getRole());
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), authorities);
    }
    public Result<User> updateUser(UserRequest request) {
        int id = getUid();
        User user = userRepository.findById(id).orElse(null);
        if (user == null) {
            return Result.error(404, "用户不存在！");
        }
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setTel(request.getTel());
        user.setAboutMe(request.getAboutMe());
        userRepository.save(user);
        return Result.success(user);

    }
    public Result<User> deleteUser(int id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return Result.success(null);
        } else {
            return Result.error(404, "用户不存在！");
        }
    }
    public Result<User> getUserByUsername(String username) {
        User user = userRepository.findUserByUsername(username);
        if (user == null) {
            return Result.error(404, "用户不存在！");
        }
        return Result.success(user);
    }
    public Result<User> getUserById(int id) {
        User user = userRepository.findById(id).orElse(null);
        if (user == null) {
            return Result.error(404, "用户不存在！");
        }
        return Result.success(user);
    }
    public int getUid() {//从数据库里查询当前登录用户id
        String username = ((UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername();
        return userRepository.findUserByUsername(username).getId();

    }
}
