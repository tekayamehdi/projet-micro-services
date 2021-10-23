package com.esprit.lunettes;

import java.io.Serializable; 
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Lunette implements Serializable {
	

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public Lunette(String marque, String modele, float prix) {
		this.marque= marque;
		this.modele= modele;
		this.prix = prix;
	}
	
	public Lunette() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Id
	@GeneratedValue
	private int id;
	private String marque, modele;
	private float prix;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getMarque() {
		return marque;
	}

	public void setMarque(String marque) {
		this.marque = marque;
	}

	public String getModele() {
		return modele;
	}

	public void setModele(String modele) {
		this.modele = modele;
	}

	public float getPrix() {
		return prix;
	}

	public void setPrix(float prix) {
		this.prix = prix;
	}
	
		
	
	
	

}
