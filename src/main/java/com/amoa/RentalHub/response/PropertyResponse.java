package com.amoa.RentalHub.response;

import java.math.BigDecimal;
import java.util.List;

import org.apache.tomcat.util.codec.binary.Base64;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor

public class PropertyResponse {
	private Long propertyId;
    private int ownerId;
    private String title;
    private String type;
    private String description;
    private String address;
    private BigDecimal price;
    private boolean isAvailable;
    private String photo;
    private List<BookingResponse> bookings;
    
	public PropertyResponse(Long propertyId, String type, BigDecimal price) {
		this.propertyId = propertyId;
		this.type = type;
		this.price = price;
	}

	public PropertyResponse(Long propertyId, int ownerId, String title, String type, String description, String address,
			BigDecimal price, boolean isAvailable, byte[] photoBytes, List<BookingResponse> bookings) {
		this.propertyId = propertyId;
		this.ownerId = ownerId;
		this.title = title;
		this.type = type;
		this.description = description;
		this.address = address;
		this.price = price;
		this.isAvailable = isAvailable;
		this.photo = photo != null ? Base64.encodeBase64String(photoBytes) : null;
		this.bookings = bookings;
	} 
}












