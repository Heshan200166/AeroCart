/**
 * Date and Time Utilities
 */

export const dateUtils = {
  /**
   * Format date to readable string
   */
  formatDate: (date, format = 'MM/DD/YYYY') => {
    const d = new Date(date);
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const year = d.getFullYear();

    return format
      .replace('MM', month)
      .replace('DD', day)
      .replace('YYYY', year);
  },

  /**
   * Calculate duration between two times
   */
  calculateDuration: (startTime, endTime) => {
    const start = new Date(`2000-01-01 ${startTime}`);
    const end = new Date(`2000-01-01 ${endTime}`);
    const diff = end - start;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  },

  /**
   * Check if date is in the past
   */
  isPastDate: (date) => {
    return new Date(date) < new Date();
  },

  /**
   * Get days until date
   */
  daysUntil: (date) => {
    const today = new Date();
    const target = new Date(date);
    const diff = target - today;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  },
};

/**
 * Currency and Number Utilities
 */
export const numberUtils = {
  /**
   * Format number as currency
   */
  formatCurrency: (amount, currency = 'USD') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  },

  /**
   * Format number with commas
   */
  formatNumber: (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },

  /**
   * Round to decimal places
   */
  round: (num, decimals = 2) => {
    return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
  },
};

/**
 * String Utilities
 */
export const stringUtils = {
  /**
   * Capitalize first letter
   */
  capitalize: (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },

  /**
   * Truncate string
   */
  truncate: (str, length) => {
    return str.length > length ? str.substring(0, length) + '...' : str;
  },

  /**
   * Generate random string
   */
  generateId: (length = 8) => {
    return Math.random().toString(36).substring(2, 2 + length);
  },
};
