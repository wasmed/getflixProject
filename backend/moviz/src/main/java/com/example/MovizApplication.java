package com.example;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MovizApplication {

    

    public static void main(String[] args) {
        SpringApplication.run(MovizApplication.class, args);
    }

    /*@PostConstruct
	void init_users() {

		// ajouter les rÃ´les
		userService.addRole(new Role(null, "ADMIN"));
		userService.addRole(new Role(null, "USER"));

		// ajouter les users 
		userService.saveUser(new User(null,"wasmed","wasmed@gmail.com","123", true, null));
		userService.saveUser(new User(null, "abdel","abdel@gmail.com","123", true, null));
		userService.saveUser(new User(null, "saad","saad@gmail.com","123", true, null));

		// ajouter les rÃ´les aux users
		userService.addRoleToUser("wasmed", "ADMIN");
		//userService.addRoleToUser("admin", "USER");
		userService.addRoleToUser("saad", "USER");
		userService.addRoleToUser("abdel", "USER");
	}*/

 

}
