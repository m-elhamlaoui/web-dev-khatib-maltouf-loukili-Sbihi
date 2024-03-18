package com.amoa.RentalHub.response;

import java.time.LocalDate;

import com.amoa.RentalHub.model.Property;

import jakarta.persistence.Column;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookingResponse {
	private Long bookingId;
	
	private LocalDate checkInDate;
	
	private LocalDate checkOutDate;
	
	private String guestFullName;
	
	private String guestEmail;
	
	private int NumOfAdults;
	
	private int NumOfChildren;
	
	private int totalNumOfGuest;
	
	private String bookingConfirmationCode;
	
	private PropertyResponse property;

	public BookingResponse(Long bookingId, LocalDate checkInDate, LocalDate checkOutDate,
			String bookingConfirmationCode) {
		super();
		this.bookingId = bookingId;
		this.checkInDate = checkInDate;
		this.checkOutDate = checkOutDate;
		this.bookingConfirmationCode = bookingConfirmationCode;
	}
	
	

}














