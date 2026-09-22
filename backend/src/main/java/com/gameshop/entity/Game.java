package com.gameshop.entity;

import java.math.BigDecimal;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "games")
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer quantity;
    private String name;
    private BigDecimal price;

    @Column(name = "img_url")
    private String imgUrl;

    private BigDecimal rating;       
    private String description;      
    private String tags;
}