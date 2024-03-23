package com.example.SpringAuth.service;

import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService {
	
	UserDetailsService userDetailsService();

}
