package com.esprit.vendeurs;

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
@RequestMapping("/vendeurs")
public class VendeursRestApi {
private String title="Hello, I'm the candidate Microservice";
@Autowired
IVendeursService ivendeursservice;
private VendeursRepository vendeurR ;
	@RequestMapping("/hello")
	public String sayHello() {
		System.out.println(title);
		return title;
	}
	
	@PostMapping("/ajouter")
	@ResponseBody
	public Vendeurs ajouterVendeur(@RequestBody Vendeurs vendeur)
	{
	
		ivendeursservice.addvendeur(vendeur);
		return vendeur;
	}
	
	 @PutMapping("/udpdate/{id}")
	    public ResponseEntity updateClient(@PathVariable int id, @RequestBody Vendeurs vendeur) {
	        Vendeurs currentVendeur = vendeurR.findById(id).orElseThrow(RuntimeException::new);
	        currentVendeur.setNom(vendeur.getNom());
	        currentVendeur.setContact(vendeur.getContact());
	        currentVendeur.setNum_caisse(vendeur.getNum_caisse());
	        currentVendeur = vendeurR.save(vendeur);

	        return ResponseEntity.ok(currentVendeur);
	    }
	 @DeleteMapping("/delete/{id}")
	 @ResponseBody
	 public void deleteVendeurById(@PathVariable("id")int id)
	 {
		 ivendeursservice.deleteVendeursById(id);
		 
	 }
	 @GetMapping(value = "/getAllVendeurs")
	    @ResponseBody
		public List<Vendeurs> getAllVendeurs() {
		
			
			return ivendeursservice.getAllVendeurs();
		}
	 @GetMapping(value="/getNomVendeurs")
	 	@ResponseBody
	 	public List<Vendeurs> getAllvendeursName(){
		 return ivendeursservice.getAllVendeursName();
	 }
	 @GetMapping("/getvendeurNamebyid/{id}")
	 @ResponseBody
	 public String getVendeurNameById(@PathVariable("id")int id) {
		 return ivendeursservice.getVendeursnomById(id);
	 }
	 
}
