import React from 'react'
import { SlSocialInstagram, SlSocialFacebook, SlSocialSpotify } from "react-icons/sl";
import { Link } from 'react-router-dom'
import IMG from '../assets/images/IMG_3792.jpg'
import Folder from '../assets/images/folder.png'


function Home() {
  return (
    <>
    <div className='pt-4 pl-4'>home</div>
    <div className="flex justify-center text-2xl lg:pb-0 pb-8 sm:text-4xl">Father, Help Me</div>
    <div>
    <div className="relative flex justify-center">
      <img className="w-full sm:w-auto sm:h-[400px]  lg:h-[450px] sm:p-4 pb-8 lg:p-12" src={IMG} alt="Father help me band" />
    </div>

<div className="flex justify-center">
      <div>
        <Link to='/music'><img className='flex justify-center w-12 h-12 cursor-pointer sm:w-20 sm:h-20' src={Folder} alt="folder"/> </Link> 
        <div className="flex justify-center text-xs lg:text-base">joy in pain?</div>
     </div>
</div>
   <div className='fixed bottom-4 left-0 right-0'>
    <div className='object-none object-bottom flex justify-center gap-4 text-gray-500'>
        <div className='hover:text-black'><a href='https://www.instagram.com/fatherhelpmeband/' rel="noreferrer" target="_blank"> <SlSocialInstagram /></a></div>
        <div className='hover:text-black'> <a href='https://www.facebook.com/FatherHelpMeBand' rel="noreferrer" target="_blank"><SlSocialFacebook /></a></div> 
      <div className='hover:text-black'><a href='https://open.spotify.com/artist/5hLg85exsPamjHRb12tHPW'  rel="noreferrer" target="_blank"><SlSocialSpotify /></a></div>
    </div>
    </div>
 </div>
    </>
  );
}

export default Home