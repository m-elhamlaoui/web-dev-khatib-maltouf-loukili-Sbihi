package com.amoa.RentalHub.model;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class Property {
	private Long propertyId;
    private int ownerId;
    private String title;
    private String description;
    private String address;
    private String city;
    private String state;
    private BigDecimal price;
    private boolean isAvailable = false;
    private List<BookedProperty> bookings;
    
    public void Room() {
    	this.bookings = new ArrayList<>();
    }
}
