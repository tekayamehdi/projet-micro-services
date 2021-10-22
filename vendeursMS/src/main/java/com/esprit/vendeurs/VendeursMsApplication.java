package com.esprit.vendeurs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class VendeursMsApplication {

	public static void main(String[] args) {
		SpringApplication.run(VendeursMsApplication.class, args);
	}
	@Autowired
	private VendeursRepository repository;
	
	@Bean
	ApplicationRunner init() {
		return (args) -> {
			// save
			repository.save(new Vendeurs(3, "Ch", "ma@esprit.tn",3));
			
			// fetch
			repository.findAll().forEach(System.out::println);
		};
	}
}
