package com.esprit.clients;

import java.util.List;

public interface IClientService {
	int addClient(Client client);
	public void deleteClientById(int clientId);
	public List<Client> getAllClient();
	public String getClientnomById(int clientId);
	public List<Client>getAllClientName();
}
