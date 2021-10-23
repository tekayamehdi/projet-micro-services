package com.esprit.vendeurs;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
	public void deleteVendeursById(int vendeursId) {

		Vendeurs vendeur = vendeurR.findById(vendeursId).get();
		vendeurR.delete(vendeur);

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

}
