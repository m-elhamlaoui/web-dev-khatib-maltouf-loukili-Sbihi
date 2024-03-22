package com.amoa.RentalHub.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.amoa.RentalHub.model.Property;
import com.amoa.RentalHub.model.User;

public interface PropertyRepository extends JpaRepository<Property, Long>, CrudRepository<Property, Long>{

	List<Property> findAllByOwner(User owner);

	List<Property> findByAvailabilityDateBefore(LocalDate date);
	
}
