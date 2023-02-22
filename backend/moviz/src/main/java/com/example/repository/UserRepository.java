
package com.example.repository;

import com.example.entity.User;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    
    
    
      public List<User> findByNomAndPrenom(String nom, String prenom);
      public List<User> findByMailAndPassword(String mail, String password);
         public List<User> findByMail(String mail);
         
         public String findByPassword(String password);
         
        /* @Query("SELECT c.password FROM users c WHERE c.email = ?1")
             public String chercherUserParEmail(String email);*/
      
}
