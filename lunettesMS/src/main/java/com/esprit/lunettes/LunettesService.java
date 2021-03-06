package com.esprit.lunettes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;




@Service
public class LunettesService implements ILunettesService{

@Autowired
	LunetteRepository lunetteR;

	@Override
	public int addLunette(Lunette lunette) {
		lunetteR.save(lunette);
		return lunette.getId();
	}

	@Override
	public void deleteLunetteById(int lunetteId) {

		Lunette lunette= lunetteR.findById(lunetteId).get();
		lunetteR.delete(lunette);

	}


	@Override
	public String getLunettemodeleById(int lunetteId) {
		return lunetteR.lunettesByModele(lunetteId);
	}

	@Override
	public List<Lunette> getAllLunettesMarque() {
		return lunetteR.listLunetteMarque();
	}

	@Override
	public List<Lunette> getAllLunettes() {
		return lunetteR.findAll();
	}

	@Override
	public Lunette updateLunettes(int id, Lunette lunettes) {
		if (lunetteR.findById(id).isPresent()) {
			Lunette existinglunettes = lunetteR.findById(id).get();
			existinglunettes.setMarque(lunettes.getMarque());
			existinglunettes.setModele(lunettes.getModele());
			existinglunettes.setPrix(lunettes.getPrix());
			return lunetteR.save(existinglunettes);

		}
		else
			return null;
	
	}



}
