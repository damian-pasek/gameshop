package com.gameshop.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.gameshop.models.Order;
import com.gameshop.models.OrderItems;
import com.gameshop.repositories.OrderItemRepository;
import com.gameshop.repositories.OrderRepository;
import com.gameshop.services.OrderResponse;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderItemRepository orderItemRepository;


    public static class OrderRequest {
        private Integer userId;
        private List<OrderItems> items;

        public Integer getUserId() { return userId; }
        public void setUserId(Integer userId) { this.userId = userId; }
        public List<OrderItems> getItems() { return items; }
        public void setItems(List<OrderItems> items) { this.items = items; }
    }

    @GetMapping("")
    public List<OrderResponse> getAllOrders() {
        List<Order> orders = orderRepository.getAll();
        return orders.stream()
            .map(order -> {
                List<OrderItems> items = orderItemRepository.getByOrderId(order.getId());
                return new OrderResponse(order, items);
            })
            .toList();
    }

    
    @PostMapping("")
    public int createOrder(@RequestBody OrderRequest request) {
        BigDecimal totalPrice = request.getItems().stream()
            .map(item -> item.getUnitPrice().multiply(new BigDecimal(item.getQuantity())))
            .reduce(BigDecimal.ZERO, BigDecimal::add);

        Order order = new Order();
        order.setUserId(request.getUserId());
        order.setOrderDate(LocalDateTime.now());
        order.setTotalPrice(totalPrice);

        int orderId = orderRepository.save(order);


        for(OrderItems item : request.getItems()) {
            item.setOrderId(orderId);
            orderItemRepository.save(item);
        }
        return orderId;
    }
}
