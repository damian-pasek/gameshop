package com.gameshop.repository;

import com.gameshop.entity.OrderItem;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderItemRepository extends JpaRepository<OrderItem, Integer> {
    @EntityGraph(attributePaths = "game")
    List<OrderItem> findByOrderId(Integer orderId);
}