package com.esprit.vendeurs;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface VendeursRepository extends JpaRepository<Vendeurs, Integer> {
	@Query("select v from Vendeurs v where v.nom like :nom")
	public Page<Vendeurs> vendeursByNom(@Param("nom") String n, Pageable pageble);
}
