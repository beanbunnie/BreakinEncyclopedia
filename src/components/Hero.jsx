import React, { useState, useEffect } from "react";
import { Link as LScroll, animateScroll as scroll } from "react-scroll";
import "../arrow.css";

import bgImg from "../assets/homePageHero.png";
import heroGif from "../assets/homeHero.GIF";
import heroImg from "../assets/homeHero3.jpg";

const imageArray = [heroGif, heroImg];

const Hero = () => {
  const [showElement, setShowElement] = React.useState(true);
  useEffect(() => {
    setTimeout(function () {
      setShowElement(false);
    }, 8050);
  }, []);

  return (
    <div
      name="home"
      className="w-full h-screen bg-white flex flex-col justify-between"
    >
      <div>
        {showElement ? (
          <img
            className="pt-8 h-7/12 mx-auto pb-20"
            src={heroGif}
            alt="/"
          ></img>
        ) : (
          <img
            className="pt-8 h-7/12 mx-auto pb-20"
            src={heroImg}
            alt="/"
          ></img>
        )}
      </div>
      {/* <div className='grid md:grid-cols-2 max-w-[1240px] m-auto w-2/3'>
            <div className='pr-10'>
                <img className='w-full' src={bgImg} alt="/" />
            </div>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-16'>
                <p className='text-2xl text-fuchsia-450'>www.breakpedia.com</p>
                <h1 className='py-3 text-3xl md:text-8xl font-bold text-fuchsia-450 Lobster drop-shadow-heroTitle'>Breakin' Encyclopedia</h1>
            </div>
        </div> */}
      <LScroll
        className="cursor-pointer"
        to="origins"
        smooth={true}
        offset={-50}
        duration={500}
      >
        <div class="arrow">
          <span></span>
          <span></span>
        </div>
      </LScroll>
    </div>
  );
};

export default Hero;
