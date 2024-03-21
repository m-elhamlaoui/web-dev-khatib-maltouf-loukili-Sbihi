package com.amoa.RentalHub.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.amoa.RentalHub.model.Property;
import com.amoa.RentalHub.model.User;
import com.amoa.RentalHub.repository.PropertyRepository;

@Service
public class PropertyService {

  @Autowired
  private PropertyRepository propertyRepository;

  public Property getPropertyById(Long id) {
      return propertyRepository.findById(id).orElse(null);
  }
  
  public Property saveProperty(Property property) {
    return propertyRepository.save(property);
  }
  
  public Property updateProperty(Property property) {
	  
	  property.setDescription(property.getDescription());
	  property.setPostalCode(property.getPostalCode());
	  property.setRentPrice(property.getRentPrice());
	  property.setStatus(property.getStatus());
	  return propertyRepository.save(property);
	}
  
  public void deleteProperty(Long propertyId) {
	  propertyRepository.deleteById(propertyId);
	}

  public List<Property> findAllPropertiesByOwner(User owner) {
    return propertyRepository.findAllByOwner(owner);
  }

  public List<Property> findAvailableProperties(LocalDate date) {
    return propertyRepository.findByAvailabilityDateBefore(date);
  }

  // Additional methods for property management functionalities (e.g., update, delete)
}
