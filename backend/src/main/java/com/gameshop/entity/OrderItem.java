package com.gameshop.entity;

import jakarta.persistence.*;
import org.springframework.data.annotation.Transient;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "order_items")
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer orderId;
    private Integer gameId;
    private Integer quantity;
    private BigDecimal unitPrice;

    @Transient
    private String name;
}