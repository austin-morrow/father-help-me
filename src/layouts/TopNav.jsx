import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

const TopNav = () => {
  const pages = [
    { name: 'Home', url: '/' },
    { name: 'joy in pain?', url: '/music' },
  ];

  return (
    <div>
      <Breadcrumb pages={pages} />
    </div>
  );
};

export default TopNav;