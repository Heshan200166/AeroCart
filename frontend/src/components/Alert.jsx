import React from 'react';
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimes } from 'react-icons/fa';

/**
 * Alert Component
 * Reusable alert/notification component
 */
const Alert = ({ type = 'info', message, onClose, title }) => {
  const typeClasses = {
    success: 'bg-green-50 text-green-800 border-green-200',
    error: 'bg-red-50 text-red-800 border-red-200',
    warning: 'bg-yellow-50 text-yellow-800 border-yellow-200',
    info: 'bg-blue-50 text-blue-800 border-blue-200',
  };

  const iconClasses = {
    success: <FaCheckCircle className="text-green-500" />,
    error: <FaExclamationCircle className="text-red-500" />,
    warning: <FaExclamationCircle className="text-yellow-500" />,
    info: <FaInfoCircle className="text-blue-500" />,
  };

  return (
    <div className={`border rounded-lg p-4 flex items-start space-x-3 ${typeClasses[type]}`}>
      <div className="text-xl mt-0.5">{iconClasses[type]}</div>
      <div className="flex-grow">
        {title && <h3 className="font-semibold mb-1">{title}</h3>}
        <p className="text-sm">{message}</p>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="text-xl opacity-70 hover:opacity-100 transition"
        >
          <FaTimes />
        </button>
      )}
    </div>
  );
};

export default Alert;
