/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "filmData")
public class Films {
    

     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
     
       @Column(name = "action")
     private String action;
       
       @Column(name = "comedie")
     private String comedie;
       
       @Column(name = "drame")
     private String drame;
       
       @Column(name = "horreur")
     private String horreur;
       
       @Column(name = "kids")
     private String kids;
       
       @Column(name = "india")
     private String India;
       
       @Column(name = "deries")
     private String series;

    public Films(String action, String comedie, String drame, String horreur, String kids, String India, String series) {
        this.action = action;
        this.comedie = comedie;
        this.drame = drame;
        this.horreur = horreur;
        this.kids = kids;
        this.India = India;
        this.series = series;
    }

    public Films() {
    }
    

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public String getComedie() {
        return comedie;
    }

    public void setComedie(String comedie) {
        this.comedie = comedie;
    }

    public String getDrame() {
        return drame;
    }

    public void setDrame(String drame) {
        this.drame = drame;
    }

    public String getHorreur() {
        return horreur;
    }

    public void setHorreur(String horreur) {
        this.horreur = horreur;
    }

    public String getKids() {
        return kids;
    }

    public void setKids(String kids) {
        this.kids = kids;
    }

    public String getIndia() {
        return India;
    }

    public void setIndia(String India) {
        this.India = India;
    }

    public String getSeries() {
        return series;
    }

    public void setSeries(String series) {
        this.series = series;
    }

  

   
    
    
    
}
