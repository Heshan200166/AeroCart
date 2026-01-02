import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Layout Component
 * Main layout wrapper for all pages
 */
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
