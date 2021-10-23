package com.esprit.clients;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableEurekaClient

public class ClientsMsApplication {

	public static void main(String[] args) {
		SpringApplication.run(ClientsMsApplication.class, args);
	}

}
