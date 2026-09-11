package com.gameshop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.gameshop.entity.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByUsername(String username);
    Optional<User> findByUsernameAndPassword(String username, String password);
    boolean existsByUsername(String username);
}