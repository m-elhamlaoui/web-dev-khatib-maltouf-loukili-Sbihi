package com.amoa.RentalHub.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

  private final PropertyService propertyService;
  private final UserService userService;
  
  @Autowired
  public PropertyCtrl(PropertyService propertyService, UserService userService) {
      this.propertyService = propertyService;
      this.userService = userService;
  }

  @PostMapping("/add-property")
  public ResponseEntity<Property> saveProperty(@RequestBody Property property,
          @RequestParam(value = "imageUrls", required = false) List<String> imageUrls,
          @RequestParam(value = "featureIds", required = false) List<Long> featureIds) {

	  Property savedProperty = propertyService.saveProperty(property, imageUrls, featureIds);

      return new ResponseEntity<>(savedProperty, HttpStatus.CREATED);
	}
  
  @PutMapping("/update/{propertyId}")
  public ResponseEntity<Property> updateProperty(@PathVariable Long propertyId,
                                                  @RequestBody Property updatedProperty,
                                                  @RequestParam(value = "imageUrls", required = false) List<String> imageUrls,
                                                  @RequestParam(value = "featureIds", required = false) List<Long> featureIds) {

    Property updated = propertyService.updateProperty(propertyId, updatedProperty, imageUrls, featureIds);
    if (updated != null) {
        return ResponseEntity.ok(updated);
    } else {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }  
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
  
  @GetMapping("/{propertyId}")
  public ResponseEntity<Property> getPropertyById(@PathVariable Long propertyId) {
	  Property property = propertyService.getPropertyById(propertyId);
	  return ResponseEntity.ok(property);
  }
  
  @GetMapping("/all-properties")
  public ResponseEntity<List<Property>> getAllProperties() {
    List<Property> availableProperties = propertyService.getAllProperties();
    return ResponseEntity.ok(availableProperties);
  }

  // Additional methods for property management functionalities (e.g., update, search)
}












