package com.amoa.RentalHub.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.amoa.RentalHub.model.Feature;
import com.amoa.RentalHub.service.FeatureService;

@RestController
@RequestMapping("/api/features")
public class FeatureCtrl {

    @Autowired
    private FeatureService featureService;

    @PostMapping("/add")
    public ResponseEntity<Feature> addFeature(@RequestBody Feature feature) {
        Feature savedFeature = featureService.saveFeature(feature);
        return new ResponseEntity<>(savedFeature, HttpStatus.CREATED);
    }
    
    @DeleteMapping("/delete/{featureId}")
    public ResponseEntity<?> deleteProperty(@PathVariable Long featureId) {
  	try {
  		  featureService.deleteFeature(featureId);
  		  return ResponseEntity.noContent().build();
  		} catch (Exception e) {
  		  // Log the error and return an appropriate error response
  		  return ResponseEntity.badRequest().body("Error deleting property: " + e.getMessage());
  		}
    }
    
    @GetMapping("/all-features")
    public ResponseEntity<List<Feature>> getAllfeatures() {
      List<Feature> availableFeatures = featureService.getAllFeatures();
      return ResponseEntity.ok(availableFeatures);
    }
}