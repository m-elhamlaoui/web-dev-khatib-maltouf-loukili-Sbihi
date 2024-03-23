package com.example.SpringAuth.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.SpringAuth.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

	
	
	Optional<User> findByEmail(String email);

	
}
