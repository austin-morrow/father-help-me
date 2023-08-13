import React from 'react';
import Background from '../assets/images/band.png'; 

const Home = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
    
    </div>
  );
};

export default Home;
