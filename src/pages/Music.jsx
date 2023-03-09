import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Song from '../assets/images/joyinpain.mp3'

export const Music = () => {
  return (
   <>
   <div className="flex justify-center pt-20">
    <ReactAudioPlayer
  src={Song}
  controls
/>
</div>
   </>
  );
};

export default Music;