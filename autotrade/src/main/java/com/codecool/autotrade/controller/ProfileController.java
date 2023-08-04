package com.codecool.autotrade.controller;

import com.codecool.autotrade.model.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProfileController {
    @GetMapping
    public ResponseEntity<User> allowUserAccess(){
        return ResponseEntity.ok(allowUserAccess().getBody());
    }
}
