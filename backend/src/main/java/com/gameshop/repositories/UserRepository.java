package com.gameshop.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.gameshop.models.Users;

import java.util.Optional;

public interface UserRepository extends JpaRepository<Users, Integer> {
    Optional<Users> findByUsername(String username);
    Optional<Users> findByUsernameAndPassword(String username, String password);
    boolean existsByUsername(String username);
}