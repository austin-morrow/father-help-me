import React from 'react';
import {
    SlSocialInstagram,
    SlSocialFacebook,
    SlSocialSpotify,
    SlMusicToneAlt,
  } from "react-icons/sl";
  
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
            <SlSocialFacebook />
          </a>
          <a href="#" className="hover:text-gray-400">
           <SlSocialInstagram />
          </a>
          <a href="#" className="hover:text-gray-400">
           <SlSocialSpotify />
          </a>
          <a href="#" className="hover:text-gray-400">
           <SlMusicToneAlt />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
