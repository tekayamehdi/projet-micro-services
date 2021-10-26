package com.esprit.vendeurs;

import java.io.Serializable;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity  
public class Vendeurs implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	public Vendeurs(String nom, String contact, int num_caisse) {
		super();
		this.nom = nom;
		this.contact = contact;
		this.num_caisse = num_caisse;
	}

	public Vendeurs() {
		super();
	}
	@Id
	@GeneratedValue
	private int id;

	private String nom;
	 
	private String contact;
  
	private int num_caisse;

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	public int getNum_caisse() {
		return num_caisse;
	}
	public void setNum_caisse(int num_caisse) {
		this.num_caisse = num_caisse;
	}

	@Override
	public String toString() {
		return "Vendeurs [id=" + id + ", nom=" + nom + ", contact=" + contact + ", num_caisse=" + num_caisse + "]";
	}
	
	

}
