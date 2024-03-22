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
import com.amoa.RentalHub.service.UserService;


@RestController
@RequestMapping("/api/properties")
public class PropertyCtrl {

  @Autowired
  private PropertyService propertyService;
  
  @Autowired
  private UserService userService;

  @PostMapping("/add-property")
  public ResponseEntity<Property> saveProperty(@RequestBody Property property,
                                               @RequestParam(value = "imageUrls", required = false) List<String> imageUrls,
                                               @RequestParam(value = "featureIds", required = false) List<Long> featureIds) {

    Property savedProperty = propertyService.saveProperty(property, imageUrls, featureIds);
    return ResponseEntity.ok(savedProperty);
  }
  
  @PutMapping("/update/{propertyId}")
  public ResponseEntity<Property> updateProperty(@PathVariable Long propertyId,
                                                  @RequestBody Property updatedProperty,
                                                  @RequestParam(value = "imageUrls", required = false) List<String> imageUrls,
                                                  @RequestParam(value = "featureIds", required = false) List<Long> featureIds) {

    Property existingProperty = propertyService.getPropertyById(propertyId);
    existingProperty.setDescription(updatedProperty.getDescription());
    existingProperty.setRentPrice(updatedProperty.getRentPrice());
    existingProperty.setImages(updatedProperty.getImages()); // Update images
    existingProperty.setFeatures(updatedProperty.getFeatures()); // Update features

    Property updated = propertyService.saveProperty(existingProperty);
    return ResponseEntity.ok(updated);
  }
  
  @DeleteMapping("/delete/{propertyId}")
  public ResponseEntity<?> deleteProperty(@PathVariable Long propertyId) {
	try {
		  propertyService.deleteProperty(propertyId);
		  return ResponseEntity.noContent().build();
		} catch (Exception e) {
		  // Log the error and return an appropriate error response
		  return ResponseEntity.badRequest().body("Error deleting property: " + e.getMessage());
		}
  }

  @GetMapping("/owner/{ownerId}")
  public ResponseEntity<List<Property>> getPropertiesByOwner(@PathVariable Long ownerId) {
	  User owner = userService.getUserById(ownerId);  // Assuming a userService for fetching users
	  if (owner == null) {
	    return ResponseEntity.notFound().build();
	  }
	  List<Property> properties = propertyService.findAllPropertiesByOwner(owner);
	  return ResponseEntity.ok(properties);
  }
  
  @GetMapping("/all-properties")
  public ResponseEntity<List<Property>> getAllProperties() {
    List<Property> availableProperties = propertyService.getAllProperties();
    return ResponseEntity.ok(availableProperties);
  }

  @GetMapping("/available-properties")
  public ResponseEntity<List<Property>> getAvailableProperties(
      @RequestParam(required = false) LocalDate date) {
	  LocalDate availabilityDate = date != null ? date : LocalDate.now();  // Use provided date or today
	  List<Property> availableProperties = propertyService.findAvailableProperties(availabilityDate);
	  return ResponseEntity.ok(availableProperties);
  }

  // Additional methods for property management functionalities (e.g., update, search)
}












