package com.esprit.clients;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableEurekaClient
public class ClientsMsApplication {

	public static void main(String[] args) {
		SpringApplication.run(ClientsMsApplication.class, args);
	}
	@Autowired
	private ClientRepository repository;
	
	@Bean
	ApplicationRunner init() {
		return (args) -> {
			// save
			repository.save(new Client ("kk","jj", "ka@esprit.tn","menzah7"));

			// fetch
			repository.findAll().forEach(System.out::println);
		};
	}
}
