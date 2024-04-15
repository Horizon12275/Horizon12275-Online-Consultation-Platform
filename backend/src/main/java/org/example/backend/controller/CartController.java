package org.example.backend.controller;

import org.example.backend.entity.CartItem;
import org.example.backend.entity.Result;
import org.example.backend.repository.UserRepository;
import org.example.backend.service.CartItemService;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
public class CartController {
    private final CartItemService service;
    private final UserRepository userRepository;
    public CartController(CartItemService service, UserRepository userRepository) {
        this.service = service;
        this.userRepository = userRepository;
    }
    private int getUid() {//从数据库里查询id
        String username = ((UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername();
        return userRepository.findUserByUsername(username).getId();

    }
    @GetMapping("/list")
    public Result<List<CartItem>> getCartItems() {
        int uid = getUid();
        return service.getCartItems(uid);
    }
    @PostMapping("/add/{bid}")
    public Result<CartItem> addCartItem(@PathVariable int bid) {
        int uid = getUid();
        return service.addCartItem(uid, bid);
    }
    @DeleteMapping("/delete/{id}")
    public Result<CartItem> deleteCartItem(@PathVariable int id) {
        return service.deleteCartItem(id);
    }
    @PutMapping("/update/{id}")
    public Result<CartItem> updateCartItem(@PathVariable int id, @RequestParam int quantity) {
        return service.updateCartItem(id, quantity);
    }
}
