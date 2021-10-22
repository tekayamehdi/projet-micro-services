package com.esprit.lunettes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableEurekaClient
public class LunettesMsApplication {

	public static void main(String[] args) {
		SpringApplication.run(LunettesMsApplication.class, args);
	}
	/*
	@Autowired
	private LunetteRepository repository;
	
	@Bean
	ApplicationRunner init() {
		return (args) -> {
			// save
			repository.save(new Lunette("ray-ban", "aviator", 105.2));
			repository.save(new Lunette("Sarra", "ab", "sa@esprit.tn"));
			repository.save(new Lunette("Mohamed", "ba", "mo@esprit.tn"));
			// fetch
			repository.findAll().forEach(System.out::println);

		};
	}
*/
	
}
