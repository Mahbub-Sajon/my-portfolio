import React from 'react';
import img from '../../../images/frontend_banner.png'
import { HiHand } from "react-icons/hi";
import vidbg from '../../../images/vid-bg.mp4'




const Banner = () => {
    return (
        <div className='text-white bg-base text-center'>
          <video className='w-full h-full bg-cover' src={vidbg} autoPlay loop muted></video>

         <div className='absolute w-full lg:h-full md:h-full sm:h-full top-10 mb-44'>
         <h2 className='flex text-3xl justify-center my-10 font-bold'><span className='px-4'>Hi There !!!</span> <HiHand></HiHand> </h2>
          <p className='text-xl mb-10 font-bold'>I am Mahbub Sajon! I am a MERN Stack Developer! Please Scroll Down To Know More!</p>
        <img className='mx-auto w-1/4 rounded-md' src={img} alt="" />
        <h3 className=' my-10 text-2xl font-bold'>About Me!</h3>
        <p className='mb-14 text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore blanditiis omnis velit aliquam iure, deleniti voluptatum fugiat recusandae aut cumque, similique quam, laboriosam ut laborum asperiores explicabo! Dignissimos, doloremque aut.</p>
         </div>
       
      </div>
    );
};

export default Banner;