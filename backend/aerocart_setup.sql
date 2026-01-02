-- =====================================================
-- AeroCart Aviation Booking System - Database Setup
-- =====================================================

-- Create Database
CREATE DATABASE IF NOT EXISTS aerocart;
USE aerocart;

-- =====================================================
-- User Table
-- =====================================================
CREATE TABLE IF NOT EXISTS users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(20),
    password VARCHAR(255) NOT NULL,
    address VARCHAR(500),
    city VARCHAR(100),
    state VARCHAR(100),
    country VARCHAR(100),
    postal_code VARCHAR(20),
    date_of_birth DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_created_at (created_at)
);

-- =====================================================
-- Flight Table
-- =====================================================
CREATE TABLE IF NOT EXISTS flights (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    flight_number VARCHAR(50) NOT NULL UNIQUE,
    airline VARCHAR(100) NOT NULL,
    departure_airport VARCHAR(10) NOT NULL,
    arrival_airport VARCHAR(10) NOT NULL,
    departure_date DATE NOT NULL,
    departure_time TIME NOT NULL,
    arrival_time TIME NOT NULL,
    aircraft_type VARCHAR(100),
    total_seats INT DEFAULT 180,
    available_seats INT DEFAULT 180,
    price DECIMAL(10, 2) NOT NULL,
    duration_minutes INT,
    status VARCHAR(50) DEFAULT 'SCHEDULED',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_departure_date (departure_date),
    INDEX idx_airports (departure_airport, arrival_airport),
    INDEX idx_status (status)
);

-- =====================================================
-- Booking Table
-- =====================================================
CREATE TABLE IF NOT EXISTS bookings (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    booking_reference VARCHAR(20) NOT NULL UNIQUE,
    user_id BIGINT NOT NULL,
    flight_id BIGINT NOT NULL,
    number_of_passengers INT NOT NULL,
    booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    departure_date DATE NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    status VARCHAR(50) DEFAULT 'CONFIRMED',
    special_requests TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (flight_id) REFERENCES flights(id) ON DELETE RESTRICT,
    INDEX idx_user_id (user_id),
    INDEX idx_flight_id (flight_id),
    INDEX idx_booking_reference (booking_reference),
    INDEX idx_status (status)
);

-- =====================================================
-- Passenger Table
-- =====================================================
CREATE TABLE IF NOT EXISTS passengers (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    booking_id BIGINT NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    date_of_birth DATE,
    passport_number VARCHAR(50),
    nationality VARCHAR(100),
    seat_number VARCHAR(10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (booking_id) REFERENCES bookings(id) ON DELETE CASCADE,
    INDEX idx_booking_id (booking_id)
);

-- =====================================================
-- Payment Table
-- =====================================================
CREATE TABLE IF NOT EXISTS payments (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    booking_id BIGINT NOT NULL UNIQUE,
    amount DECIMAL(10, 2) NOT NULL,
    payment_method VARCHAR(50) NOT NULL,
    transaction_id VARCHAR(100) UNIQUE,
    status VARCHAR(50) DEFAULT 'PENDING',
    payment_date TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (booking_id) REFERENCES bookings(id) ON DELETE CASCADE,
    INDEX idx_status (status),
    INDEX idx_transaction_id (transaction_id)
);

-- =====================================================
-- Sample Data - Users
-- =====================================================
INSERT INTO users (name, email, phone, password, address, city, state, country, postal_code, date_of_birth) VALUES
('John Doe', 'john@example.com', '+1-555-0123', 'hashed_password_123', '123 Main St', 'New York', 'NY', 'USA', '10001', '1990-05-15'),
('Jane Smith', 'jane@example.com', '+1-555-0456', 'hashed_password_456', '456 Oak Ave', 'Los Angeles', 'CA', 'USA', '90001', '1992-08-22'),
('Bob Johnson', 'bob@example.com', '+1-555-0789', 'hashed_password_789', '789 Pine Rd', 'Chicago', 'IL', 'USA', '60601', '1988-03-10');

-- =====================================================
-- Sample Data - Flights
-- =====================================================
INSERT INTO flights (flight_number, airline, departure_airport, arrival_airport, departure_date, departure_time, arrival_time, aircraft_type, total_seats, available_seats, price, duration_minutes, status) VALUES
('SA-101', 'Sky Airways', 'JFK', 'LAX', '2024-02-15', '08:00:00', '11:30:00', 'Boeing 737', 180, 150, 275.00, 330, 'SCHEDULED'),
('AE-202', 'Air Express', 'LAX', 'JFK', '2024-03-20', '14:00:00', '22:30:00', 'Airbus A320', 180, 120, 290.00, 330, 'SCHEDULED'),
('UA-303', 'United Airways', 'ORD', 'MIA', '2024-04-10', '10:30:00', '14:15:00', 'Boeing 787', 242, 180, 320.00, 225, 'SCHEDULED'),
('DL-404', 'Delta Airlines', 'ATL', 'SFO', '2024-04-15', '06:00:00', '09:45:00', 'Airbus A350', 325, 250, 380.00, 285, 'SCHEDULED'),
('SW-505', 'Southwest Air', 'DEN', 'BOS', '2024-05-01', '09:00:00', '17:30:00', 'Boeing 737', 175, 160, 250.00, 510, 'SCHEDULED');

-- =====================================================
-- Sample Data - Bookings
-- =====================================================
INSERT INTO bookings (booking_reference, user_id, flight_id, number_of_passengers, departure_date, total_price, status) VALUES
('BK001', 1, 1, 1, '2024-02-15', 275.00, 'CONFIRMED'),
('BK002', 2, 2, 2, '2024-03-20', 580.00, 'CONFIRMED'),
('BK003', 3, 3, 1, '2024-04-10', 320.00, 'PENDING');

-- =====================================================
-- Sample Data - Passengers
-- =====================================================
INSERT INTO passengers (booking_id, first_name, last_name, date_of_birth, passport_number, nationality, seat_number) VALUES
(1, 'John', 'Doe', '1990-05-15', 'US123456789', 'American', '12A'),
(2, 'Jane', 'Smith', '1992-08-22', 'US987654321', 'American', '15B'),
(2, 'Michael', 'Smith', '1995-03-18', 'US555666777', 'American', '15C'),
(3, 'Bob', 'Johnson', '1988-03-10', 'US444333222', 'American', '8A');

-- =====================================================
-- Sample Data - Payments
-- =====================================================
INSERT INTO payments (booking_id, amount, payment_method, transaction_id, status, payment_date) VALUES
(1, 275.00, 'CREDIT_CARD', 'TXN001', 'COMPLETED', NOW()),
(2, 580.00, 'CREDIT_CARD', 'TXN002', 'COMPLETED', NOW()),
(3, 320.00, 'CREDIT_CARD', 'TXN003', 'PENDING', NULL);

-- =====================================================
-- Verify Setup
-- =====================================================
SELECT 'Users Count:' as Info, COUNT(*) as Count FROM users
UNION ALL
SELECT 'Flights Count:', COUNT(*) FROM flights
UNION ALL
SELECT 'Bookings Count:', COUNT(*) FROM bookings
UNION ALL
SELECT 'Payments Count:', COUNT(*) FROM payments;
