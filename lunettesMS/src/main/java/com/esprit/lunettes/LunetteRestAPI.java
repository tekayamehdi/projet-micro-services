package com.esprit.lunettes;

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


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
@RestController
@RequestMapping("/lunettes")
public class LunetteRestAPI {

	private String title="Hello, I'm the lunettes Microservice";
	@Autowired
	ILunettesService ilunettesservice;
	private LunetteRepository lunetteR ;
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/hello")
	public String sayHello() {
		System.out.println(title);
		return title;
	}
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/ajouter")
	@ResponseBody
	public Lunette ajouterLunette(@RequestBody Lunette lunette)
	{
	
		ilunettesservice.addLunette(lunette);
		
		return lunette;
	}
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/update/{id}")
	@ResponseStatus(HttpStatus.OK)
	public Lunette updatevenderus(@PathVariable("id") int id, @RequestBody Lunette v) {

		return ilunettesservice.updateLunettes(id, v);
	}
	@CrossOrigin(origins = "http://localhost:4200")
	 @DeleteMapping("/delete/{id}")
	 @ResponseBody
	 	 public void deleteLunetteById(@PathVariable("id")int id)
	 {
		 ilunettesservice.deleteLunetteById(id);
		 
	 }
	@CrossOrigin(origins = "http://localhost:4200")
	 @GetMapping(value = "/getAllLunettes")
	    @ResponseBody
		public List<Lunette> getAllLunettes() {
		
			
			return ilunettesservice.getAllLunettes();
		}
	@CrossOrigin(origins = "http://localhost:4200")
	 @GetMapping("/getlunetteModelebyid/{id}")
	 @ResponseBody
	 public String getLunetteModeleById(@PathVariable("id")int id) {
		 return ilunettesservice.getLunettemodeleById(id);
	 }
}
