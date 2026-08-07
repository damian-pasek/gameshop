package com.gameshop.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import com.gameshop.models.OrderItems;

import java.util.List;

@Repository
public class OrderItemRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public int save(OrderItems item) {
        String sql = "INSERT INTO order_items(order_id, game_id, quantity, unit_price) VALUES(?, ?, ?, ?)";
        return jdbcTemplate.update(sql, item.getOrderId(), item.getGameId(), item.getQuantity(), item.getUnitPrice());
    }

    public List<OrderItems> getByOrderId(int orderId) {
        String sql = "SELECT oi.*, g.name AS name FROM order_items oi " +
                     "JOIN game g ON oi.game_id = g.id " +
                     "WHERE oi.order_id = ?";
        return jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(OrderItems.class), orderId);
    }
}