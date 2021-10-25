package com.esprit.lunettes;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface LunetteRepository extends JpaRepository<Lunette, Integer> {

	@Query("select c from Lunette c where c.id like :id")
	public Page<Lunette> lunetteByMarque(@Param("id") int id, Pageable pageable);
	

	 @Query("SELECT marque FROM Lunettes c where c.id=:id")
	    public String lunettesByModele(@Param("id")int id);
	 
	 @Query("SELECT marque FROM Lunettes ")
	 	public List <Lunette> listLunetteMarque();

}
