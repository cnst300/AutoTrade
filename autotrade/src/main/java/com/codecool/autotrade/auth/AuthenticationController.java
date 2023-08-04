package com.codecool.autotrade.auth;

import com.codecool.autotrade.model.Role;
import com.codecool.autotrade.model.User;
import jakarta.servlet.http.HttpServletRequest;
import com.codecool.autotrade.service.LogoutService;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class AuthenticationController {

    private final AuthenticationService service;
    private final LogoutService logoutService;


    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register( @RequestBody RegisterRequest request ) {
        return ResponseEntity.ok(service.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login( @RequestBody AuthenticationRequest request ) {
        return ResponseEntity.ok(service.authenticate(request));
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {
        logoutService.logout(request, response, authentication);
        return ResponseEntity.ok("Logged out successfully");
    }

    @GetMapping("/profile")
    public ResponseEntity<String> user(){
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String name = auth.getName();
        return ResponseEntity.ok(name);
    }

    @PostMapping("/admin")
    public  ResponseEntity<String> admin(@RequestBody User user){
        if(user.getRole().equals(Role.ADMIN)){
            return  ResponseEntity.ok("Admin online");
        }
        return ResponseEntity.ok("Not an Admin");
    }

    @PostMapping("/sell")
    public ResponseEntity<AuthenticationResponse> sell( @RequestBody SellPost sellPost){
        return ResponseEntity.ok(service.sell(sellPost));
    }

}

