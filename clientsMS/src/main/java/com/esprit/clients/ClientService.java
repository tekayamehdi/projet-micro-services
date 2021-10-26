package com.esprit.clients;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientService implements IClientService {
	
	@Autowired
	ClientRepository clientR;

	@Override
	public int addClient(Client client) {
		clientR.save(client);
		return client.getId();
	}

	@Override
	public void deleteClientById(int clientId) {

		Client client = clientR.findById(clientId).get();
		clientR.delete(client);

	}

	@Override
	public List<Client> getAllClient() {

		return clientR.findAll();
	}

	@Override
	public String getClientnomById(int clientId) {
		// TODO Auto-generated method stub
		return clientR.clientByName(clientId);
	}

	@Override
	public List<Client> getAllClientName() {

		return clientR.listClientName();
	}

}
