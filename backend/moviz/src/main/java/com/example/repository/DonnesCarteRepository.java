
package com.example.repository;

import com.example.entity.DataCarteBancaire;

import org.springframework.data.jpa.repository.JpaRepository;

public interface DonnesCarteRepository extends JpaRepository<DataCarteBancaire,Long> {
    
}
