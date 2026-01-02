import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Card from '../components/Card';

/**
 * Flight Details Page
 * Detailed information about a specific flight
 */
const FlightDetails = () => {
  const navigate = useNavigate();
  const [selectedSeat, setSelectedSeat] = useState(null);

  // Mock flight data
  const flight = {
    id: 1,
    airline: 'Sky Airways',
    flightNumber: 'SA-101',
    from: 'New York (JFK)',
    to: 'Los Angeles (LAX)',
    departTime: '08:00 AM',
    departDate: '2024-02-15',
    arriveTime: '11:30 AM',
    arriveDate: '2024-02-15',
    duration: '5h 30m',
    price: 250,
    stops: 0,
    aircraft: 'Boeing 737-800',
    capacity: 180,
    availableSeats: 45,
    amenities: ['WiFi', 'In-flight Meals', 'Entertainment System', 'USB Charging'],
    baggage: '2 pieces (23kg each)',
  };

  const seats = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    row: Math.floor(i / 6) + 1,
    column: String.fromCharCode(65 + (i % 6)),
    available: Math.random() > 0.3,
  }));

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6"
        >
          <FaArrowLeft /> Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Flight Header */}
            <Card>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-800">{flight.airline}</h1>
                  <p className="text-gray-600">{flight.flightNumber}</p>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-bold text-blue-600">${flight.price}</p>
                  <p className="text-gray-600">per person</p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="grid grid-cols-3 gap-8 items-center">
                  <div>
                    <p className="text-4xl font-bold text-gray-800">{flight.departTime}</p>
                    <p className="text-gray-600">{flight.departDate}</p>
                    <p className="font-semibold text-gray-800">{flight.from}</p>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">{flight.duration}</p>
                    <div className="border-t-2 border-gray-400 relative">
                      <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 bg-blue-600 rounded-full w-4 h-4"></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      {flight.stops === 0 ? 'Non-stop' : `${flight.stops} stop(s)`}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-4xl font-bold text-gray-800">{flight.arriveTime}</p>
                    <p className="text-gray-600">{flight.arriveDate}</p>
                    <p className="font-semibold text-gray-800">{flight.to}</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Flight Details */}
            <Card>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Flight Details</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-gray-600 text-sm">Aircraft</p>
                  <p className="font-semibold text-gray-800">{flight.aircraft}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Total Capacity</p>
                  <p className="font-semibold text-gray-800">{flight.capacity} seats</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Available Seats</p>
                  <p className="font-semibold text-green-600">{flight.availableSeats} seats</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Baggage Allowance</p>
                  <p className="font-semibold text-gray-800">{flight.baggage}</p>
                </div>
              </div>
            </Card>

            {/* Amenities */}
            <Card>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Amenities</h2>
              <div className="grid grid-cols-2 gap-4">
                {flight.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Seat Selection */}
            <Card>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Select Your Seat</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid grid-cols-6 gap-2 mb-4">
                  {seats.map((seat) => (
                    <button
                      key={seat.id}
                      onClick={() => seat.available && setSelectedSeat(seat)}
                      disabled={!seat.available}
                      className={`
                        aspect-square rounded font-bold text-sm
                        transition-all duration-200
                        ${!seat.available ? 'bg-gray-300 cursor-not-allowed' : ''}
                        ${selectedSeat?.id === seat.id ? 'bg-blue-600 text-white' : 'bg-white border-2 border-gray-300 hover:border-blue-500'}
                      `}
                    >
                      {seat.column}{seat.row}
                    </button>
                  ))}
                </div>

                {selectedSeat && (
                  <p className="text-center text-blue-600 font-semibold">
                    Selected: Seat {selectedSeat.column}{selectedSeat.row}
                  </p>
                )}

                <div className="mt-4 flex justify-center space-x-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-white border-2 border-gray-300 rounded"></div>
                    <span>Available</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gray-300 rounded"></div>
                    <span>Occupied</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-600 rounded"></div>
                    <span>Selected</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar - Booking Summary */}
          <div>
            <Card className="sticky top-24">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Booking Summary</h3>

              <div className="space-y-4 pb-4 border-b border-gray-200">
                <div className="flex justify-between">
                  <span className="text-gray-600">Passengers</span>
                  <span className="font-semibold text-gray-800">1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Base Price</span>
                  <span className="font-semibold text-gray-800">${flight.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Taxes & Fees</span>
                  <span className="font-semibold text-gray-800">${Math.round(flight.price * 0.1)}</span>
                </div>
              </div>

              <div className="my-4 flex justify-between items-center">
                <span className="text-lg font-bold text-gray-800">Total</span>
                <span className="text-2xl font-bold text-blue-600">
                  ${Math.round(flight.price * 1.1)}
                </span>
              </div>

              <Button fullWidth variant="primary" size="lg">
                Continue to Booking
              </Button>

              <Button fullWidth variant="outline" size="md" className="mt-2">
                Save for Later
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FlightDetails;
