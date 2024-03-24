package com.amoa.RentalHub.service;

import java.math.BigDecimal;
import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.amoa.RentalHub.model.Booking;
import com.amoa.RentalHub.model.Booking.BookingStatus;
import com.amoa.RentalHub.model.Property;
import com.amoa.RentalHub.model.User;
import com.amoa.RentalHub.repository.BookingRepository;

import jakarta.el.PropertyNotFoundException;

@Service
public class BookingService {

  @Autowired
  private BookingRepository bookingRepository;
  @Autowired
  private PropertyService propertyService; // Assuming a PropertyService exists

  public Booking createBooking(User user, Property property, LocalDate startDate, LocalDate endDate, BigDecimal totalPrice) throws PropertyNotFoundException {

    // Check availability (implement your logic here)

    Booking booking = new Booking();
    booking.setUser(user);
    booking.setProperty(property);
    booking.setStartDate(startDate);
    booking.setEndDate(endDate);
    booking.setTotalPrice(totalPrice);
    booking.setStatus(BookingStatus.PENDING); // Initial booking status
    Booking savedBooking = bookingRepository.save(booking);

    // Send confirmation emails or notifications (optional)

    return savedBooking;
  }
}

