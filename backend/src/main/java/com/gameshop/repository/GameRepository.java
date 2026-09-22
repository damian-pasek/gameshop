package com.gameshop.repository;

import com.gameshop.entity.Game;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GameRepository extends JpaRepository<Game, Integer> {
    List<Game> findAllByOrderByIdAsc();
}
