import React from 'react';
import { SlSocialInstagram, SlSocialFacebook, SlSocialSpotify } from "react-icons/sl";
import { Link } from "react-router-dom";
import ReactAudioPlayer from 'react-audio-player';
import Song from '../assets/audio/joyinpain2.m4a';

export const Music = () => {
  return (
    <div className='h-screen'>
    <div className='pt-4 pl-4'>
    <Link className='text-blue-600 underline' to="/">home</Link> / joy in pain?</div>
    <div className='flex flex-row justify-center pt-40 items-center'>
   <div className="flex-col">
   <figcaption className='pb-2'>Listen to Joy in Pain? :</figcaption>
    <ReactAudioPlayer
  src={Song}
  controls
/>
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
  );
};

export default Music;