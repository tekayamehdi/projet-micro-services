package com.esprit.clients;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
@RestController
@RequestMapping("/client")
public class ClientRestAPI {
private String title="Hello, I'm the client Microservice";
@Autowired
IClientService iclientservice;
private ClientRepository clientR ;
@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/hello")
	public String sayHello() {
		System.out.println(title);
		return title;
	}
@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/ajouter")
	@ResponseBody
	public Client ajouterClient(@RequestBody Client client)
	{
	
		iclientservice.addClient(client);
		return client;
	}
@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/update/{id}")
	@ResponseStatus(HttpStatus.OK)
	public Client updateclient(@PathVariable("id") int id, @RequestBody Client c) {

		return iclientservice.updateclient(id, c);
	}
@CrossOrigin(origins = "http://localhost:4200")
	 @DeleteMapping("/delete/{id}")
	 @ResponseBody
	 public void deleteClientById(@PathVariable("id")int id)
	 {
		 iclientservice.deleteClientById(id);
		 
	 }
@CrossOrigin(origins = "http://localhost:4200")
	 @GetMapping(value = "/getAllclient")
	    @ResponseBody
		public List<Client> getAllClient() {
		
			
			return iclientservice.getAllClient();
		}
@CrossOrigin(origins = "http://localhost:4200")
	 @GetMapping("/getclientNamebyid/{id}")
	 @ResponseBody
	 public String getClientNameById(@PathVariable("id")int id) {
		 return iclientservice.getClientnomById(id);
	 }
	 
}