package com.amoa.RentalHub.model;

import java.math.BigDecimal;
import java.sql.Blob;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.DecimalMin;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.apache.commons.lang3.RandomStringUtils; 

@Entity

public class Property {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long propertyId;
	@ManyToOne
	private User owner;
	private String address;
	private String city;
	private String postalCode;
	private String country;
	
	public enum Status {
	    AVAILABLE,
	    OCCUPIED
	  }
	
	@Enumerated(EnumType.STRING)
	private Status status;
	
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
	  
    
    
    public Property() {
    }
    
    

    public Property(Long propertyId, User owner, String city, String country, PropertyType propertyType,
			@DecimalMin("0.00") BigDecimal rentPrice) {
		super();
		this.propertyId = propertyId;
		this.owner = owner;
		this.city = city;
		this.country = country;
		this.propertyType = propertyType;
		this.rentPrice = rentPrice;
	}



	public Property(User owner, String address, String city, Status status, String postalCode, String country,
                     PropertyType propertyType, String description, Integer bedrooms,
                     BigDecimal rentPrice, LocalDate availabilityDate) {
		super();
      this.owner = owner;
      this.address = address;
      this.city = city;
      this.status = status;
      this.postalCode = postalCode;
      this.country = country;
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



	public String getAddress() {
		return address;
	}



	public void setAddress(String address) {
		this.address = address;
	}



	public String getCity() {
		return city;
	}



	public void setCity(String city) {
		this.city = city;
	}



	public String getPostalCode() {
		return postalCode;
	}



	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}



	public String getCountry() {
		return country;
	}



	public void setCountry(String country) {
		this.country = country;
	}



	public Status getStatus() {
		return status;
	}



	public void setStatus(Status status) {
		this.status = status;
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



















