package com.codecool.autotrade.repo;

import com.codecool.autotrade.model.Rent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RentRepository extends JpaRepository<Rent, Integer> {
    Rent findAllByMakeAndModelAndLicensePlate(String make, String model, String licensePlate);
}
