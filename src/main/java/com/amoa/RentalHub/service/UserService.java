package com.amoa.RentalHub.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.amoa.RentalHub.model.User;
import com.amoa.RentalHub.repository.UserRepository;

@Service
public class UserService {

  @Autowired
  private UserRepository userRepository;
  @Autowired
  private PasswordEncoder passwordEncoder;

  public User saveUser(User user) {
	    user.setPassword(passwordEncoder.encode(user.getPassword())); // Hash password before saving
	    return userRepository.save(user);
  }

  public Optional<User> getUserByEmail(String email) {
    return userRepository.findByEmail(email);
  }

  public User getUserById(Long userId) {
	  Optional<User> userOptional = userRepository.findById(userId);
	  return userOptional.orElse(null);
	  }
  // Additional methods for user management functionalities
}
