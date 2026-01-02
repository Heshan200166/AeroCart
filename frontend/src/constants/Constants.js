/**
 * AeroCart Frontend - Constants
 * 
 * Application-wide constants
 */

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  FLIGHTS: '/flights',
  BOOKINGS: '/bookings',
  PROFILE: '/profile',
  ADMIN: '/admin',
};

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'authToken',
  USER_INFO: 'userInfo',
  PREFERENCES: 'preferences',
};

export const API_ENDPOINTS = {
  // Auth
  AUTH_LOGIN: '/auth/login',
  AUTH_REGISTER: '/auth/register',
  AUTH_LOGOUT: '/auth/logout',
  
  // Flights
  FLIGHTS_LIST: '/flights',
  FLIGHTS_SEARCH: '/flights/search',
  
  // Bookings
  BOOKINGS_LIST: '/bookings',
  BOOKINGS_CREATE: '/bookings',
  
  // Users
  USERS_PROFILE: '/users/profile',
  USERS_UPDATE: '/users/update',
};
