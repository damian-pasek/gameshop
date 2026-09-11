package com.gameshop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.gameshop.entity.Users;

import java.util.Optional;

public interface UserRepository extends JpaRepository<Users, Integer> {
    Optional<Users> findByUsername(String username);
    Optional<Users> findByUsernameAndPassword(String username, String password);
    boolean existsByUsername(String username);
}