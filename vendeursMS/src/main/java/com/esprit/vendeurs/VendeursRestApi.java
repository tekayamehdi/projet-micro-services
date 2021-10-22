package com.esprit.vendeurs;

import org.springframework.web.bind.annotation.RequestMapping;

public class VendeursRestApi {
private String title="Hello, I'm the candidate Microservice";
	
	@RequestMapping("/hello")
	public String sayHello() {
		System.out.println(title);
		return title;
	}
}
