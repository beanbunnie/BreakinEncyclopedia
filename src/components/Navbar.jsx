import React, { useState, useEffect } from "react";
import { Link as LScroll, animateScroll as scroll } from "react-scroll";
import WebFont from "webfontloader";

import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Lobster"],
      },
    });
  }, []);

  return (
    <div className="w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full pl-20 pr-20">
        <div className="flex items-center">
          <div>
            <LScroll
              className="cursor-pointer"
              to="home"
              smooth={true}
              duration={500}
            >
              <h1 className="text-3xl font-bold mr-4 sm:text-4xl pl-20 text-fuchsia-450 Lobster drop-shadow-navBarTitle">
                Breakin' Encyclopedia
              </h1>
            </LScroll>
          </div>
        </div>
        <ul className="hidden md:flex">
          <li>
            <LScroll
              className="cursor-pointer px-6 text-slate-700 hover:text-fuchsia-450 font-bold"
              to="origins"
              smooth={true}
              offset={-50}
              duration={500}
            >
              Origins
            </LScroll>
          </li>
          <li>
            <LScroll
              className="cursor-pointer px-6 text-slate-700 hover:text-fuchsia-450 font-bold"
              to="about"
              smooth={true}
              offset={-200}
              duration={500}
            >
              About
            </LScroll>
          </li>
        </ul>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
