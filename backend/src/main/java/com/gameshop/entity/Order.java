package com.gameshop.entity;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "user_id")
    private Integer userId;

    @JsonFormat(pattern = "yyyy-MM-dd' 'HH:mm:ss")
    @Column(name = "order_date")
    private LocalDateTime orderDate;

    @Column(name = "total_price")
    private BigDecimal totalPrice;
}
