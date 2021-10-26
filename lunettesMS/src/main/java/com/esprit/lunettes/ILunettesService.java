package com.esprit.lunettes;

import java.util.List;

public interface ILunettesService {
	
	int addLunette(Lunette lunettes);
	
	public void deleteLunetteById(int lunetteId);
	
	public List<Lunette> getAllLunettes();
	
	public String getLunettemodeleById(int lunetteId);
	
	public List<Lunette>getAllLunettesMarque();
}
