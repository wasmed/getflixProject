/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.entity;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "data_carte")
public class DataCarteBancaire {
    
      @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
      
     @Column(name = "num_carte")
     private Long numCarte ;
      
    @Column(name = "date_expiration")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    @NotNull(message = "Must not be empty")
    private Date dateExperation;
        
    @Column(name = "type_carte")
    @Enumerated(EnumType.STRING)
    @NotNull(message = "Must not be empty")
    private TypeCarte typeCarte;

    public DataCarteBancaire(Long numCarte, Date dateExperation, TypeCarte typeCarte) {
        this.numCarte = numCarte;
        this.dateExperation = dateExperation;
        this.typeCarte = typeCarte;
    }

    public DataCarteBancaire() {
    }

    

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getNumCarte() {
        return numCarte;
    }

    public void setNumCarte(Long numCarte) {
        this.numCarte = numCarte;
    }

    public Date getDateExperation() {
        return dateExperation;
    }

    public void setDateExperation(Date dateExperation) {
        this.dateExperation = dateExperation;
    }

    public TypeCarte getTypeCarte() {
        return typeCarte;
    }

    public void setTypeCarte(TypeCarte typeCarte) {
        this.typeCarte = typeCarte;
    }
    
    
    
    
}
