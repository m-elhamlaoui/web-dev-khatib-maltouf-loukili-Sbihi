package com.amoa.RentalHub.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.amoa.RentalHub.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

	Optional<User> findByEmail(String email);

}