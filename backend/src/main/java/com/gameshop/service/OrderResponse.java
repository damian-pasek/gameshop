package com.gameshop.service;

import com.gameshop.entity.Order;
import com.gameshop.entity.OrderItem;

import java.util.List;

public class OrderResponse {
    private Order order;
    private List<OrderItem> items;

    public OrderResponse(Order order, List<OrderItem> items) {
        this.order = order;
        this.items = items;
    }

    public Order getOrder() {
        return order;
    }

    public List<OrderItem> getItems() {
        return items;
    }
}
