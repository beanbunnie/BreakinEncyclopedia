import React from "react";

import { ArrowSmRightIcon } from "@heroicons/react/outline";
import { Link } from "react-scroll";

import danceImg from "../assets/breakdance.jpg";

import jazzGif from "../assets/JazzDancers/jazz.GIF";
import capoeiraGif from "../assets/CapoeiraDancers/capoeira.GIF";
import kungfuGif from "../assets/KungfuDancers/kungfu.GIF";
import westAfricanGif from "../assets/WestAfricanDancers/westAfrican.GIF";
import lindyHopGif from "../assets/LindyHopDancers/lindyHop.GIF";

const System = () => {
  return (
    <div name="origins" className="w-full">
      <div className="w-full h-[1000px] bg-gray-700/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay opacity-20"
          src={danceImg}
          alt="/"
        />
      </div>

      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h3 className="text-5xl font-bold py-6 text-center">Origins</h3>
          <p className="py-4 text-2xl text-slate-300 text-center">
            The story and inspiration behind breakdance.{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <Link
            className="cursor-pointer hover:drop-shadow-cardHover"
            to="/Jazz"
          >
            <div className="bg-white rounded-xl shadow-2xl">
              <div className="p-8">
                <div className="w-24 p-2 bg-fuchsia-450 text-white rounded-lg mt-[-4rem]">
                  <h3 className="font-bold text-xl my-4 text-white text-center">
                    Jazz
                  </h3>
                </div>
                <div className="h-card">
                  <img className="h-64 mx-auto" src={jazzGif} alt="/" />
                </div>
                <p className="text-gray-600 text-xl">
                  Jazz dance is a broad style of dance that originated in the
                  early 20th ...
                </p>
              </div>
              <div className="bg-slate-100 pl-8 py-4">
                <Link
                  className="cursor-pointer"
                  to="home"
                  smooth={true}
                  duration={500}
                >
                  <p className="flex items-center text-fuchsia-450 cursor-pointer">
                    Learn More
                    <ArrowSmRightIcon className="w-5 ml-2" />
                  </p>
                </Link>
              </div>
            </div>
          </Link>

          <a
            className="cursor-pointer hover:drop-shadow-cardHover"
            href="/BreakinEncyclopedia/pages/Capoeira"
          >
            <div className="bg-white rounded-xl shadow-2xl">
              <div className="p-8">
                <div className="w-32 p-2 bg-fuchsia-450 text-white rounded-lg mt-[-4rem]">
                  <h3 className="font-bold text-xl my-4 text-white text-center">
                    Capoeira
                  </h3>
                </div>
                <div className="h-card">
                  <img className="h-64 mx-auto" src={capoeiraGif} alt="/" />
                </div>
                <p className="text-gray-600 text-xl">
                  Capoeira, a Brazilian martial art that combines elements of
                  dance ...
                </p>
              </div>
              <div className="bg-slate-100 pl-8 py-4">
                <Link
                  className="cursor-pointer"
                  to="home"
                  smooth={true}
                  duration={500}
                >
                  <p className="flex items-center text-fuchsia-450 cursor-pointer">
                    Learn More
                    <ArrowSmRightIcon className="w-5 ml-2" />
                  </p>
                </Link>
              </div>
            </div>
          </a>

          <a
            className="cursor-pointer hover:drop-shadow-cardHover"
            href="/Kungfu"
          >
            <div className="bg-white rounded-xl shadow-2xl">
              <div className="p-8">
                <div className="w-28 p-2 bg-fuchsia-450 text-white rounded-lg mt-[-4rem]">
                  <h3 className="font-bold text-xl my-4 text-white text-center">
                    Kungfu
                  </h3>
                </div>
                <div className="h-card">
                  <img className="h-64 mx-auto" src={kungfuGif} alt="/" />
                </div>
                <p className="text-gray-600 text-xl">
                  Kung Fu, a Chinese martial art, also had a significant
                  influence on the ...
                </p>
              </div>
              <div className="bg-slate-100 pl-8 py-4">
                <Link
                  className="cursor-pointer"
                  to="home"
                  smooth={true}
                  duration={500}
                >
                  <p className="flex items-center text-fuchsia-450 cursor-pointer">
                    Learn More
                    <ArrowSmRightIcon className="w-5 ml-2" />
                  </p>
                </Link>
              </div>
            </div>
          </a>

          <a
            className="cursor-pointer hover:drop-shadow-cardHover"
            href="/WestAfrican"
          >
            <div className="bg-white rounded-xl shadow-2xl">
              <div className="p-8">
                <div className="w-40 p-2 bg-fuchsia-450 text-white rounded-lg mt-[-4rem]">
                  <h3 className="font-bold text-xl my-4 text-white text-center">
                    West African
                  </h3>
                </div>
                <div className="h-card">
                  <img className="h-64 mx-auto" src={westAfricanGif} alt="/" />
                </div>
                <p className="text-gray-600 text-xl">
                  West African dance has many influences over breakdance ...
                </p>
              </div>
              <div className="bg-slate-100 pl-8 py-4">
                <Link
                  className="cursor-pointer"
                  to="home"
                  smooth={true}
                  duration={500}
                >
                  <p className="flex items-center text-fuchsia-450 cursor-pointer">
                    Learn More
                    <ArrowSmRightIcon className="w-5 ml-2" />
                  </p>
                </Link>
              </div>
            </div>
          </a>

          <a
            className="cursor-pointer hover:drop-shadow-cardHover"
            href="/LindyHop"
          >
            <div className="bg-white rounded-xl shadow-2xl">
              <div className="p-8">
                <div className="w-36 p-2 bg-fuchsia-450 text-white rounded-lg mt-[-4rem]">
                  <h3 className="font-bold text-xl my-4 text-white text-center">
                    Lindy Hop
                  </h3>
                </div>
                <div className="h-card">
                  <img className="h-64 mx-auto" src={lindyHopGif} alt="/" />
                </div>
                <p className="text-gray-600 text-xl">
                  The Lindy Hop is a highly energetic dance, originating in ...
                </p>
              </div>
              <div className="bg-slate-100 pl-8 py-4">
                <Link
                  className="cursor-pointer"
                  to="home"
                  smooth={true}
                  duration={500}
                >
                  <p className="flex items-center text-fuchsia-450 cursor-pointer">
                    Learn More
                    <ArrowSmRightIcon className="w-5 ml-2" />
                  </p>
                </Link>
              </div>
            </div>
          </a>

          <Link className="cursor-pointer hover:drop-shadow-cardHover">
            <div className="bg-white rounded-xl shadow-2xl">
              <div className="p-8">
                <div className="w-40 p-2 bg-fuchsia-450 text-white rounded-lg mt-[-4rem]">
                  <h3 className="font-bold text-xl my-4 text-white text-center">
                    ?????
                  </h3>
                </div>
                <div className="h-card">
                  <img className="h-64 mx-auto" src={jazzGif} alt="/" />
                </div>
                <p className="text-gray-600 text-xl">
                  Another text for a final dance form??? ...
                </p>
              </div>
              <div className="bg-slate-100 pl-8 py-4">
                <Link
                  className="cursor-pointer"
                  to="home"
                  smooth={true}
                  duration={500}
                >
                  <p className="flex items-center text-fuchsia-450 cursor-pointer">
                    Learn More
                    <ArrowSmRightIcon className="w-5 ml-2" />
                  </p>
                </Link>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default System;
