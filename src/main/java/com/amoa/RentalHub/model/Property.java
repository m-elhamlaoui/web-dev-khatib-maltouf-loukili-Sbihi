package com.amoa.RentalHub.model;

import java.math.BigDecimal;
import java.sql.Blob;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.apache.commons.lang3.RandomStringUtils; 

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class Property {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long propertyId;
    private int ownerId;
    private String title;
    private String type;
    private String description;
    private String address;
    private BigDecimal price;
    private boolean isAvailable = false;
    
    @Lob
    private Blob photo;
    
    @OneToMany(mappedBy = "property", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<BookedProperty> bookings;
    
    public void Room() {
    	this.bookings = new ArrayList<>();
    }
    
    public void addBooking(BookedProperty booking) {
    	if(bookings == null) {
    		bookings = new ArrayList<>();
    	}
    	bookings.add(booking);
    	booking.setProperty(this);
    	isAvailable = true;
    	String bookingCode = RandomStringUtils.randomNumeric(10);
    	booking.setBookingConfirmationCode(bookingCode);
    }
}



















