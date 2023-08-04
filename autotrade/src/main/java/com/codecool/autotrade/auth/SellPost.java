package com.codecool.autotrade.auth;

import jakarta.persistence.*;
import lombok.*;

@Data
@Builder
@Table(name = "sell", schema = "public")
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class SellPost {
    @SequenceGenerator(name = "sell_sequence", sequenceName = "sell_seq", allocationSize = 1)
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sell_sequence")
    private int id;

    private String make;
    private String model;
    private String engine;
    private String description;
    private Integer price;
    private String image;
}
