import React from 'react';
import { FaSpinner } from 'react-icons/fa';

/**
 * Loading Spinner Component
 * Loading indicator for async operations
 */
const Spinner = ({ size = 'md', message = '' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <FaSpinner className={`${sizeClasses[size]} text-blue-600 animate-spin`} />
      {message && <p className="text-gray-600">{message}</p>}
    </div>
  );
};

export default Spinner;
