package com.amoa.RentalHub.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.amoa.RentalHub.model.Property;
import com.amoa.RentalHub.model.User;
import com.amoa.RentalHub.service.PropertyService;


@RestController
@RequestMapping("/api/properties")
public class PropertyCtrl {

  @Autowired
  private PropertyService propertyService;

  @PostMapping("/add-property")
  public ResponseEntity<Property> saveProperty(@RequestBody Property property) {
    Property savedProperty = propertyService.saveProperty(property);
    return ResponseEntity.ok(savedProperty);
  }
  
  @PutMapping("/update/{propertyId}")
  public ResponseEntity<Property> updateProperty(@PathVariable Long propertyId, @RequestBody Property updatedProperty) {
    Property existingProperty = propertyService.getPropertyById(propertyId);
    existingProperty.setDescription(updatedProperty.getDescription());
	existingProperty.setPostalCode(updatedProperty.getPostalCode());
	existingProperty.setRentPrice(updatedProperty.getRentPrice());
	existingProperty.setStatus(updatedProperty.getStatus());
    Property updated = propertyService.saveProperty(existingProperty);
    return ResponseEntity.ok(updated);
  }
  
  @DeleteMapping("/delete/{propertyId}")
  public ResponseEntity<?> deleteProperty(@PathVariable Long propertyId) {
    propertyService.deleteProperty(propertyId);
    return ResponseEntity.noContent().build();
  }

  @GetMapping("/owner/{ownerId}")
  public ResponseEntity<List<Property>> getPropertiesByOwner(@PathVariable Long ownerId) {
    User owner = new User(); // Replace with logic to get user by id
    List<Property> properties = propertyService.findAllPropertiesByOwner(owner);
    return ResponseEntity.ok(properties);
  }

  @GetMapping("/available")
  public ResponseEntity<List<Property>> getAvailableProperties(
      @RequestParam(required = false) LocalDate date) {
    LocalDate availabilityDate = LocalDate.now(); // Replace with logic for desired date
    List<Property> availableProperties = propertyService.findAvailableProperties(availabilityDate);
    return ResponseEntity.ok(availableProperties);
  }

  // Additional methods for property management functionalities (e.g., update, search)
}












