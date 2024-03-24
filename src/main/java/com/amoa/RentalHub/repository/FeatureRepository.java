package com.amoa.RentalHub.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.amoa.RentalHub.model.Feature;

@Repository
public interface FeatureRepository extends JpaRepository<Feature, Long> {
}