package com.codecool.autotrade.service;

import com.codecool.autotrade.model.Rent;
import com.codecool.autotrade.repo.RentRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RentService {
    private final RentRepository rentRepository;

    public RentService(RentRepository rentRepository) {
        this.rentRepository = rentRepository;
    }

    public List<Rent> getAllRentalCars(){
        return rentRepository.findAll();
    }
    public Rent getRentById(int id){
        return rentRepository.findById(id).orElse(null);
    }
    public Rent addNewRent(Rent rent){
        return rentRepository.save(rent);
    }
    public Optional<Rent> checkAvailability(int id){
        return rentRepository.findById(id).filter(Rent::isAvailable);
    }

}
