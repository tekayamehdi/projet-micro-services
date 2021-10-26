package com.esprit.clients;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ClientRepository extends JpaRepository<Client, Integer> {
	@Query("select c from Client c where c.id like :id")
	public Page<Client> clientByNom(@Param("id") int id, Pageable pageble);
	
	 @Query("SELECT nom FROM Client c where c.id=:id")
	    public String clientByName(@Param("id")int id);
	 @Query("SELECT nom FROM Client ")
	 	public List <Client> listClientName();
	 

}