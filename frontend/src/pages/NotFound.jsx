import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Card from '../components/Card';

/**
 * 404 Not Found Page
 * Error page for missing routes
 */
const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="min-h-[calc(100vh-240px)] flex items-center justify-center px-4 py-12">
        <Card className="max-w-lg text-center">
          <div className="text-8xl mb-6">🛫</div>

          <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h2>

          <p className="text-gray-600 text-lg mb-8">
            Oops! The page you're looking for seems to have taken flight. Let's get you back on track.
          </p>

          <div className="space-y-3">
            <Button
              fullWidth
              variant="primary"
              size="lg"
              onClick={() => navigate('/')}
            >
              Go to Home
            </Button>
            <Button
              fullWidth
              variant="secondary"
              size="lg"
              onClick={() => navigate('/flights')}
            >
              Search Flights
            </Button>
          </div>

          {/* Quick Links */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">Or explore these popular sections:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Flights', 'Bookings', 'Dashboard', 'Contact'].map((link) => (
                <button
                  key={link}
                  className="px-4 py-2 text-blue-600 hover:text-blue-700 font-semibold"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default NotFound;
