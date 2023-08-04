package com.codecool.autotrade.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/seller")
public class SellerController {
    @GetMapping
    public String get(){
        return "GET:: seller controller";
    }

    @PostMapping
    public String post(){
        return "Post:: seller controller";
    }

    @PutMapping
    public String put(){
        return "PUT:: seller controller";
    }
}
