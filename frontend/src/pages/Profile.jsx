import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaEdit, FaSave } from 'react-icons/fa';
import Layout from '../components/Layout';
import Input from '../components/Input';
import Button from '../components/Button';
import Card from '../components/Card';
import Alert from '../components/Alert';

/**
 * User Profile Page
 * Display and edit user profile information
 */
const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    city: 'New York',
    country: 'United States',
    zipCode: '10001',
    bio: 'Frequent traveler and adventure seeker.',
  });

  const [alert, setAlert] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      console.log('Profile updated:', formData);
      setAlert({
        type: 'success',
        title: 'Success',
        message: 'Your profile has been updated successfully!',
      });
      setIsEditing(false);
    } catch (error) {
      setAlert({
        type: 'error',
        title: 'Error',
        message: error.message || 'Failed to update profile',
      });
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">My Profile</h1>
          <p className="text-gray-600">Manage your personal information</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Picture and Basic Info */}
          <div className="lg:col-span-1">
            <Card className="text-center">
              <div className="mb-4">
                <div className="w-32 h-32 mx-auto bg-blue-600 rounded-full flex items-center justify-center text-white text-5xl">
                  <FaUser />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-1">
                {formData.firstName} {formData.lastName}
              </h2>
              <p className="text-gray-600 mb-4">{formData.email}</p>

              {!isEditing && (
                <Button
                  fullWidth
                  variant="primary"
                  onClick={() => setIsEditing(true)}
                >
                  <FaEdit className="inline mr-2" /> Edit Profile
                </Button>
              )}

              {/* Account Stats */}
              <div className="mt-8 pt-8 border-t border-gray-200 space-y-4">
                <div>
                  <p className="text-gray-600 text-sm">Total Bookings</p>
                  <p className="text-2xl font-bold text-gray-800">12</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Member Since</p>
                  <p className="text-gray-800">January 2024</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Profile Form */}
          <div className="lg:col-span-2">
            <Card>
              {alert && (
                <Alert
                  type={alert.type}
                  title={alert.title}
                  message={alert.message}
                  onClose={() => setAlert(null)}
                />
              )}

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {isEditing ? 'Edit Profile' : 'Profile Information'}
              </h2>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                  <Input
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>

                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                />

                <Input
                  label="Phone Number"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={!isEditing}
                />

                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Address</h3>

                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="City"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                    <Input
                      label="Country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>

                  <Input
                    label="Zip Code"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>

                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">About</h3>

                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    disabled={!isEditing}
                    rows="4"
                    className={`
                      w-full px-4 py-2.5 border rounded-lg
                      focus:outline-none focus:ring-2 focus:ring-blue-500
                      ${!isEditing ? 'bg-gray-50 cursor-not-allowed' : ''}
                    `}
                    placeholder="Tell us about yourself"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              {isEditing && (
                <div className="flex space-x-4 mt-8 pt-6 border-t border-gray-200">
                  <Button
                    variant="secondary"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    onClick={handleSave}
                  >
                    <FaSave className="inline mr-2" /> Save Changes
                  </Button>
                </div>
              )}
            </Card>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Security */}
          <Card>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Security</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Password</span>
                <Button variant="secondary" size="sm">
                  Change
                </Button>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Two-Factor Authentication</span>
                <Button variant="secondary" size="sm">
                  Enable
                </Button>
              </div>
            </div>
          </Card>

          {/* Notifications */}
          <Card>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Notifications</h3>
            <div className="space-y-4">
              <label className="flex items-center space-x-3">
                <input type="checkbox" defaultChecked className="rounded" />
                <span className="text-gray-700">Email notifications</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" defaultChecked className="rounded" />
                <span className="text-gray-700">SMS notifications</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="rounded" />
                <span className="text-gray-700">Marketing emails</span>
              </label>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
