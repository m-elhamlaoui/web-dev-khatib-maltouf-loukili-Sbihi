package com.amoa.RentalHub.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Feature {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long featureId;
  private String featureName;

  public Feature() {
	  
  }

	public Feature(Long id, String name) {
		super();
		this.featureId = id;
		this.featureName = name;
	}

	public Long getId() {
		return featureId;
	}

	public void setId(Long id) {
		this.featureId = id;
	}

	public String getName() {
		return featureName;
	}

	public void setName(String name) {
		this.featureName = name;
	}
	
	
  
  
}