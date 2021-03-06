package com.esprit.vendeurs;

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
@RequestMapping("/vendeurs")
public class VendeursRestApi {
	private String title = "Hello, I'm the candidate Microservice";
	@Autowired
	IVendeursService ivendeursservice;
	private VendeursRepository vendeurR;
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/hello")
	public String sayHello() {
		System.out.println(title);
		return title;
	}
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/ajouter")
	@ResponseBody
	public Vendeurs ajouterVendeur(@RequestBody Vendeurs vendeur) {

		ivendeursservice.addvendeur(vendeur);
		return vendeur;
	}
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/update/{id}")
	@ResponseStatus(HttpStatus.OK)
	public Vendeurs updatevenderus(@PathVariable("id") int id, @RequestBody Vendeurs v) {

		return ivendeursservice.updateVendeur(id, v);
	}
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping("/delete/{id}")
	@ResponseStatus(HttpStatus.OK)
	public void deleteVendeurById(@PathVariable("id") int id) {
		ivendeursservice.deleteVendeursById(id);

	}
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping(value = "/getAllVendeurs")
	@ResponseStatus(HttpStatus.OK)
	public List<Vendeurs> getAllVendeurs() {

		return ivendeursservice.getAllVendeurs();
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/getvendeurNamebyid/{id}")
	@ResponseBody
	public String getVendeurNameById(@PathVariable("id") int id) {
		return ivendeursservice.getVendeursnomById(id);
	}

}
