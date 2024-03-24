package com.amoa.RentalHub.controller;

import java.math.BigDecimal;
import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.amoa.RentalHub.model.Booking;
import com.amoa.RentalHub.model.Property;
import com.amoa.RentalHub.model.User;
import com.amoa.RentalHub.service.BookingService;
import com.amoa.RentalHub.service.PropertyService;
import com.amoa.RentalHub.service.UserService;

import jakarta.el.PropertyNotFoundException;

@RestController
@RequestMapping("/bookings")
public class BookingCtrl {

  private final BookingService bookingService;
  private final PropertyService propertyService;
  private final UserService userService;
  
  @Autowired
  public BookingCtrl(BookingService bookingService, UserService userService, PropertyService propertyService) {
      this.bookingService = bookingService;
      this.userService = userService;
      this.propertyService = propertyService;
  }


  @PostMapping("/{propertyId}/booking")
  public ResponseEntity<Booking> createBooking(@RequestParam Long userId, @PathVariable Long propertyId, 
		  @RequestParam LocalDate startDate, @RequestParam LocalDate endDate, @RequestParam BigDecimal totalPrice) throws PropertyNotFoundException {
      User user = userService.getUserById(userId);
      Property property = propertyService.getPropertyById(propertyId);
      Booking booking = bookingService.createBooking(user, property, startDate, endDate, totalPrice);
    return new ResponseEntity<>(booking, HttpStatus.CREATED);
  }
}















