import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll'
import WebFont from 'webfontloader';


import { MenuIcon, XIcon } from '@heroicons/react/outline';

const QuoteNav = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


    useEffect(() => {
      WebFont.load({
        google: {
          families: ['Lobster']
        }
      });
     }, []);
    
  return (
    <div className='w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full pl-20 pr-20'>
        <div className='flex items-center'>
        <Link className="cursor-pointer" to="home" smooth={true} duration={500}><h1 className='text-3xl font-bold mr-4 sm:text-4xl pl-20 pr-10 text-fuchsia-450 Lobster drop-shadow-navBarTitle'>Breakin' Encyclopedia</h1></Link>
        </div>
        <div className='hidden md:flex pr-4'>
        <a href="/"><button className='py-3 px-20 sm:w-[100%] my-4 text-white border bg-fuchsia-450 border-fuchsia-450 hover:bg-transparent hover:text-fuchsia-450 rounded-md font-bold'>Return to Home</button></a>
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
          
        </div>
      </div>
    </div>
  );
};

export default QuoteNav;
