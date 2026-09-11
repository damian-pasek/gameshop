package com.gameshop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.gameshop.entity.Users;
import com.gameshop.repository.UserRepository;

import java.util.Optional;

@Service
public class AuthService {

    private final UserRepository userRepository;

    @Autowired
    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Optional<Users> authenticate(String username, String password) {
        return userRepository.findByUsernameAndPassword(username, password);
    }

    public Users register(String username, String password) {
        if (userRepository.existsByUsername(username)) {
            throw new IllegalArgumentException("User already exist");
        }

        Users newUser = new Users();
        newUser.setUsername(username);
        newUser.setPassword(password);
        newUser.setRole("user");

        return userRepository.save(newUser);
    }
}