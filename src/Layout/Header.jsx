import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 text-white py-4 px-6 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-semibold">FATHER, HELP ME</div>
      
      {/* Navigation */}
      <nav className="space-x-4">
        <a href="#" className="hover:text-gray-400">HOME</a>
        <a href="#" className="hover:text-gray-400">GIGS</a>
        <a href="#" className="hover:text-gray-400">MUSIC</a>
        <a href="#" className="hover:text-gray-400">BOOKING</a>
        
        {/* Spaces for Icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {/* Add your icon SVG here */}
            </svg>
          </a>
          <a href="#" className="hover:text-gray-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {/* Add your icon SVG here */}
            </svg>
          </a>
          <a href="#" className="hover:text-gray-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {/* Add your icon SVG here */}
            </svg>
          </a>
          <a href="#" className="hover:text-gray-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {/* Add your icon SVG here */}
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
