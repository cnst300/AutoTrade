package com.codecool.autotrade.repo;

import com.codecool.autotrade.auth.SellPost;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SellRepository extends JpaRepository<SellPost, Integer> {
}
