import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaPlane, FaUser, FaSignOutAlt, FaCog } from 'react-icons/fa';
import './Navbar.css';

/**
 * Navbar Component
 * Main navigation bar for the application
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

  return (
    <nav className="bg-blue-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <FaPlane className="text-white text-2xl" />
            <span className="text-white font-bold text-xl hidden sm:inline">AeroCart</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-white hover:text-blue-200 transition">
              Home
            </Link>
            <Link to="/flights" className="text-white hover:text-blue-200 transition">
              Flights
            </Link>
            <Link to="/bookings" className="text-white hover:text-blue-200 transition">
              Bookings
            </Link>
            <Link to="/contact" className="text-white hover:text-blue-200 transition">
              Contact
            </Link>
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={toggleUserMenu}
                className="flex items-center space-x-2 text-white hover:text-blue-200 transition"
              >
                <FaUser />
                <span className="hidden sm:inline">Account</span>
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50 transition"
                  >
                    <FaUser className="inline mr-2" />
                    My Profile
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50 transition"
                  >
                    <FaCog className="inline mr-2" />
                    Settings
                  </Link>
                  <button className="w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-50 transition">
                    <FaSignOutAlt className="inline mr-2" />
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white text-2xl focus:outline-none"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-blue-700 py-4 space-y-2">
            <Link
              to="/"
              className="block px-4 py-2 text-white hover:bg-blue-600 rounded transition"
            >
              Home
            </Link>
            <Link
              to="/flights"
              className="block px-4 py-2 text-white hover:bg-blue-600 rounded transition"
            >
              Flights
            </Link>
            <Link
              to="/bookings"
              className="block px-4 py-2 text-white hover:bg-blue-600 rounded transition"
            >
              Bookings
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-2 text-white hover:bg-blue-600 rounded transition"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
