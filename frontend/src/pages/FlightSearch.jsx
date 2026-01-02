import React, { useState } from 'react';
import { FaSearch, FaCalendar, FaUsers, FaPlane } from 'react-icons/fa';
import Layout from '../components/Layout';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';
import Card from '../components/Card';

/**
 * Flight Search Page
 * Search and filter flights
 */
const FlightSearch = () => {
  const [filters, setFilters] = useState({
    from: '',
    to: '',
    departDate: '',
    returnDate: '',
    passengers: '1',
    tripType: 'round-trip',
  });

  const [flights, setFlights] = useState([
    {
      id: 1,
      airline: 'Sky Airways',
      flightNumber: 'SA-101',
      from: 'NYC',
      to: 'LAX',
      departTime: '08:00 AM',
      arriveTime: '11:30 AM',
      duration: '5h 30m',
      price: 250,
      stops: 0,
      rating: 4.5,
    },
    {
      id: 2,
      airline: 'Air Express',
      flightNumber: 'AE-202',
      from: 'NYC',
      to: 'LAX',
      departTime: '10:00 AM',
      arriveTime: '01:30 PM',
      duration: '5h 30m',
      price: 280,
      stops: 1,
      rating: 4.2,
    },
  ]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching flights with filters:', filters);
    // API call will be implemented later
  };

  const airports = [
    { value: 'NYC', label: 'New York (NYC)' },
    { value: 'LAX', label: 'Los Angeles (LAX)' },
    { value: 'ORD', label: 'Chicago (ORD)' },
    { value: 'DFW', label: 'Dallas (DFW)' },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Search Section */}
        <Card className="mb-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
          <h1 className="text-3xl font-bold mb-8">Search Flights</h1>

          <form onSubmit={handleSearch} className="space-y-6">
            {/* Trip Type */}
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="tripType"
                  value="round-trip"
                  checked={filters.tripType === 'round-trip'}
                  onChange={handleFilterChange}
                />
                <span>Round Trip</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="tripType"
                  value="one-way"
                  checked={filters.tripType === 'one-way'}
                  onChange={handleFilterChange}
                />
                <span>One Way</span>
              </label>
            </div>

            {/* Search Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <Select
                label="From"
                name="from"
                value={filters.from}
                onChange={handleFilterChange}
                options={airports}
                placeholder="Departure city"
              />

              <Select
                label="To"
                name="to"
                value={filters.to}
                onChange={handleFilterChange}
                options={airports}
                placeholder="Arrival city"
              />

              <Input
                label="Depart Date"
                type="date"
                name="departDate"
                value={filters.departDate}
                onChange={handleFilterChange}
              />

              {filters.tripType === 'round-trip' && (
                <Input
                  label="Return Date"
                  type="date"
                  name="returnDate"
                  value={filters.returnDate}
                  onChange={handleFilterChange}
                />
              )}

              <Select
                label="Passengers"
                name="passengers"
                value={filters.passengers}
                onChange={handleFilterChange}
                options={[
                  { value: '1', label: '1 Passenger' },
                  { value: '2', label: '2 Passengers' },
                  { value: '3', label: '3 Passengers' },
                  { value: '4', label: '4 Passengers' },
                  { value: '5', label: '5+ Passengers' },
                ]}
              />
            </div>

            <Button type="submit" fullWidth variant="secondary" size="lg">
              <FaSearch className="inline mr-2" /> Search Flights
            </Button>
          </form>
        </Card>

        {/* Results Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Available Flights ({flights.length})
          </h2>

          <div className="space-y-4">
            {flights.map((flight) => (
              <Card key={flight.id} hover className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  {/* Flight Info */}
                  <div>
                    <p className="text-sm text-gray-600">{flight.airline}</p>
                    <p className="font-semibold text-gray-800">{flight.flightNumber}</p>
                  </div>

                  {/* Route and Time */}
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-800">{flight.from}</p>
                      <p className="text-sm text-gray-600">{flight.departTime}</p>
                    </div>
                    <FaPlane className="text-blue-600 text-lg" />
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-800">{flight.to}</p>
                      <p className="text-sm text-gray-600">{flight.arriveTime}</p>
                    </div>
                  </div>

                  {/* Duration and Stops */}
                  <div>
                    <p className="font-semibold text-gray-800">{flight.duration}</p>
                    <p className="text-sm text-gray-600">
                      {flight.stops === 0 ? 'Non-stop' : `${flight.stops} stop(s)`}
                    </p>
                  </div>

                  {/* Price and Rating */}
                  <div className="text-right">
                    <p className="text-3xl font-bold text-blue-600">${flight.price}</p>
                    <p className="text-sm text-gray-600">⭐ {flight.rating}</p>
                    <Button variant="primary" size="sm" className="mt-2">
                      Book Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FlightSearch;
