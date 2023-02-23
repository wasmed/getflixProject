package com.example.controller;

import com.example.entity.User;

import com.example.exception.UserNotFoundException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.repository.UserRepository;

import java.util.UUID;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class UserController {
    
       @Autowired
        JavaMailSender javaMailSender;

  	@Autowired
	UserRepository userRep;
        
       @Autowired
       PasswordEncoder passwordEncoder;
	

    //get all users :::::::::::::::::
    @GetMapping("/clients")
    public List<User> getAllUsers() {
        return userRep.findAll();
    }

    //get user API by id :::::::::::::
   @GetMapping("/client/{id}")
    User getClientById(@PathVariable Long id) {
        return userRep.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    //create user rest API
    @PostMapping("/signup")
    public ResponseEntity<?> createClient(@RequestBody User client) {
         List<User> myList = userRep.findByUsername(client.getUsername());
         List<User> myList1 = userRep.findByMail(client.getMail());
    
    if (!myList.isEmpty() || !myList1.isEmpty()) {
        return new ResponseEntity<>("Nom d'utilisateur ou e-mail déjà utilisé!",
                HttpStatus.BAD_REQUEST);
    } else if (!client.getPassword().equals(client.getConfirmPassword())) {
        return new ResponseEntity<>("Les mots de passe ne correspondent pas!",
                HttpStatus.BAD_REQUEST);
    } else {
        client.setPassword(passwordEncoder.encode(client.getPassword()));
        userRep.save(client);
        return ResponseEntity.ok("L'utilisateur a été enregistré avec succès!");
    }

    }
    //login user api :::::::::::::
      @PostMapping("/signin")
    public ResponseEntity<?> LoginClient(@RequestBody User client){
        
         List<User> myList = userRep.findByUsername(client.getUsername());

    if (myList.isEmpty()) {
        return ResponseEntity.ok("Nom d'utilisateur ou mot de passe incorrect !");
    }

    String storedPassword = myList.get(0).getPassword();
    String enteredPassword = client.getPassword();

    if (!passwordEncoder.matches(enteredPassword, storedPassword)) {
        return ResponseEntity.ok("Nom d'utilisateur ou mot de passe incorrect !");
    }

    return ResponseEntity.ok("Vous êtes connecté avec succès !");
    
    }
    
    // forget password API ::::::
   @PostMapping("/reset-password")
public ResponseEntity<?> resetPassword(@RequestBody User client) {
    String email = client.getMail();
    List<User> myList = userRep.findByMail(email);

    if (myList.isEmpty()) {
        return ResponseEntity.ok("Aucun utilisateur associé à cet e-mail !");
    }

    User user = myList.get(0);

    // Générer un token aléatoire pour la réinitialisation de mot de passe
    String resetToken = UUID.randomUUID().toString();

    // Enregistrer le token dans la base de données
    user.setResetToken(resetToken);
    userRep.save(user);

    // Envoyer un lien de réinitialisation de mot de passe par e-mail à l'utilisateur
    sendResetLinkByEmail(user, resetToken);

    return ResponseEntity.ok("Un lien de réinitialisation de mot de passe a été envoyé à l'adresse e-mail enregistrée !");
}

private void sendResetLinkByEmail(User user, String resetToken) {
   
   // Adresse e-mail de l'expéditeur
    String fromEmail = "wasmedbxl@gmail.com";

    // Adresse e-mail du destinataire
    String toEmail = user.getMail();

    // Sujet de l'e-mail
    String subject = "Réinitialisation de mot de passe";

    // Corps de l'e-mail
    String body = "Bonjour " + user.getUsername() + ",\n\n";
    body += "Vous avez demandé la réinitialisation de votre mot de passe. Cliquez sur le lien ci-dessous pour réinitialiser votre mot de passe :\n\n";
   // body += "https://monsite.com/reset-password?token=" + resetToken + "\n\n";
    body += "Si vous n'avez pas demandé la réinitialisation de mot de passe, ignorez cet e-mail.\n\n";
    body += "Cordialement,\n";
    body += "L'équipe wasmed";

    // Création de l'objet SimpleMailMessage pour l'e-mail
    SimpleMailMessage message = new SimpleMailMessage();
    message.setFrom(fromEmail);
    message.setTo(toEmail);
    message.setSubject(subject);
    message.setText(body);

    // Envoi de l'e-mail
    javaMailSender.send(message);


}
    
    // put user api by id ::::::::::::::
    @PutMapping("/client/{id}")
    User UpdateClient(@RequestBody User newClient, @PathVariable Long id) {

        return userRep.findById(id)
                .map(client -> {
                    client.setUsername(newClient.getUsername());
                    client.setMail(newClient.getMail());
                    client.setPassword(passwordEncoder.encode(newClient.getPassword()));
                    return userRep.save(client);

                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    //delete user api  :::::::::::::::::::::
    @DeleteMapping("/client/{id}")
    String deleteClient(@PathVariable Long id) {
        if (!userRep.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        userRep.deleteById(id);
        return "User with id: " + id + "has been deleted ";

    }

}
