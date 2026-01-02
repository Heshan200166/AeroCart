import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

/**
 * Accordion Component
 * Reusable accordion/collapsible component
 */
const Accordion = ({ items = [] }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition"
          >
            <span className="font-semibold text-gray-800">{item.title}</span>
            <FaChevronDown
              className={`text-gray-600 transition-transform ${
                activeIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          {activeIndex === index && (
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
