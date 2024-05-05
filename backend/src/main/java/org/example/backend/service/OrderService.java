package org.example.backend.service;

import org.example.backend.entity.*;
import org.example.backend.repository.CartItemRepository;
import org.example.backend.repository.OrderRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class OrderService {
    private final OrderRepository repository;
    private final CartItemRepository cartItemRepository;
    public OrderService(OrderRepository repository,  CartItemRepository cartItemRepository) {
        this.repository = repository;
        this.cartItemRepository = cartItemRepository;
    }
    public Result<List<Order>> getOrders(int uid){
        return Result.success(repository.getOrdersByUserId(uid));
    }
    public Result<Order> addOrder(OrderRequest request, int uid){
        Order order = new Order();
        order.setAddress(request.getAddress());
        order.setTel(request.getTel());
        order.setReceiver(request.getReceiver());
        order.setCreateTime(LocalDateTime.now());
        order.setUser(new User());
        order.getUser().setId(uid);
        List<OrderItem> orderItems = new ArrayList<>();

        // 一次性从购物车中获取所有商品项
        List<CartItem> cartItems = cartItemRepository.getCartItemsByUserId(uid);
        for (int cid:request.getCids()){
            CartItem cartItem = findCartItemById(cartItems, cid);
            if(cartItem == null){
                return Result.error(400, "购物车项目不存在！");
            }
        }
        for (int cid : request.getCids()) {
            // 在购物车项中查找对应的商品项
            CartItem cartItem = findCartItemById(cartItems, cid);
            // 创建订单项并设置到订单中
            OrderItem orderItem = new OrderItem();
            orderItem.setOrder(order);
            orderItem.setBook(new Book());
            orderItem.getBook().setId(cartItem.getBook().getId());
            orderItem.setQuantity(cartItem.getQuantity());
            orderItems.add(orderItem);

            // 从购物车中移除对应的商品项
            cartItems.remove(cartItem);
            cartItemRepository.deleteById(cartItem.getId());
        }
        order.setOrderItems(orderItems);
        repository.save(order);
        return Result.success(order);
    }

    // 在购物车项列表中查找指定ID的购物车项
    private CartItem findCartItemById(List<CartItem> cartItems, int cid) {
        for (CartItem cartItem : cartItems) {
            if (cartItem.getId() == cid) {
                return cartItem;
            }
        }
        return null;
    }

    public Result<Order> deleteOrder(int id){
        if(repository.existsById(id)){
            repository.deleteById(id);
            return Result.success(null);
        }else{
            return Result.error(404, "订单不存在！");
        }
    }
    public Result<List<Order>> getOrdersByBookTitle(String title, int uid) {
        List<Order> orders = repository.getOrdersByUserId(uid);
        List<Order> result = new ArrayList<>();

        // 将查询关键字转换为小写字母
        String lowercaseTitle = title.toLowerCase();

        for (Order order : orders) {
            boolean found = false; // 用于标记是否找到符合条件的订单项
            for (OrderItem orderItem : order.getOrderItems()) {
                // 将书籍标题转换为小写字母进行比较
                String lowercaseBookTitle = orderItem.getBook().getTitle().toLowerCase();
                if (lowercaseBookTitle.contains(lowercaseTitle)) {
                    result.add(order);
                    found = true;
                    break; // 找到符合条件的订单项后立即跳出内层循环
                }
            }
            if (found) {
                // 如果找到符合条件的订单项，则跳出外层循环
                break;
            }
        }

        return Result.success(result);
    }



}
