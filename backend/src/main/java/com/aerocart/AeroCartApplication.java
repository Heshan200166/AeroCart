package com.aerocart;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

/**
 * AeroCart Application - Main entry point
 * 
 * Aviation Booking Management System
 * This application handles flight bookings, user management, payments, and notifications
 */
@SpringBootApplication
@EnableScheduling
public class AeroCartApplication {

    public static void main(String[] args) {
        SpringApplication.run(AeroCartApplication.class, args);
    }

}
