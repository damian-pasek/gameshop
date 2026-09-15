package com.gameshop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.gameshop.entity.User;
import com.gameshop.service.AuthService;

import java.util.Optional;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;

    @Autowired
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        Optional<User> optionalUser = authService.authenticate(request.getUsername(), request.getPassword());

        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            return ResponseEntity.ok(new LoginResponse("Login successful", user.getRole(), user.getId()));
        } else {
            return ResponseEntity.status(401).body("Incorrect login and/or password");
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        try {
            User registeredUser = authService.register(request.getUsername(), request.getPassword());
            return ResponseEntity.ok(new RegisterResponse("Registration successful", registeredUser.getId()));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(400).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Registration failed. Please try again");
        }
    }
}

class LoginRequest {
    private String username;
    private String password;

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
}

class LoginResponse {
    private String message;
    private String role;
    private Integer userId;

    public LoginResponse(String message, String role, Integer userId) {
        this.message = message;
        this.role = role;
        this.userId = userId;
    }

    public String getMessage() { return message; }
    public String getRole() { return role; }
    public Integer getUserId() { return userId; }
}

class RegisterRequest {
    private String username;
    private String password;

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
}

class RegisterResponse {
    private String message;
    private Integer userId;

    public RegisterResponse(String message, Integer userId) {
        this.message = message;
        this.userId = userId;
    }

    public String getMessage() { return message; }
    public Integer getUserId() { return userId; }
}