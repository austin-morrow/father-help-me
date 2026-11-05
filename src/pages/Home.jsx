// import React from 'react';
// import Background from '../assets/images/band.png';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      {/* Home link, top left */}
      <Link to="/" className="absolute top-4 left-4 text-black">
Documents</Link>

      <Link
        to="/music"
        className="group flex flex-col items-center gap-4"
      >
      {/* Folder */}
        <div className="relative w-40 h-32 transition-transform duration-200 group-hover:-translate-y-1">
          {/* Tab */}
          <div className="absolute top-0 left-0 w-16 h-6 bg-blue-500 rounded-t-lg"></div>

          {/* Back panel */}
          <div className="absolute top-4 inset-x-0 bottom-0 bg-blue-500 rounded-lg rounded-tl-none"></div>

          {/* Papers */}
          <div className="absolute top-6 inset-x-3 bottom-0 bg-white border border-gray-200 rounded-t-sm"></div>

          {/* Front panel */}
          <div className="absolute top-10 inset-x-0 bottom-0 bg-blue-400 rounded-lg shadow-md group-hover:shadow-lg transition-shadow"></div>
        </div>

        {/* Text under the folder */}
        <p className="text-lg font-medium text-gray-700 group-hover:text-gray-900">
Sad Places - MASTER 24 48.wav        </p>
      </Link>
    </div>
  );
};

export default Home;