import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div
      id="hero"
      className='min-h-screen mt-12 flex flex-col lg:flex-row items-center justify-center px-4'
    >
      <Navbar />
      <div className='container flex flex-col lg:flex-row h-[calc(100vh-60px)] items-center justify-center'>
        
        {/* Profile Picture Section */}
        <div className='flex justify-center mb-8 lg:mb-0 lg:w-1/2'>
          <img 
            src="/mna12.png" // Ensure the path is correct
            alt="Profile"
            className='w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover rounded-full' // Make the image responsive
          />
        </div>

        {/* Text Section */}
        <div className='text-center lg:text-left lg:w-1/2'>
          <div className='mt-6 font-serif'>
            <p data-aos="zoom-in-up" className='text-pink-800 text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>I'm</p>
            <p data-aos="zoom-in-up" className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl'>Muhammad</p>
            <p data-aos="zoom-in-up" className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl'>Nasrullah</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
