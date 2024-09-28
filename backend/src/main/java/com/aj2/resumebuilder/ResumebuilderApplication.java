package com.aj2.resumebuilder;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.sql.*;

@SpringBootApplication
public class ResumebuilderApplication {

	public static void main(String[] args) {
		try {
////			Connect to database
//			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/resumebuilder","root","password");
//			Statement stmt = con.createStatement();
//
////			Insert records
//			System.out.println("Inserting records into the table...");
//			String sql = "INSERT INTO users(email, name) VALUES ('ak2162@srmist.edu.in', 'Aditya Kulshrestha')";
//			stmt.executeUpdate(sql);
//			sql = "INSERT INTO users(email, name) VALUES ('ig1234@srmist.edu.in', 'Itishree Gupta')";
//			stmt.executeUpdate(sql);
//			System.out.println("Inserted records into the table.");
//
////			Read records
//			sql = "SELECT * FROM users";
//			ResultSet rs = stmt.executeQuery(sql);
//			System.out.println("id email                 name");
//			while(rs.next())
//				System.out.println(rs.getInt("id")+"  "+rs.getString("email")+"  "+rs.getString("name"));
//
////			Close connection
//			con.close();



			SpringApplication.run(ResumebuilderApplication.class, args);
		} catch (Exception e) {
			System.out.println(e);
		}
	}

}



