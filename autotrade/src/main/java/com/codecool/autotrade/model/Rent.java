package com.codecool.autotrade.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "rent", schema = "public")
public class Rent {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "licenseplate")
    private String licensePlate;
    @Column(name = "make")
    private String make;
    @Column(name = "model")
    private String model;
    @Column(name = "engine")
    private String engine;
    @Column(name = "priceperday")
    private double priceperday;
    @Column(name = "image")
    private String image;
    @Column(name = "available")
    private boolean available;

    public Rent() {

    }

    public Rent(String licensePlate, String make, String model, String engine, double priceperday, String image, boolean available) {

        this.licensePlate = licensePlate;
        this.make = make;
        this.model = model;
        this.engine = engine;
        this.priceperday = priceperday;
        this.image = image;
        this.available = available;
    }


}
