package com.amoa.RentalHub.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.amoa.RentalHub.model.Feature;
import com.amoa.RentalHub.repository.FeatureRepository;

@Service
public class FeatureService {

    @Autowired
    private FeatureRepository featureRepository;

    public Feature saveFeature(Feature feature) {
        return featureRepository.save(feature);
    }
    
    public void deleteFeature(Long featureId) {
  	  featureRepository.deleteById(featureId);
  	}
    
    public List<Feature> getAllFeatures() {
        return featureRepository.findAll();
    }

}