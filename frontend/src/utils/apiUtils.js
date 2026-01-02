/**
 * API Response Utilities
 * 
 * Helper functions for handling API responses
 */

export const handleApiError = (error) => {
  if (error.response) {
    // Server responded with error
    return {
      message: error.response.data?.message || 'An error occurred',
      status: error.response.status,
      data: error.response.data,
    };
  } else if (error.request) {
    // Request made but no response
    return {
      message: 'No response from server',
      status: null,
      data: null,
    };
  } else {
    return {
      message: error.message,
      status: null,
      data: null,
    };
  }
};

export const handleApiSuccess = (response) => {
  return {
    success: response.data?.success ?? true,
    message: response.data?.message,
    data: response.data?.data || response.data,
    status: response.status,
  };
};
