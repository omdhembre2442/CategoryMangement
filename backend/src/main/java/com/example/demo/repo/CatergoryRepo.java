package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Cat;

@Repository
public interface CatergoryRepo extends JpaRepository<Cat, Integer>{

}
