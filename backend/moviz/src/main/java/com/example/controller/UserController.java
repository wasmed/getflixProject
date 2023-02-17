
package com.example.controller;


import com.example.entity.User;

import com.example.exception.UserNotFoundException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.example.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;



@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class UserController {
    
     @Autowired
    PasswordEncoder passwordEncoder;
   
    @Autowired
    private UserRepository userRepository;
    
    
       //get all users
     @GetMapping("/clients")
    public List<User> getAllClients(){
         return userRepository.findAll();
    }
    
    //get user API by id
     @GetMapping("/client/{id}")
    User getClientById(@PathVariable Long id){
         return userRepository.findById(id)
                 .orElseThrow(()-> new UserNotFoundException(id));
    }
    
    
    //create user rest API
     @PostMapping("/clients")
    public  ResponseEntity<?> createClient(@RequestBody User client){
            List<User> myList = userRepository.findByMailAndPassword(client.getNom(),client.getPrenom()); 
            List<User> myList1 = userRepository.findByMail(client.getMail()); 
             if (!myList.isEmpty() && !myList1.isEmpty()) {
                 return new ResponseEntity<>("Nom d'utilisateur déjà utilisé!",
                    HttpStatus.BAD_REQUEST); 
               
        } else {
                client.setPassword(passwordEncoder.encode(client.getPassword()));
                userRepository.save(client);
         
    }
          return ResponseEntity.ok("L'utilisateur a été enregistré avec succès!");  
    }
    
    
    
      //login user api 
     @PostMapping("/login")
    public ResponseEntity<?> LoginClient(@RequestBody User client){
         
          String user= userRepository.findByPassword(passwordEncoder.encode(client.getPassword()));
         
          List<User> myList = userRepository.findByMailAndPassword(client.getMail(),user); 
          
          
          if (!myList.isEmpty()) {
                
               return new ResponseEntity<>(" l'utilisateur non trouvé!",
                    HttpStatus.BAD_REQUEST); 
               
        } else  {
              
                return ResponseEntity.ok("vous etes logé avec succès!"); 
        
    }
    }
   
    
 // put user api by id
    @PutMapping("/client/{id}")
    User UpdateClient(@RequestBody User newClient,@PathVariable Long id){
        
          return userRepository.findById(id)
                  
                  .map(client->{
                       client.setNom(newClient.getNom());
                       client.setMail(newClient.getMail());
                       client.setPrenom(newClient.getPrenom());
                       client.setPassword(passwordEncoder.encode(newClient.getPassword()));
                     return userRepository.save(client);
                             
                  }).orElseThrow(()-> new UserNotFoundException(id));
    }
    
    //delete user api
    @DeleteMapping("/client/{id}")
    String deleteClient(@PathVariable Long id){
          if(!userRepository.existsById(id)){
              throw new UserNotFoundException(id);
          }
            userRepository.deleteById(id);
            return "User with id: "+id+"has been deleted ";
  
    }
  
}
