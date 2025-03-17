package com.aj2.resumebuilder;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ResumebuilderApplication {

	public static void main(String[] args) {
		try {
			SpringApplication.run(ResumebuilderApplication.class, args);
		} catch (Exception e) {
			System.out.println(e);
		}
	}

}