package com.amoa.RentalHub.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.amoa.RentalHub.model.Feature;
import com.amoa.RentalHub.model.Image;
import com.amoa.RentalHub.model.Property;
import com.amoa.RentalHub.model.User;
import com.amoa.RentalHub.repository.FeatureRepository;
import com.amoa.RentalHub.repository.ImageRepository;
import com.amoa.RentalHub.repository.PropertyRepository;

import jakarta.transaction.Transactional;

@Service
public class PropertyService {

  @Autowired
  private PropertyRepository propertyRepository;
  
  @Autowired
  private ImageRepository imageRepository;

  @Autowired
  private FeatureRepository featureRepository;

  public Property getPropertyById(Long id) {
      Optional<Property> propertyOptional = propertyRepository.findById(id);
      return propertyRepository.findById(id).orElse(null);
  }
  
  @Transactional
  public Property saveProperty(Property property, List<String> imageUrls, List<Long> featureIds) {
	  if (imageUrls == null) {
	        // Handle null parameters appropriately, throw an exception or return null
		imageUrls = new ArrayList<>();  
	  }
	  if (featureIds == null) {
	        // Handle null parameters appropriately, throw an exception or return null
		featureIds = new ArrayList<>();  
	  }
	  property.setImages(new ArrayList<>());
	  Property savedProperty = propertyRepository.save(property);
	// Save images
      List<Image> images = new ArrayList<>();
	    for (String imageUrl : imageUrls) {
	      Image image = new Image();
	      image.setImageUrl(imageUrl);
	      image.setProperty(savedProperty); // Set property reference
	      imageRepository.save(image);
	      images.add(image);
	    }
        savedProperty.setImages(images);

	    
	 // Associate features
        List<Feature> features = new ArrayList<>();
	    for (Long featureId : featureIds) {
	    	Optional<Feature> featureOptional = featureRepository.findById(featureId);
            featureOptional.ifPresent(features::add);
	    }
        savedProperty.setFeatures(features);

	  return savedProperty;
  }
  
  public Property saveProperty(Property property) {
	  return propertyRepository.save(property);
  }
  
  public Property updateProperty(Property property) {
	  
	  property.setDescription(property.getDescription());
	  property.setRentPrice(property.getRentPrice());
	  return propertyRepository.save(property);
	}
  
  public void deleteProperty(Long propertyId) {
	  propertyRepository.deleteById(propertyId);
	}

  public List<Property> findAllPropertiesByOwner(User owner) {
    return propertyRepository.findAllByOwner(owner);
  }
  
  public List<Property> getAllProperties() {
      return propertyRepository.findAll();
  }

  public List<Property> findAvailableProperties(LocalDate date) {
    return propertyRepository.findByAvailabilityDateBefore(date);
  }

  // Additional methods for property management functionalities (e.g., update, delete)
}
