import React from 'react'
import { Link } from 'react-router-dom'
import IMG from '../assets/images/IMG-3792.jpg'
import Folder from '../assets/images/folder.png'


function Home() {
  return (
    <>
    <div className="flex justify-center text-2xl py-8 sm:text-4xl lg:py-4">Father, Help Me</div>
    <div>
    <div className="relative flex justify-center">
      <img className="w-full sm:w-auto sm:h-[400px]  lg:h-[500px] sm:p-4 pb-20 lg:p-12" src={IMG} alt="Father help me band" />
    </div>

<div className="flex justify-center">
      <div>
        <Link to='/music'><img className='flex justify-center w-12 h-12 cursor-pointer sm:w-20 sm:h-20' src={Folder} alt="folder"/> </Link> 
        <div className="flex justify-center text-xs lg:text-base">joy in pain?</div>
     </div>
</div>
 </div>
    </>
  );
}

export default Home