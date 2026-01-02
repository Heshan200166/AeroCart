import { configureStore } from '@reduxjs/toolkit';

/**
 * Redux Store Configuration
 * 
 * Central state management for the application
 */
const store = configureStore({
  reducer: {
    // Add reducers here
    // Example: auth: authSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
  devTools: import.meta.env.DEV,
});

export default store;
