import React, { useState } from 'react';
import { FaEye, FaDownload, FaMapPin, FaCalendar, FaPlane } from 'react-icons/fa';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Card from '../components/Card';

/**
 * Bookings List Page
 * Display all user bookings
 */
const Bookings = () => {
  const [bookings] = useState([
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
    {
      id: 'BK002',
      flightNumber: 'AE-202',
      airline: 'Air Express',
      from: 'LAX',
      to: 'NYC',
      departDate: '2024-03-20',
      departTime: '02:00 PM',
      status: 'confirmed',
      passengers: 2,
      totalPrice: 550,
      bookingDate: '2024-01-15',
    },
    {
      id: 'BK003',
      flightNumber: 'UA-303',
      airline: 'United Airways',
      from: 'ORD',
      to: 'MIA',
      departDate: '2024-04-10',
      departTime: '10:30 AM',
      status: 'pending',
      passengers: 1,
      totalPrice: 320,
      bookingDate: '2024-01-20',
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'pending':
        return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'cancelled':
        return 'bg-red-50 text-red-700 border-red-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">My Bookings</h1>
          <p className="text-gray-600">View and manage your flight bookings</p>
        </div>

        {/* Filters */}
        <div className="flex space-x-4 mb-8">
          {['All', 'Confirmed', 'Pending', 'Cancelled'].map((filter) => (
            <button
              key={filter}
              className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Bookings List */}
        <div className="space-y-4">
          {bookings.map((booking) => (
            <Card key={booking.id} hover className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                {/* Flight Info */}
                <div>
                  <p className="text-sm text-gray-600 mb-1">Flight</p>
                  <div>
                    <p className="font-semibold text-gray-800">{booking.airline}</p>
                    <p className="text-gray-600">{booking.flightNumber}</p>
                  </div>
                </div>

                {/* Route */}
                <div>
                  <p className="text-sm text-gray-600 mb-1">Route</p>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-gray-800">{booking.from}</span>
                    <FaPlane className="text-blue-600" />
                    <span className="font-bold text-gray-800">{booking.to}</span>
                  </div>
                </div>

                {/* Date and Time */}
                <div>
                  <p className="text-sm text-gray-600 mb-1">Departure</p>
                  <p className="font-semibold text-gray-800">{booking.departDate}</p>
                  <p className="text-gray-600">{booking.departTime}</p>
                </div>

                {/* Status and Price */}
                <div>
                  <p className="text-sm text-gray-600 mb-1">Status</p>
                  <span
                    className={`
                      inline-block px-3 py-1 rounded-full text-sm font-semibold
                      border ${getStatusColor(booking.status)}
                    `}
                  >
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex flex-col space-y-2">
                  <Button variant="outline" size="sm" fullWidth>
                    <FaEye className="inline mr-2" /> View
                  </Button>
                  <Button variant="secondary" size="sm" fullWidth>
                    <FaDownload className="inline mr-2" /> Ticket
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {bookings.length === 0 && (
          <Card className="text-center py-12">
            <div className="text-5xl mb-4">✈️</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">No Bookings Yet</h3>
            <p className="text-gray-600 mb-6">Start booking flights to see your reservations here</p>
            <Button variant="primary">Search Flights</Button>
          </Card>
        )}
      </div>
    </Layout>
  );
};

export default Bookings;
