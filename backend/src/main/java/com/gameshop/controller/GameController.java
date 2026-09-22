package com.gameshop.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.gameshop.entity.Game;
import com.gameshop.repository.GameRepository;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/games")
public class GameController {
	
    private final GameRepository gameRepository;

    public GameController(GameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }
	
    @GetMapping("")
    public List<Game> getAll(){
        return gameRepository.findAllByOrderByIdAsc();
    }
	
    @GetMapping("/{id}")
    public Game getById(@PathVariable("id") int id) {
        return gameRepository.findById(id).orElse(null);
    }
	
    @PostMapping("")
    public int add(@RequestBody Game game) {
        return gameRepository.save(game).getId();
    }
	
    @PutMapping("/{id}")
    public int update(@PathVariable("id") int id, @RequestBody Game updatedGame) {
        Optional<Game> existingGame = gameRepository.findById(id);
        if (existingGame.isPresent()) {
            Game game = existingGame.get();
            game.setQuantity(updatedGame.getQuantity());
            game.setName(updatedGame.getName());
            game.setPrice(updatedGame.getPrice());
            game.setImgUrl(updatedGame.getImgUrl());
            game.setRating(updatedGame.getRating());
            game.setDescription(updatedGame.getDescription());
            game.setTags(updatedGame.getTags());
            gameRepository.save(game);
            return 1;
        } else {
            return -1;
        }
    }
	
    @PatchMapping("/{id}")
    public int partiallyUpdate(@PathVariable("id") int id, @RequestBody Game updatedGame) {
        Optional<Game> existingGame = gameRepository.findById(id);
        if (existingGame.isPresent()) {
            Game game = existingGame.get();
            if (updatedGame.getQuantity() != null) game.setQuantity(updatedGame.getQuantity());
            if (updatedGame.getName() != null) game.setName(updatedGame.getName());
            if (updatedGame.getPrice() != null) game.setPrice(updatedGame.getPrice());
            if (updatedGame.getImgUrl() != null) game.setImgUrl(updatedGame.getImgUrl());
            if (updatedGame.getRating() != null) game.setRating(updatedGame.getRating());
            if (updatedGame.getDescription() != null) game.setDescription(updatedGame.getDescription());
            if (updatedGame.getTags() != null) game.setTags(updatedGame.getTags());
            gameRepository.save(game);
            return 1;
        } else {
            return -1;
        }
    }
	
    @DeleteMapping("/{id}")
    public int delete(@PathVariable("id") int id) {
        if (!gameRepository.existsById(id)) {
            return 0;
        }
        gameRepository.deleteById(id);
        return 1;
    }
}
