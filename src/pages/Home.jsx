import React from 'react'
import { Link } from 'react-router-dom'
import IMG from '../assets/images/IMG-3792.jpg'
import Folder from '../assets/images/folder.png'


function Home() {
  return (
    <>
    <div className="flex justify-center text-3xl pt-8">Father, Help Me</div>
    <div>
    <div className="relative flex justify-center p-10">
      <img className="w-auto h-[400px]" src={IMG} alt="Father help me band" />
    </div>

<div className="flex justify-center">
      <div className=''>
        <Link to='/music'><img className='w-20 h-20 cursor-pointer ' src={Folder} alt="folder"/> </Link> 
        <div>joy in pain?</div>
     </div>
</div>
 </div>
    </>
  );
}

export default Home