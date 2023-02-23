/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "filmTopRated")
public class FilmsTopRated {
 @Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;
     
    private String releaseDate ;
    private String title;
    private Integer page;
    private Integer results;
    private Integer total_pages;  
    private Integer total_results;
    private Boolean adult;
   private String backdrop_path;
   private Integer media_id;
    private String name;
    private String original_language;
    private String original_name;
    private String overview;
    private String poster_path;
    private String media_type;
    private String genre_ids;
    private Double popularity;
    private String first_air_date;
    private Double vote_average;
    private Integer vote_count;
    private String origin_country;
    
}
