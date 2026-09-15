package com.gameshop.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import com.gameshop.entity.Order;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@Repository
public class OrderRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public int save(Order order) {
        String sql = "INSERT INTO orders(user_id, order_date, total_price) VALUES(?, ?, ?)";
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setInt(1, order.getUserId());
            ps.setObject(2, order.getOrderDate());
            ps.setBigDecimal(3, order.getTotalPrice());
            return ps;
        }, keyHolder);
        return keyHolder.getKey().intValue();
    }

    public Order getById(int id) {
        String sql = "SELECT * FROM orders WHERE id = ?";
        return jdbcTemplate.queryForObject(sql, BeanPropertyRowMapper.newInstance(Order.class), id);
    }

    public List<Order> getAll() {
        String sql = "SELECT * FROM orders";
        return jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(Order.class));
    }
}
