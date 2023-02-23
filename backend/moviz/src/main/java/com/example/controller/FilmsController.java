
package com.example.controller;



import com.example.entity.Films;
import com.example.entity.FilmsTopRated;



import com.example.repository.FilmsRepository;
import com.example.repository.FilmsTopRatedRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;



import java.util.Map;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/films")
public class FilmsController {
    
    @Autowired
    private FilmsRepository filmRepository;
    
    @Autowired
    private FilmsTopRatedRepository filmRep;
    
   private final String API_KEY = "8f6eccce32f0e1b68b851bf983a56b9e";
  private final String baseURL = "https://api.themoviedb.org/3";

  
   
    
  


 @GetMapping("/fetchTrending")
  public ResponseEntity<?> getTrendingMovies() throws JsonProcessingException {
      
      
       String url = baseURL + "/discover/movie" + API_KEY;
      RestTemplate restTemplate = new RestTemplate();
    ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);

    // Parser les données JSON renvoyées
    ObjectMapper mapper = new ObjectMapper();
    JsonNode root = mapper.readTree(response.getBody());
    JsonNode results = root.path("results");
    List<FilmsTopRated> films = new ArrayList<>();
    
    for (JsonNode result : results) {
      FilmsTopRated film = new FilmsTopRated();
      // film.setPage(result.path("page").intValue());
      film.setTitle(result.path("title").asText());
      //film.setOverview(result.path("overview").asText());
      film.setReleaseDate(result.path("release_date").asText());
      film.setAdult(result.path("adult").booleanValue());
      film.setBackdrop_path(result.path("backdrop_path").asText());
     // film.setOriginal_name(result.path("original_name").asText());
      film.setGenre_ids(result.path("genres_ids").asText());
      film.setFirst_air_date(result.path("first_air_date").asText());
      film.setName(result.path("name").asText());
      film.setMedia_id(result.path("media_id").asInt());
      film.setMedia_type(result.path("media_type").asText());
      film.setOrigin_country(result.path("origin_country").asText());
      film.setOriginal_language(result.path("original_language").asText());
      film.setPage(result.path("page").asInt());
      film.setPopularity(result.path("popularity").asDouble());
     // film.setOverview(result.path("overview").asText());
      film.setPoster_path(result.path("poster_path").asText());
      film.setResults(result.path("results").asInt());
      film.setTotal_pages(result.path("total_pages").asInt());
      film.setTotal_results(result.path("total_results").asInt());
       film.setVote_count(result.path("vote_count").asInt());
       film.setVote_average(result.path("vote_average").asDouble());
      // ... etc. pour les autres informations du film ...
      films.add(film);
      
    }

    // Enregistrer les informations des films dans la base de données
    filmRep.saveAll(films);

    return response;
    
  }
    
}