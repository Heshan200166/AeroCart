import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Card from '../components/Card';

/**
 * 500 Server Error Page
 * Error page for server errors
 */
const ServerError = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="min-h-[calc(100vh-240px)] flex items-center justify-center px-4 py-12">
        <Card className="max-w-lg text-center">
          <div className="text-8xl mb-6">⚠️</div>

          <h1 className="text-5xl font-bold text-gray-800 mb-4">500</h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Server Error</h2>

          <p className="text-gray-600 text-lg mb-2">
            Oops! Something went wrong on our end.
          </p>
          <p className="text-gray-600 text-sm mb-8">
            Our team has been notified and is working to fix the issue. Please try again in a few moments.
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
              onClick={() => navigate(-1)}
            >
              Go Back
            </Button>
          </div>

          {/* Support Info */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">Need help?</p>
            <Button fullWidth variant="outline">
              Contact Support
            </Button>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default ServerError;
