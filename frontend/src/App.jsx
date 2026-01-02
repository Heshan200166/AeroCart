import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Suspense, lazy } from 'react';

// Pages - Lazy load them to catch errors
const Landing = lazy(() => import('./pages/Landing'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const FlightSearch = lazy(() => import('./pages/FlightSearch'));
const FlightDetails = lazy(() => import('./pages/FlightDetails'));
const BookingForm = lazy(() => import('./pages/BookingForm'));
const Bookings = lazy(() => import('./pages/Bookings'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Profile = lazy(() => import('./pages/Profile'));
const NotFound = lazy(() => import('./pages/NotFound'));
const ServerError = lazy(() => import('./pages/ServerError'));

// Loading fallback component
const LoadingFallback = () => (
  <div style={{ padding: '40px', textAlign: 'center' }}>
    <h2>Loading...</h2>
  </div>
);

/**
 * Main App Component
 * 
 * Routes and main structure for AeroCart Frontend
 */
function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Flight Routes */}
            <Route path="/flights" element={<FlightSearch />} />
            <Route path="/flights/:id" element={<FlightDetails />} />

            {/* Booking Routes */}
            <Route path="/booking/form" element={<BookingForm />} />
            <Route path="/bookings" element={<Bookings />} />

            {/* User Routes */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />

            {/* Error Routes */}
            <Route path="/error" element={<ServerError />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
