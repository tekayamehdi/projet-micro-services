package com.esprit.clients;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/client")
public class ClientRestAPI {
private String title="Hello, I'm the client Microservice";
@Autowired
IClientService iclientservice;
private ClientRepository clientR ;
	@RequestMapping("/hello")
	public String sayHello() {
		System.out.println(title);
		return title;
	}
	
	@PostMapping("/ajouter")
	@ResponseBody
	public Client ajouterClient(@RequestBody Client client)
	{
	
		iclientservice.addClient(client);
		return client;
	}
	
	 @PutMapping("/udpdate/{id}")
	    public ResponseEntity updateClient(@PathVariable int id, @RequestBody Client client) {
	        Client currentClient = clientR.findById(id).orElseThrow(RuntimeException::new);
	        currentClient.setNom(client.getNom());
	        currentClient.setPrenom(client.getPrenom());
	        currentClient.setEmail(client.getEmail());
	        currentClient.setAdresse(client.getAdresse());
	        currentClient = clientR.save(client);

	        return ResponseEntity.ok(currentClient);
	    }
	 @DeleteMapping("/delete/{id}")
	 @ResponseBody
	 public void deleteClientById(@PathVariable("id")int id)
	 {
		 iclientservice.deleteClientById(id);
		 
	 }
	 @GetMapping(value = "/getAllclient")
	    @ResponseBody
		public List<Client> getAllClient() {
		
			
			return iclientservice.getAllClient();
		}
	 @GetMapping(value="/getNomClient")
	 	@ResponseBody
	 	public List<Client> getAllclientName(){
		 return iclientservice.getAllClientName();
	 }
	 @GetMapping("/getclientNamebyid/{id}")
	 @ResponseBody
	 public String getClientNameById(@PathVariable("id")int id) {
		 return iclientservice.getClientnomById(id);
	 }
	 
}