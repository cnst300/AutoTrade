package com.codecool.autotrade.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
public class AdminController {
    @GetMapping
    public String get(){
        return "GET:: admin controller";
    }

    @PostMapping
    public String post(){
        return "Post:: admin controller";
    }

    @PutMapping
    public String put(){
        return "PUT:: admin controller";
    }

    @DeleteMapping
    public String delete(){
        return "DELETE:: admin controller";
    }
}
