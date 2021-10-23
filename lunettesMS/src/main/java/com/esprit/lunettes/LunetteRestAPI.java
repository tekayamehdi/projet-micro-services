package com.esprit.lunettes;

import org.springframework.web.bind.annotation.RequestMapping;

public class LunetteRestAPI {
	private String title="Hello, I'm the candidate Microservice";
	
	@RequestMapping("/hello")
	public String sayHello() {
		System.out.println(title);
		return title;
	}
}
