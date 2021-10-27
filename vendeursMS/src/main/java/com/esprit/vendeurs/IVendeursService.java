package com.esprit.vendeurs;

import java.util.List;

import org.springframework.http.ResponseEntity;

public interface IVendeursService {
	int addvendeur(Vendeurs vendeurs);
	public String deleteVendeursById(int vendeursId);
	public List<Vendeurs> getAllVendeurs();
	public String getVendeursnomById(int vendeursId);
	public List<Vendeurs>getAllVendeursName();
	public Vendeurs updateVendeur(int id,Vendeurs vendeurs);

}
