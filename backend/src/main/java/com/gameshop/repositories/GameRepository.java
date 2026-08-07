package com.gameshop.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import com.gameshop.models.Game;

import java.util.List;

@Repository
public class GameRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;
    
    public List<Game> getAll(){
        return jdbcTemplate.query(
            "SELECT id, quantity, name, price, imgUrl, rating, description, tags FROM game",
            BeanPropertyRowMapper.newInstance(Game.class)
        );
    }
    
    public Game getById(int id) {
        return jdbcTemplate.queryForObject(
            "SELECT id, quantity, name, price, imgUrl, rating, description, tags FROM game WHERE id = ?",
            BeanPropertyRowMapper.newInstance(Game.class),
            id
        );
    }

    public int save(Game game) {
        return jdbcTemplate.update(
            "INSERT INTO game(quantity, name, price, imgUrl, rating, description, tags) VALUES(?, ?, ?, ?, ?, ?, ?)",
            game.getQuantity(), game.getName(), game.getPrice(), game.getImgUrl(),
            game.getRating(), game.getDescription(), game.getTags()
        );
    }
    
    public int update(Game game) {
        return jdbcTemplate.update(
            "UPDATE game SET quantity=?, name=?, price=?, imgUrl=?, rating=?, description=?, tags=? WHERE id=?",
            game.getQuantity(), game.getName(), game.getPrice(), game.getImgUrl(),
            game.getRating(), game.getDescription(), game.getTags(), game.getId()
        );
    }
    
    public int delete(int id) {
        return jdbcTemplate.update("DELETE FROM game WHERE id=?", id);
    }
}
