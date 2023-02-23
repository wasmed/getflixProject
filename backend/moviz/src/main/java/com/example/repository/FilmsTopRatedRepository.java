/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.repository;


import com.example.entity.FilmsTopRated;
import org.springframework.data.jpa.repository.JpaRepository;


public interface FilmsTopRatedRepository extends JpaRepository<FilmsTopRated,Long> {
    
}
