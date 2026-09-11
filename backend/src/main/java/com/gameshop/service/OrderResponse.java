package com.gameshop.service;

import com.gameshop.entity.Order;
import com.gameshop.entity.OrderItems;

import java.util.List;

public class OrderResponse {
    private Order order;
    private List<OrderItems> items;

    public OrderResponse(Order order, List<OrderItems> items) {
        this.order = order;
        this.items = items;
    }

    public Order getOrder() {
        return order;
    }

    public List<OrderItems> getItems() {
        return items;
    }
}
