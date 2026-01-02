import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Input from '../components/Input';
import Button from '../components/Button';
import Alert from '../components/Alert';
import Card from '../components/Card';

/**
 * Forgot Password Page
 * Password recovery form
 */
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError('');
  };

  const validateEmail = () => {
    if (!email) {
      setError('Email is required');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail()) {
      return;
    }

    setLoading(true);
    try {
      console.log('Password reset request for:', email);
      
      setAlert({
        type: 'success',
        title: 'Success',
        message: 'Check your email for password reset instructions',
      });
      setSubmitted(true);
    } catch (err) {
      setAlert({
        type: 'error',
        title: 'Error',
        message: err.message || 'An error occurred',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-[calc(100vh-120px)] flex items-center justify-center px-4 py-12">
        <Card className="w-full max-w-md shadow-lg">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Reset Password</h1>
            <p className="text-gray-600">
              Enter your email address and we'll send you instructions to reset your password
            </p>
          </div>

          {/* Alert */}
          {alert && (
            <Alert
              type={alert.type}
              title={alert.title}
              message={alert.message}
              onClose={() => setAlert(null)}
            />
          )}

          {/* Form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your registered email"
                value={email}
                onChange={handleChange}
                error={error}
                required
              />

              <Button type="submit" fullWidth loading={loading} className="mt-6">
                Send Reset Link
              </Button>
            </form>
          ) : (
            <div className="text-center py-6">
              <div className="text-5xl mb-4">📧</div>
              <p className="text-gray-700 mb-4">
                We've sent a password reset link to <strong>{email}</strong>
              </p>
              <p className="text-gray-600 text-sm mb-6">
                Please check your email and click the reset link. If you don't see it,
                check your spam folder.
              </p>
            </div>
          )}

          {/* Back to Login */}
          <p className="text-center mt-6 text-gray-700">
            Remember your password?{' '}
            <Link to="/login" className="text-blue-600 font-semibold hover:text-blue-700">
              Back to login
            </Link>
          </p>
        </Card>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
