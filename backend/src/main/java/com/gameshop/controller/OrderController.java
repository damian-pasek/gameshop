package com.gameshop.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.gameshop.entity.Order;
import com.gameshop.entity.OrderItem;
import com.gameshop.repository.OrderItemRepository;
import com.gameshop.repository.OrderRepository;
import com.gameshop.service.OrderResponse;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderController {

    private final OrderRepository orderRepository;
    private final OrderItemRepository orderItemRepository;

    public OrderController(OrderRepository orderRepository, OrderItemRepository orderItemRepository) {
        this.orderRepository = orderRepository;
        this.orderItemRepository = orderItemRepository;
    }


    public static class OrderRequest {
        private Integer userId;
        private List<OrderItem> items;

        public Integer getUserId() { return userId; }
        public void setUserId(Integer userId) { this.userId = userId; }
        public List<OrderItem> getItems() { return items; }
        public void setItems(List<OrderItem> items) { this.items = items; }
    }

    @GetMapping("")
    public List<OrderResponse> getAllOrders() {
        List<Order> orders = orderRepository.findAll();
        return orders.stream()
            .map(order -> {
                List<OrderItem> items = orderItemRepository.findByOrderId(order.getId());
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

        Order savedOrder = orderRepository.save(order);

        for(OrderItem item : request.getItems()) {
            item.setOrderId(savedOrder.getId());
            orderItemRepository.save(item);
        }
        return savedOrder.getId();
    }
}
