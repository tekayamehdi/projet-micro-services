package com.esprit.lunettes;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
@RestController
@RequestMapping("/lunettes")
public class LunetteRestAPI {

	private String title="Hello, I'm the lunettes Microservice";
	@Autowired
	ILunettesService ilunettesservice;
	private LunetteRepository lunetteR ;

	@RequestMapping("/hello")
	public String sayHello() {
		System.out.println(title);
		return title;
	}
	
	@PostMapping("/ajouter")
	@ResponseBody
	public Lunette ajouterLunette(@RequestBody Lunette lunette)
	{
	
		ilunettesservice.addLunette(lunette);
		
		return lunette;
	}
	
	 @PutMapping("/update/{id}")
	    public ResponseEntity updateLunette(@PathVariable int id, @RequestBody Lunette lunette) {
	        Lunette currentLunette= lunetteR.findById(id).orElseThrow(RuntimeException::new);
	        currentLunette.setMarque(lunette.getMarque());
	        currentLunette.setModele(lunette.getModele());
	        currentLunette.setPrix(lunette.getPrix());
	        currentLunette= lunetteR.save(lunette);

	        return ResponseEntity.ok(currentLunette);
	    }
	 
	 @DeleteMapping("/delete/{id}")
	 @ResponseBody
	 	 public void deleteLunetteById(@PathVariable("id")int id)
	 {
		 ilunettesservice.deleteLunetteById(id);
		 
	 }
	 @GetMapping(value = "/getAllLunettes")
	    @ResponseBody
		public List<Lunette> getAllLunettes() {
		
			
			return ilunettesservice.getAllLunettes();
		}
	 @GetMapping(value="/getMarqueLunettes")
	 	@ResponseBody
	 	public List<Lunette> getAllLunettesMarque(){
		 return ilunettesservice.getAllLunettesMarque();
	 }
	 @GetMapping("/getlunetteModelebyid/{id}")
	 @ResponseBody
	 public String getLunetteModeleById(@PathVariable("id")int id) {
		 return ilunettesservice.getLunettemodeleById(id);
	 }
}
