package com.amoa.RentalHub.model;


import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long imageId;


    private String imageUrl;
    
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "property_id") // Name of the foreign key column in the Image table
    private Property property;
    
    public Image() {
    	
    }

	public Image(Long imageId, Property property, String imageUrl) {
		super();
		this.imageId = imageId;
		this.imageUrl = imageUrl;
	}
	

	public Long getImageId() {
		return imageId;
	}

	public void setImageId(Long imageId) {
		this.imageId = imageId;
	}
	


	public Property getProperty() {
		return property;
	}

	public void setProperty(Property property) {
		this.property = property;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
    
    
    
}
