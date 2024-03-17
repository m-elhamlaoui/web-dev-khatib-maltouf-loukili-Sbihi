package com.amoa.RentalHub.model;

import java.time.LocalDate;

public class BookedProperty {

	private Long bookingId;
	private LocalDate checkInDate;
	private LocalDate checkOutDate;
	private String guestFullName;
	private String guestEmail;
	private int NumOfAdults;
	private int NumOfChildren;
	private int totalNumOfGuest;
	private String bookingConfirmationCode;
	private Property property;
	
	public void calculateTotalNumOfGuest() {
		this.totalNumOfGuest = this.NumOfAdults + this.NumOfChildren;
	}
	
	public void setNumOfAdults(int numOfAdults) {
		NumOfAdults = numOfAdults;
		calculateTotalNumOfGuest();
	}

	public void setNumOfChildren(int numOfChildren) {
		NumOfChildren = numOfChildren;
		calculateTotalNumOfGuest();
	}

	public BookedProperty(String bookingConfirmationCode) {
		this.bookingConfirmationCode = bookingConfirmationCode;
	}

	public void setBookingConfirmationCode(String bookingConfirmationCode) {
		this.bookingConfirmationCode = bookingConfirmationCode;
	}	
	
	
	
}
