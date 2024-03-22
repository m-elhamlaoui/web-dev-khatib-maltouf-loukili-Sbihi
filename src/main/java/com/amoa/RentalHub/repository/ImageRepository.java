package com.amoa.RentalHub.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.amoa.RentalHub.model.Image;

public interface ImageRepository extends JpaRepository<Image, Long> {
}