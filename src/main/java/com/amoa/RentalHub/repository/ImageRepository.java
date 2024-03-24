package com.amoa.RentalHub.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.amoa.RentalHub.model.Image;

@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {
}