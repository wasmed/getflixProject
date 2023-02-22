/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.controller;

import com.example.dto.MovieDbService;
import com.example.entity.Films;

import com.example.repository.FilmsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/films")
public class FilmsController {
    @Autowired
    private FilmsRepository filmRepository;
    
    @Autowired
    private MovieDbService movieDbService;
    
    
     @GetMapping("/movies/search")
    public String searchMovie(@RequestParam String query) {
        return movieDbService.getMovieData(query);
    }
    
    @PostMapping("/save")
    public ResponseEntity<String> saveMovieData(@RequestBody Films movieData) {
        filmRepository.save(movieData);
        
      

      
return ResponseEntity.ok("Movie data saved successfully");
    }

   
}
