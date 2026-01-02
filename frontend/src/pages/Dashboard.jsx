import React, { useState } from 'react';
import { FaChartLine, FaBookmark, FaPlane, FaUsers, FaTrendingUp, FaArrowRight } from 'react-icons/fa';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Card from '../components/Card';

/**
 * Dashboard Page
 * Main dashboard with statistics and quick actions
 */
const Dashboard = () => {
  const [stats] = useState([
    {
      icon: FaPlane,
      label: 'Total Flights Booked',
      value: '12',
      color: 'blue',
    },
    {
      icon: FaBookmark,
      label: 'Upcoming Bookings',
      value: '3',
      color: 'green',
    },
    {
      icon: FaTrendingUp,
      label: 'Total Amount Spent',
      value: '$4,250',
      color: 'orange',
    },
    {
      icon: FaUsers,
      label: 'Frequent Travelers',
      value: '5',
      color: 'purple',
    },
  ]);

  const [recentBookings] = useState([
    {
      id: 'BK001',
      flight: 'SA-101',
      route: 'NYC → LAX',
      date: '2024-02-15',
      status: 'Confirmed',
    },
    {
      id: 'BK002',
      flight: 'AE-202',
      route: 'LAX → NYC',
      date: '2024-03-20',
      status: 'Confirmed',
    },
    {
      id: 'BK003',
      flight: 'UA-303',
      route: 'ORD → MIA',
      date: '2024-04-10',
      status: 'Pending',
    },
  ]);

  const colorMap = {
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
    green: 'bg-green-50 text-green-600 border-green-200',
    orange: 'bg-orange-50 text-orange-600 border-orange-200',
    purple: 'bg-purple-50 text-purple-600 border-purple-200',
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome Back, John!</h1>
          <p className="text-gray-600">Here's what's happening with your flights today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} hover>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg border ${colorMap[stat.color]}`}>
                    <Icon className="text-2xl" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Bookings */}
          <div className="lg:col-span-2">
            <Card>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Recent Bookings</h2>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>

              <div className="space-y-4">
                {recentBookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                  >
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800">{booking.flight}</p>
                      <p className="text-gray-600 text-sm">{booking.route}</p>
                    </div>

                    <div className="text-right">
                      <p className="text-gray-800">{booking.date}</p>
                      <span
                        className={`
                          inline-block px-3 py-1 rounded-full text-xs font-semibold mt-1
                          ${booking.status === 'Confirmed'
                            ? 'bg-green-50 text-green-700'
                            : 'bg-yellow-50 text-yellow-700'
                          }
                        `}
                      >
                        {booking.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            {/* Search Flights Card */}
            <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
              <h3 className="text-xl font-bold mb-4">Ready to Book?</h3>
              <p className="mb-6 opacity-90">Search and book your next flight today</p>
              <Button fullWidth variant="secondary">
                Search Flights <FaArrowRight className="inline ml-2" />
              </Button>
            </Card>

            {/* Popular Routes */}
            <Card>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Popular Routes</h3>
              <div className="space-y-3">
                {[
                  { from: 'NYC', to: 'LAX', price: '$250' },
                  { from: 'LAX', to: 'ORD', price: '$320' },
                  { from: 'MIA', to: 'NYC', price: '$180' },
                ].map((route, index) => (
                  <button
                    key={index}
                    className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition"
                  >
                    <p className="font-semibold text-gray-800">
                      {route.from} → {route.to}
                    </p>
                    <p className="text-blue-600 text-sm font-semibold">{route.price}</p>
                  </button>
                ))}
              </div>
            </Card>

            {/* Help & Support */}
            <Card>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Need Help?</h3>
              <div className="space-y-2">
                <Button fullWidth variant="outline" size="sm">
                  Contact Support
                </Button>
                <Button fullWidth variant="outline" size="sm">
                  FAQ
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Promotional Section */}
        <Card className="mt-8 bg-gradient-to-r from-orange-400 to-red-500 text-white p-8">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Special Offers Just for You!</h3>
              <p className="opacity-90">Get 20% off on your next booking with code SAVE20</p>
            </div>
            <Button variant="secondary">Claim Offer</Button>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Dashboard;
