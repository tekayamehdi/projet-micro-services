package com.esprit.clients;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ClientRepository extends JpaRepository <Client, Integer>  {

	@Query("select c from Candidat c where c.nom like :nom")
	public Page<Client> candidatByNom(@Param("nom") String n, Pageable pageable);
}
