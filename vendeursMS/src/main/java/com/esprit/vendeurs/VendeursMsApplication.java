package com.esprit.vendeurs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableDiscoveryClient
public class VendeursMsApplication {

	public static void main(String[] args) {
		SpringApplication.run(VendeursMsApplication.class, args);
	}
/*
@Autowired
	private VendeursRepository repository;
@Autowired 
	private IVendeursService ivendeurs;
	
	@Bean
	ApplicationRunner init() {
		return (args) -> {
			// save
			//ivendeurs.addvendeur(new Vendeurs("habib","habibhnini@gmail.com",6));
			//update
			//ivendeurs.updateVendeur(new Vendeurs("medhabib","habibhnini123@gmail.com",5),6);
			// fetchAll
			//System.out.println(ivendeurs.getAllVendeurs());
			//fetchOneNameByID
			//System.out.println(ivendeurs.getVendeursnomById(3));
			//fetchAllName
			//System.out.println(ivendeurs.getAllVendeursName());
			//Delete
			//ivendeurs.deleteVendeursById(1);
		};
	}*/
}
