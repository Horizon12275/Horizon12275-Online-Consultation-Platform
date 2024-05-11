package org.example.backend.service;

import org.example.backend.DTO.RegisterRequest;
import org.example.backend.entity.Client;
import org.example.backend.entity.Result;
import org.example.backend.entity.User;
import org.example.backend.DTO.UserProfile;
import org.example.backend.repository.ClientRepository;
import org.example.backend.repository.ExpertRepository;
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
    ClientRepository clientRepository;
    ExpertRepository expertRepository;
    public MyUserDetailsService(UserRepository userRepository, ClientRepository clientRepository, ExpertRepository expertRepository) {
        this.userRepository = userRepository;
        this.clientRepository = clientRepository;
        this.expertRepository = expertRepository;
    }
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException, DisabledException{
        User user = userRepository.findUserByEmail(username);
        if (user == null) {
            throw new UsernameNotFoundException("未找到用户");
        }
        List< GrantedAuthority > authorities = new ArrayList<>();
        authorities.add((GrantedAuthority) () -> "ROLE_" + user.getRole());
        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(),  true, true, true, true, authorities);
    }
    public Result<User> updateUser(UserProfile request) {
        int id = getUid();
        User user = userRepository.findById(id).orElse(null);
        if (user == null) {
            return Result.error(404, "用户不存在！");
        }
        if(userRepository.existsUserByEmail(request.getEmail()) && !request.getEmail().equals(user.getEmail())) {
            return Result.error(400, "邮箱已被占用！");
        }
        user.setEmail(request.getEmail());
        userRepository.save(user);
        return Result.success(user);

    }
    public Result<User> addUser(RegisterRequest request) {
        if(userRepository.existsUserByEmail(request.getEmail())) {
            return Result.error(400, "邮箱已被占用！");
        }
        User user = new User();
        user.setPassword(new BCryptPasswordEncoder().encode(request.getPassword()));//加密密码
        user.setEmail(request.getEmail());
        user.setRole(User.Role.user);
        user.setEnabled(true);
        userRepository.save(user);
        Client client = new Client();
        client.setUsername(request.getUsername());
        client.setUser(user);
        clientRepository.save(client);
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
        User user = userRepository.findUserByEmail(username);
        if (user == null) {
            return Result.error(404, "用户不存在！");
        }
        return Result.success(user);
    }
    public int getUid() {//从数据库里查询id
        String username = ((UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername();
        return userRepository.findUserByEmail(username).getId();
    }
    public User.Role getRole() {
        String username = ((UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername();
        return userRepository.findUserByEmail(username).getRole();
    }
    public Result<User> getUserById(int uid) {
        User user = userRepository.findUserById(uid);
        if (user == null) {
            return Result.error(404, "用户不存在！");
        }
        return Result.success(user);
    }
    public Result<Integer> getReceiverId(int receiverId) {
        if (getRole() == User.Role.expert) //如果当前用户是专家 则接收者是客户 把客户id转换为用户id
            receiverId = clientRepository.findClientById(receiverId).getUser().getId();
        else //如果当前用户是客户 则接收者是专家 把专家id转换为用户id
            receiverId = expertRepository.findExpertById(receiverId).getUser().getId();
        return Result.success(receiverId);
    }
}
