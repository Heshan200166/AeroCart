/**
 * Validation Functions
 * Reusable validation utilities
 */

export const validators = {
  /**
   * Email validation
   */
  isValidEmail: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  /**
   * Phone validation
   */
  isValidPhone: (phone) => {
    const phoneRegex = /^[\d\s\-\(\)\+]{10,}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  },

  /**
   * Password strength validation
   */
  isStrongPassword: (password) => {
    return (
      password.length >= 8 &&
      /[a-z]/.test(password) &&
      /[A-Z]/.test(password) &&
      /\d/.test(password) &&
      /[!@#$%^&*]/.test(password)
    );
  },

  /**
   * Date validation
   */
  isValidDate: (date) => {
    return !isNaN(Date.parse(date));
  },

  /**
   * Credit card validation
   */
  isValidCreditCard: (cardNumber) => {
    const cleaned = cardNumber.replace(/\s/g, '');
    if (!/^\d{13,19}$/.test(cleaned)) return false;

    let sum = 0;
    let isEven = false;

    for (let i = cleaned.length - 1; i >= 0; i--) {
      let digit = parseInt(cleaned.charAt(i), 10);

      if (isEven) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      isEven = !isEven;
    }

    return sum % 10 === 0;
  },
};

/**
 * Form validation helper
 */
export const validateField = (name, value, rules = {}) => {
  if (rules.required && !value) {
    return `${name} is required`;
  }

  if (rules.email && !validators.isValidEmail(value)) {
    return `${name} must be a valid email`;
  }

  if (rules.phone && !validators.isValidPhone(value)) {
    return `${name} must be a valid phone number`;
  }

  if (rules.minLength && value.length < rules.minLength) {
    return `${name} must be at least ${rules.minLength} characters`;
  }

  if (rules.maxLength && value.length > rules.maxLength) {
    return `${name} must not exceed ${rules.maxLength} characters`;
  }

  return '';
};
