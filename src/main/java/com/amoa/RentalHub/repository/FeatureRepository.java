package com.amoa.RentalHub.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.amoa.RentalHub.model.Feature;

public interface FeatureRepository extends JpaRepository<Feature, Long> {
}