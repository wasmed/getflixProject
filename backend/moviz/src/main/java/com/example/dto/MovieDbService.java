
package com.example.dto;

import org.springframework.boot.web.client.RestTemplateBuilder;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class MovieDbService {
    
     // Injecter RestTemplate dans le service
    private final RestTemplate restTemplate;

    public MovieDbService(RestTemplateBuilder restTemplateBuilder) {
        this.restTemplate = restTemplateBuilder.build();
    }
    
    public String getMovieData(String movieTitle) {
        // Créer l'URL de l'API avec votre clé d'API (API Key) et le titre du film recherché
        String url = "https://api.themoviedb.org/3/search/movie?api_key=99465853a902130347eb5478d490a4ee&query=" + movieTitle;

        // Envoyer une requête GET à l'API et récupérer les données JSON en réponse
        String jsonData = restTemplate.getForObject(url, String.class);

        return jsonData;
    }
}
