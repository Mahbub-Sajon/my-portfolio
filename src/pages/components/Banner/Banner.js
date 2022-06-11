import React from 'react';
import img from '../../../images/frontend_banner.jpg'

const Banner = () => {
    return (
        <div className='w-full select-none relative aspect-w-16'>
        <img src={img} alt="" />
        <div className='absolute w-full top-0 transform translate-y-1/2 px-3'>
          <p className='text-white text-center text-xl font-bold mb-5'><span className='text-2xl'>Hi There!</span> <br /> I am Mahbub Sajon, I am a MERN stack Developer!</p>
          <button className='w-32 h-12 grid text-white  mx-auto bg-blue-600 hover:bg-blue-800 rounded-md font-bold '>Hire Me!</button>
        </div>
      </div>
    );
};

export default Banner;