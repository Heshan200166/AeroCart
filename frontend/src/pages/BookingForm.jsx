import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';
import Card from '../components/Card';
import Alert from '../components/Alert';

/**
 * Booking Form Page
 * Complete flight booking form
 */
const BookingForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    nationality: '',
    passportNumber: '',
    paymentMethod: 'credit-card',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCVV: '',
  });

  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateStep = (stepNum) => {
    const newErrors = {};

    if (stepNum === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      if (!formData.phone) newErrors.phone = 'Phone is required';
      if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    } else if (stepNum === 2) {
      if (!formData.nationality) newErrors.nationality = 'Nationality is required';
      if (!formData.passportNumber) newErrors.passportNumber = 'Passport number is required';
    } else if (stepNum === 3) {
      if (formData.paymentMethod === 'credit-card') {
        if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
        if (!formData.cardName) newErrors.cardName = 'Card holder name is required';
        if (!formData.cardExpiry) newErrors.cardExpiry = 'Expiry date is required';
        if (!formData.cardCVV) newErrors.cardCVV = 'CVV is required';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStep(3)) {
      return;
    }

    try {
      console.log('Booking submitted:', formData);
      setAlert({
        type: 'success',
        title: 'Booking Confirmed',
        message: 'Your flight has been successfully booked! Check your email for confirmation.',
      });

      setTimeout(() => {
        navigate('/bookings');
      }, 2000);
    } catch (error) {
      setAlert({
        type: 'error',
        title: 'Booking Failed',
        message: error.message || 'An error occurred during booking',
      });
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6"
        >
          <FaArrowLeft /> Back
        </button>

        <h1 className="text-3xl font-bold text-gray-800 mb-8">Complete Your Booking</h1>

        {/* Progress Indicator */}
        <div className="flex justify-between mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex-1 flex items-center">
              <div
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center font-bold
                  ${step >= s ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'}
                `}
              >
                {s}
              </div>
              <div className={`flex-1 h-1 mx-2 ${step > s ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
            </div>
          ))}
          <div
            className={`
              w-10 h-10 rounded-full flex items-center justify-center font-bold
              ${step === 3 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'}
            `}
          >
            3
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card>
              {/* Step 1: Passenger Info */}
              {step === 1 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Passenger Information</h2>

                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="First Name"
                      name="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                      error={errors.firstName}
                      required
                    />
                    <Input
                      label="Last Name"
                      name="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                      error={errors.lastName}
                      required
                    />
                  </div>

                  <Input
                    label="Email Address"
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    required
                  />

                  <Input
                    label="Phone Number"
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={handleChange}
                    error={errors.phone}
                    required
                  />

                  <Input
                    label="Date of Birth"
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    error={errors.dateOfBirth}
                    required
                  />
                </div>
              )}

              {/* Step 2: Travel Documents */}
              {step === 2 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Travel Documents</h2>

                  <Select
                    label="Nationality"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    error={errors.nationality}
                    options={[
                      { value: 'USA', label: 'United States' },
                      { value: 'CAN', label: 'Canada' },
                      { value: 'GBR', label: 'United Kingdom' },
                      { value: 'AUS', label: 'Australia' },
                    ]}
                    required
                  />

                  <Input
                    label="Passport Number"
                    name="passportNumber"
                    placeholder="Enter your passport number"
                    value={formData.passportNumber}
                    onChange={handleChange}
                    error={errors.passportNumber}
                    required
                  />

                  <Alert
                    type="info"
                    message="Make sure your passport is valid for at least 6 months from the date of travel."
                  />
                </div>
              )}

              {/* Step 3: Payment */}
              {step === 3 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Payment Information</h2>

                  <div className="flex space-x-4 mb-6">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="credit-card"
                        checked={formData.paymentMethod === 'credit-card'}
                        onChange={handleChange}
                      />
                      <span>Credit Card</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="debit-card"
                        checked={formData.paymentMethod === 'debit-card'}
                        onChange={handleChange}
                      />
                      <span>Debit Card</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="paypal"
                        checked={formData.paymentMethod === 'paypal'}
                        onChange={handleChange}
                      />
                      <span>PayPal</span>
                    </label>
                  </div>

                  {(formData.paymentMethod === 'credit-card' || formData.paymentMethod === 'debit-card') && (
                    <>
                      <Input
                        label="Card Number"
                        name="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        error={errors.cardNumber}
                        required
                      />

                      <Input
                        label="Card Holder Name"
                        name="cardName"
                        placeholder="John Doe"
                        value={formData.cardName}
                        onChange={handleChange}
                        error={errors.cardName}
                        required
                      />

                      <div className="grid grid-cols-2 gap-4">
                        <Input
                          label="Expiry Date"
                          name="cardExpiry"
                          placeholder="MM/YY"
                          value={formData.cardExpiry}
                          onChange={handleChange}
                          error={errors.cardExpiry}
                          required
                        />
                        <Input
                          label="CVV"
                          name="cardCVV"
                          placeholder="123"
                          value={formData.cardCVV}
                          onChange={handleChange}
                          error={errors.cardCVV}
                          required
                        />
                      </div>
                    </>
                  )}

                  {formData.paymentMethod === 'paypal' && (
                    <Alert
                      type="info"
                      message="You will be redirected to PayPal to complete the payment."
                    />
                  )}
                </div>
              )}

              {/* Alert */}
              {alert && (
                <Alert
                  type={alert.type}
                  title={alert.title}
                  message={alert.message}
                  onClose={() => setAlert(null)}
                />
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                <Button
                  variant="secondary"
                  onClick={handlePrevious}
                  disabled={step === 1}
                >
                  Previous
                </Button>

                {step < 3 ? (
                  <Button variant="primary" onClick={handleNext}>
                    Next
                  </Button>
                ) : (
                  <Button variant="primary" onClick={handleSubmit}>
                    Confirm Booking
                  </Button>
                )}
              </div>
            </Card>
          </div>

          {/* Booking Summary Sidebar */}
          <div>
            <Card className="sticky top-24">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Booking Summary</h3>

              <div className="space-y-4 pb-4 border-b border-gray-200">
                <div>
                  <p className="text-sm text-gray-600">Flight</p>
                  <p className="font-semibold text-gray-800">NYC → LAX</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Departure</p>
                  <p className="font-semibold text-gray-800">Feb 15, 2024 • 08:00 AM</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Passenger</p>
                  <p className="font-semibold text-gray-800">1 Adult</p>
                </div>
              </div>

              <div className="my-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Base Price</span>
                  <span className="font-semibold">$250</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Taxes & Fees</span>
                  <span className="font-semibold">$25</span>
                </div>
              </div>

              <div className="my-4 flex justify-between items-center py-4 border-t border-gray-200">
                <span className="font-bold text-gray-800">Total</span>
                <span className="text-2xl font-bold text-blue-600">$275</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookingForm;
