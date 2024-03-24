package com.amoa.RentalHub.model;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;


import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.DecimalMin;


@Entity

public class Property {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long propertyId;
	@ManyToOne
	private User owner;
	private String title;
	private String address;
	
	
	public enum PropertyType {
	    APARTMENT,
	    HOUSE,
	    COMMERCIAL,
	    STUDIO
	  }

	@Enumerated(EnumType.STRING)
	private PropertyType propertyType;
	
	private String description;
	private Integer bedrooms;
	private Double latitude;
	private Double longitude;
	private Integer capacity;
	private Integer bathroom;
	@DecimalMin(value = "0.00")
	private BigDecimal rentPrice;
	
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "property_id", referencedColumnName = "propertyId")
	  private List<Image> images = new ArrayList<>();
	
	@ManyToMany
	  @JoinTable(name = "property_features",
	      joinColumns = @JoinColumn(name = "property_id"),
	      inverseJoinColumns = @JoinColumn(name = "feature_id"))
	  private List<Feature> features = new ArrayList<>();
	  
    
    
    public Property() {
    }
    
    

    public Property(Long propertyId, User owner, String title, PropertyType propertyType,
			@DecimalMin("0.00") BigDecimal rentPrice) {
		super();
		this.propertyId = propertyId;
		this.owner = owner;
		this.title = title;
		this.propertyType = propertyType;
		this.rentPrice = rentPrice;
	}





	public Property(Long propertyId, User owner, String title, String address, PropertyType propertyType,
			String description, Integer bedrooms, Double latitude, Double longitude, Integer capacity, Integer bathroom,
			@DecimalMin("0.00") BigDecimal rentPrice, List<Image> images, List<Feature> features) {
		super();
		this.propertyId = propertyId;
		this.owner = owner;
		this.title = title;
		this.address = address;
		this.propertyType = propertyType;
		this.description = description;
		this.bedrooms = bedrooms;
		this.latitude = latitude;
		this.longitude = longitude;
		this.capacity = capacity;
		this.bathroom = bathroom;
		this.rentPrice = rentPrice;
		this.images = images;
		this.features = features;
	}



	public Long getPropertyId() {
		return propertyId;
	}



	public void setPropertyId(Long propertyId) {
		this.propertyId = propertyId;
	}



	public User getOwner() {
		return owner;
	}



	public void setOwner(User owner) {
		this.owner = owner;
	}


	public String getTitle() {
		return title;
	}



	public void setTitle(String title) {
		this.title = title;
	}



	public String getAddress() {
		return address;
	}



	public void setAddress(String address) {
		this.address = address;
	}



	public PropertyType getPropertyType() {
		return propertyType;
	}



	public void setPropertyType(PropertyType propertyType) {
		this.propertyType = propertyType;
	}



	public String getDescription() {
		return description;
	}



	public void setDescription(String description) {
		this.description = description;
	}



	public Integer getBedrooms() {
		return bedrooms;
	}



	public void setBedrooms(Integer bedrooms) {
		this.bedrooms = bedrooms;
	}



	public BigDecimal getRentPrice() {
		return rentPrice;
	}



	public void setRentPrice(BigDecimal rentPrice) {
		this.rentPrice = rentPrice;
	}


	public List<Image> getImages() {
		return images;
	}



	public void setImages(List<Image> images) {
		this.images = images;
	}



	public List<Feature> getFeatures() {
		return features;
	}



	public void setFeatures(List<Feature> features) {
		this.features = features;
	}



	public Double getLatitude() {
		return latitude;
	}



	public void setLatitude(Double latitude) {
		this.latitude = latitude;
	}



	public Double getLongitude() {
		return longitude;
	}



	public void setLongitude(Double longitude) {
		this.longitude = longitude;
	}



	public Integer getCapacity() {
		return capacity;
	}



	public void setCapacity(Integer capacity) {
		this.capacity = capacity;
	}



	public Integer getBathroom() {
		return bathroom;
	}



	public void setBathroom(Integer bathroom) {
		this.bathroom = bathroom;
	}
	
	
}

















