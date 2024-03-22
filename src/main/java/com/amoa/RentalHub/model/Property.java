package com.amoa.RentalHub.model;

import java.math.BigDecimal;
import java.time.LocalDate;
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
	@DecimalMin(value = "0.00")
	private BigDecimal rentPrice;
	private LocalDate availabilityDate;
	
	@OneToMany(mappedBy = "property", cascade = CascadeType.ALL)
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



	public Property(User owner,String title, String address, 
                     PropertyType propertyType, String description, Integer bedrooms,
                     BigDecimal rentPrice, LocalDate availabilityDate) {
		super();
      this.owner = owner;
      this.title = title;
      this.address = address;
      this.propertyType = propertyType;
      this.description = description;
      this.bedrooms = bedrooms;
      this.rentPrice = rentPrice;
      this.availabilityDate = availabilityDate;
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



	public LocalDate getAvailabilityDate() {
		return availabilityDate;
	}



	public void setAvailabilityDate(LocalDate availabilityDate) {
		this.availabilityDate = availabilityDate;
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
	
	



//	public void addBooking(BookedProperty booking) {
//    	if(bookings == null) {
//    		bookings = new ArrayList<>();
//    	}
//    	bookings.add(booking);
//    	booking.setProperty(this);
//    	isAvailable = true;
//    	String bookingCode = RandomStringUtils.randomNumeric(10);
//    	booking.setBookingConfirmationCode(bookingCode);
//    }
}



















