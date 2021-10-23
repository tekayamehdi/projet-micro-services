package com.esprit.vendeurs;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface VendeursRepository extends JpaRepository<Vendeurs, Integer> {
	@Query("select v from Vendeurs v where v.id like :id")
	public Page<Vendeurs> vendeursByNom(@Param("id") int id, Pageable pageble);
	
	 @Query("SELECT nom FROM Vendeurs v where v.id=:id")
	    public String vendeursByName(@Param("id")int id);
	 @Query("SELECT nom FROM Vendeurs ")
	 	public List <Vendeurs> listVendeurName();
	 

}
