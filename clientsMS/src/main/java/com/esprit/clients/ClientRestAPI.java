package com.esprit.clients;

import org.springframework.web.bind.annotation.RequestMapping;

public class ClientRestAPI {
	private String title="Hello, I'm the Client Microservice";
	
	@RequestMapping("/hello")
	public String sayHello() {
		System.out.println(title);
		return title;
	}

}