import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlane, FaGlobe, FaLock, FaClock, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Card from '../components/Card';

/**
 * Landing Page
 * Home page with features and call-to-action
 */
const Landing = () => {
  const features = [
    {
      icon: FaPlane,
      title: 'Easy Booking',
      description: 'Book flights in just a few clicks with our intuitive interface',
    },
    {
      icon: FaGlobe,
      title: 'Global Destinations',
      description: 'Access flights to thousands of destinations worldwide',
    },
    {
      icon: FaLock,
      title: 'Secure Payment',
      description: 'Your payment information is protected with industry-leading security',
    },
    {
      icon: FaClock,
      title: '24/7 Support',
      description: 'Get help anytime you need it with our dedicated support team',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Business Traveler',
      text: 'AeroCart made booking my business trips incredibly easy and convenient.',
      rating: 5,
    },
    {
      name: 'Mike Chen',
      role: 'Frequent Flyer',
      text: 'Great prices and excellent customer service. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Emma Davis',
      role: 'Adventure Seeker',
      text: 'Found the best deals on flights to my dream destinations through AeroCart.',
      rating: 5,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Fly Further, Save More
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Book flights worldwide and discover your next adventure with AeroCart's best deals and seamless booking experience.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/flights">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    Search Flights <FaArrowRight className="inline ml-2" />
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-600">
                    Sign Up Free
                  </Button>
                </Link>
              </div>
            </div>

            <div className="text-center">
              <FaPlane className="text-8xl opacity-20 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose AeroCart?</h2>
            <p className="text-xl text-gray-600">Discover what makes us the preferred choice for travelers worldwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} hover>
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="bg-blue-100 p-4 rounded-full">
                        <Icon className="text-3xl text-blue-600" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Book Your Next Flight?</h2>
          <p className="text-xl opacity-90 mb-8">
            Join millions of travelers who trust AeroCart for their flight bookings
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/flights">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Book Now
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-600">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Travelers Say</h2>
            <p className="text-xl text-gray-600">Real experiences from real customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <div className="mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-lg opacity-90">Get exclusive deals and travel tips delivered to your inbox</p>
            </div>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '1M+', label: 'Happy Travelers' },
              { number: '2000+', label: 'Destinations' },
              { number: '500K+', label: 'Flights Booked' },
              { number: '24/7', label: 'Customer Support' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Landing;
