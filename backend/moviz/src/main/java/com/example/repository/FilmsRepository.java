/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.repository;

import com.example.entity.Films;


import org.springframework.data.jpa.repository.JpaRepository;


public interface FilmsRepository extends JpaRepository<Films,Long>{

   // public void saveAll(Object results);
     
}
