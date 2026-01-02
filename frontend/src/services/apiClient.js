import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

// MOCK MODE - Set to true to use mock data instead of backend API
const USE_MOCK_DATA = true;

/**
 * Mock Data for Frontend Testing
 */
const mockData = {
  flights: [
    {
      id: 1,
      flightNumber: 'SA-101',
      airline: 'Sky Airways',
      from: 'NYC',
      to: 'LAX',
      departDate: '2024-02-15',
      departTime: '08:00 AM',
      arrivalTime: '11:30 AM',
      duration: '5h 30m',
      price: 275,
      seats: 50,
      aircraft: 'Boeing 737',
    },
    {
      id: 2,
      flightNumber: 'AE-202',
      airline: 'Air Express',
      from: 'LAX',
      to: 'NYC',
      departDate: '2024-03-20',
      departTime: '02:00 PM',
      arrivalTime: '10:30 PM',
      duration: '5h 30m',
      price: 290,
      seats: 40,
      aircraft: 'Airbus A320',
    },
  ],
  bookings: [
    {
      id: 'BK001',
      flightNumber: 'SA-101',
      airline: 'Sky Airways',
      from: 'NYC',
      to: 'LAX',
      departDate: '2024-02-15',
      departTime: '08:00 AM',
      status: 'confirmed',
      passengers: 1,
      totalPrice: 275,
      bookingDate: '2024-01-10',
    },
  ],
  user: {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1-555-0123',
    address: '123 Main St, New York, NY',
  },
};

/**
 * API Client Configuration
 * 
 * Axios instance with interceptors for handling requests and responses
 * When USE_MOCK_DATA is true, returns mock data instead of making API calls
 */
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add authentication token if available
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // In mock mode, return mock data on error
    if (USE_MOCK_DATA) {
      const url = error.config?.url || '';
      if (url.includes('/flights')) {
        return Promise.resolve({ data: mockData.flights, status: 200 });
      } else if (url.includes('/bookings')) {
        return Promise.resolve({ data: mockData.bookings, status: 200 });
      } else if (url.includes('/profile')) {
        return Promise.resolve({ data: mockData.user, status: 200 });
      }
    }
    
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default apiClient;
