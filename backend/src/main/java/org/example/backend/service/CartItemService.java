package org.example.backend.service;

import org.example.backend.entity.Book;
import org.example.backend.entity.CartItem;
import org.example.backend.entity.Result;
import org.example.backend.entity.User;
import org.example.backend.repository.CartItemRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartItemService {
    private final CartItemRepository repository;
    public CartItemService(CartItemRepository repository) {
        this.repository = repository;
    }

    public Result<List<CartItem>> getCartItems(int uid){
        return Result.success(repository.getCartItemsByUserId(uid));
    }
    public Result<CartItem> addCartItem(int uid,int bid){//需要判断是否已经存在
        if(repository.existsByUserIdAndBookId(uid, bid)){
            return Result.error(400, "购物车项目已存在！");
        }else{
            CartItem item = new CartItem();
            item.setQuantity(1);
            item.setUser(new User());
            item.getUser().setId(uid);
            item.setBook(new Book());
            item.getBook().setId(bid);
            repository.save(item);
            return Result.success(item);
        }
    }
    public Result<CartItem> deleteCartItem(int id){//需要判断是否存在
        if(repository.existsById(id)){
            repository.deleteById(id);
            return Result.success(null);
        }else{
            return Result.error(404, "购物车项目不存在！");
        }
    }
    public Result<CartItem> updateCartItem(int id, int quantity){//需要判断是否存在
        if(repository.existsById(id)){
            CartItem item = repository.getCartItemById(id);
            item.setQuantity(quantity);
            repository.save(item);
            return Result.success(item);
        }else{
            return Result.error(404, "购物车项目不存在！");
        }
    }
}
