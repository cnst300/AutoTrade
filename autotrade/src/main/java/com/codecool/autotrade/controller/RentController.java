package com.codecool.autotrade.controller;

import com.codecool.autotrade.model.Rent;
import com.codecool.autotrade.service.RentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/auth")
public class RentController {

    @Autowired
    private RentService rentService;


    @GetMapping(value = "/rent")
    public List<Rent> getRentList() {
        return rentService.getAllRentalCars();
    }


}
