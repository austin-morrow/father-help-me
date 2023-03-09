import React from 'react';
import Breadcrumb from '../components/Breadcrumb'

const TopNav = () => {
  const pages = [
    { name: 'Home', path: '/' },
    { name: 'Music', path: '/music' },
  ];

  return (
   <>
     <Breadcrumb pages={pages} />
   </>
  );
};

export default TopNav;
