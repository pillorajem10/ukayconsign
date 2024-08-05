import React, { useState } from 'react';
import logo from './logo-marga-ukay.webp';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Container for Logo and Navigation Links */}
          <div className="flex flex-1 items-center justify-center space-x-4">
            <div className="flex-shrink-0">
              <a href="/">
                <img src={logo} alt="MyLogo" className="h-8 w-auto" />
              </a>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4">
              <a href="/about" className="text-gray-700 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">About</a>
              <a href="/services" className="text-gray-700 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Services</a>
              <a href="/contact" className="text-gray-700 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Contact</a>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              onClick={toggleMenu}
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu Items */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/" className="text-gray-700 hover:text-gray-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">Home</a>
          <a href="/about" className="text-gray-700 hover:text-gray-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">About</a>
          <a href="/services" className="text-gray-700 hover:text-gray-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">Services</a>
          <a href="/contact" className="text-gray-700 hover:text-gray-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
