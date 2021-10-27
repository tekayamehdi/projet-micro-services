package com.esprit.vendeurs;

import java.lang.reflect.Array;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class VendeursService implements IVendeursService {

	@Autowired
	VendeursRepository vendeurR;

	@Override
	public int addvendeur(Vendeurs vendeurs) {
		vendeurR.save(vendeurs);
		return vendeurs.getId();
	}

	@Override
	public String deleteVendeursById(int vendeursId) {
		if (vendeurR.findById(vendeursId).isPresent()) {
		Vendeurs vendeur = vendeurR.findById(vendeursId).get();
		vendeurR.delete(vendeur);
		return "vendeurs supprimé";
		}else
			return "error";
	}

	@Override
	public List<Vendeurs> getAllVendeurs() {

		return vendeurR.findAll();
	}

	@Override
	public String getVendeursnomById(int vendeursId) {
		// TODO Auto-generated method stub
		return vendeurR.vendeursByName(vendeursId);
	}

	@Override
	public List<Vendeurs> getAllVendeursName() {

		return vendeurR.listVendeurName();
	}

	@Override
	public Vendeurs updateVendeur(int id,Vendeurs vendeur) {
		if (vendeurR.findById(id).isPresent()) {
			Vendeurs existingvendeurs = vendeurR.findById(id).get();
			existingvendeurs.setNom(vendeur.getNom());
			existingvendeurs.setContact(vendeur.getContact());
			existingvendeurs.setNum_caisse(vendeur.getNum_caisse());
			return vendeurR.save(existingvendeurs);

		}
		else
			return null;
	
	}

}
