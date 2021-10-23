package com.esprit.vendeurs;

import java.util.List;

public interface IVendeursService {
	int addvendeur(Vendeurs vendeurs);
	public void deleteVendeursById(int vendeursId);
	public List<Vendeurs> getAllVendeurs();
	public String getVendeursnomById(int vendeursId);
	public List<Vendeurs>getAllVendeursName();

}
