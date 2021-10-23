package com.esprit.lunettes;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface LunetteRepository extends JpaRepository<Lunette, Float> {

	@Query("select c from Lunette c where c.marque like :marque")
	public Page<Lunette> lunetteByMarque(@Param("marque") String n, Pageable pageable);
	

}
