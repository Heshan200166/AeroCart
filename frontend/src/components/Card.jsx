import React from 'react';

/**
 * Card Component
 * Reusable card component for content grouping
 */
const Card = ({ children, className = '', shadow = true, hover = false }) => {
  return (
    <div
      className={`
        bg-white rounded-lg p-6
        ${shadow ? 'shadow-md' : ''}
        ${hover ? 'hover:shadow-lg transition-shadow' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
