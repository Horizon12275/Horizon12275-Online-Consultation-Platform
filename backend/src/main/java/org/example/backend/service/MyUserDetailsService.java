package org.example.backend.service;

import org.example.backend.DTO.RegisterRequest;
import org.example.backend.entity.Result;
import org.example.backend.entity.User;
import org.example.backend.DTO.UserProfile;
import org.example.backend.repository.UserRepository;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MyUserDetailsService implements UserDetailsService {
    UserRepository userRepository;
    public MyUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException, DisabledException{
        User user = userRepository.findUserByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("未找到用户");
        }
        List< GrantedAuthority > authorities = new ArrayList<>();
        authorities.add((GrantedAuthority) () -> "ROLE_" + user.getRole());
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),  true, true, true, true, authorities);
    }
    public Result<User> updateUser(UserProfile request) {
        int id = getUid();
        User user = userRepository.findById(id).orElse(null);
        if (user == null) {
            return Result.error(404, "用户不存在！");
        }
        if(userRepository.existsUserByUsername(request.getUsername()) && !request.getUsername().equals(user.getUsername())) {
            return Result.error(400, "用户名已存在！");
        }
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setTel(request.getTel());
        user.setAboutMe(request.getAboutMe());
        userRepository.save(user);
        return Result.success(user);

    }
    public Result<User> addUser(RegisterRequest request) {
        if(userRepository.existsUserByUsername(request.getUsername())) {
            return Result.error(400, "用户名已存在！");
        }
        if(userRepository.existsUserByEmail(request.getEmail())) {
            return Result.error(400, "邮箱已被占用！");
        }
        User user = new User();
        user.setUsername(request.getUsername());
        user.setPassword(new BCryptPasswordEncoder().encode(request.getPassword()));//加密密码
        user.setEmail(request.getEmail());
        user.setRole(User.Role.user);
        user.setLevel(1);
        user.setAvatar("https://img.moegirl.org.cn/common/b/b7/Transparent_Akkarin.jpg");//默认头像
        user.setTel("");
        user.setAboutMe("");
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
    public int getUid() {//从数据库里查询id
        String username = ((UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername();
        return userRepository.findUserByUsername(username).getId();
    }

    public Result<User> getUserById(int uid) {
        User user = userRepository.findUserById(uid);
        if (user == null) {
            return Result.error(404, "用户不存在！");
        }
        return Result.success(user);
    }
}
