package com.amoa.RentalHub.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.amoa.RentalHub.model.Booking;
import com.amoa.RentalHub.model.Feature;
import com.amoa.RentalHub.model.Image;
import com.amoa.RentalHub.model.Property;
import com.amoa.RentalHub.model.User;
import com.amoa.RentalHub.repository.BookingRepository;
import com.amoa.RentalHub.repository.FeatureRepository;
import com.amoa.RentalHub.repository.ImageRepository;
import com.amoa.RentalHub.repository.PropertyRepository;

import jakarta.transaction.Transactional;

@Service
public class PropertyService {

  private final PropertyRepository propertyRepository;
  private final ImageRepository imageRepository;
  private final FeatureRepository featureRepository;
  private final BookingRepository bookingRepository;
  
  @Autowired
  public PropertyService(PropertyRepository propertyRepository, ImageRepository imageRepository, FeatureRepository featureRepository, BookingRepository bookingRepository) {
      this.propertyRepository = propertyRepository;
      this.imageRepository = imageRepository;
      this.featureRepository = featureRepository;
      this.bookingRepository = bookingRepository;
  }

  public Property getPropertyById(Long id) {
      return propertyRepository.findById(id).orElse(null);
  }
  
  @Transactional
  public Property saveProperty(Property property, List<String> imageUrls, List<Long> featureIds) {
	    // Save property first
	    Property savedProperty = propertyRepository.save(property);

	    if(imageUrls == null) {
	    	imageUrls = new ArrayList<>();
	    }
	    // Save images
	    for (String imageUrl : imageUrls) {
	      Image image = new Image();
	      image.setImageUrl(imageUrl);
	      imageRepository.save(image);
	      savedProperty.getImages().add(image);
	    }


	    if (featureIds != null && !featureIds.isEmpty()) {
	        List<Feature> features = featureRepository.findAllById(featureIds);
	        savedProperty.setFeatures(features);
	    }

	    return propertyRepository.save(savedProperty);
	  }
  
  public Property saveProperty(Property property) {
	  return propertyRepository.save(property);
  }
  
  @Transactional
  public Property updateProperty(Long propertyId, Property updatedProperty, List<Long> imageIds, List<Long> featureIds) {
      Optional<Property> optionalProperty = propertyRepository.findById(propertyId);
      if (optionalProperty.isPresent()) {
          Property existingProperty = optionalProperty.get();

          // Update property details
          existingProperty.setTitle(updatedProperty.getTitle());
          existingProperty.setAddress(updatedProperty.getAddress());
          existingProperty.setDescription(updatedProperty.getDescription());
          existingProperty.setRentPrice(updatedProperty.getRentPrice());
          existingProperty.setAvailabilityDate(updatedProperty.getAvailabilityDate());

          // Update associated images
          if (imageIds != null && !imageIds.isEmpty()) {
              List<Image> images = imageRepository.findAllById(imageIds);
              existingProperty.setImages(images);
          }

          // Update associated features
          if (featureIds != null && !featureIds.isEmpty()) {
              List<Feature> features = featureRepository.findAllById(featureIds);
              existingProperty.setFeatures(features);
          }

          // Save the updated property to the database
          return propertyRepository.save(existingProperty);
      } else {
          return null;
      }
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
