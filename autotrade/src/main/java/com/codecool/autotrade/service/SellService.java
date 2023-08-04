package com.codecool.autotrade.service;

import com.codecool.autotrade.repo.SellRepository;
import com.codecool.autotrade.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SellService {
    private final SellRepository sellRepository;

    @Autowired
    public SellService(SellRepository sellRepository) {
        this.sellRepository = sellRepository;
    }
}
