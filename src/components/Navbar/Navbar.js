import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

import { HashLink } from "react-router-hash-link";
export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-lg z-[100] border-b-4 border-green-600 text-white bg-white bg-opacity-40 py-2 backdrop-blur-md transition-all duration-300 ease-in-out dark:bg-slate-700 dark:bg-opacity-40"
          : "fixed w-full h-20 z-[100] bg-white"
      }
    >
      <div className="flex justify-between md:justify-around items-center w-full h-full px-2 2xl:px-16">
        <img src="/assest/newlogo.png" alt="logo" width="100" height="30" loading="lazy"/>
        <div>
          <ul className="hidden md:flex font-bold items-baseline">
            <HashLink
              to="/#header"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <li className="ml-10 text-sm uppercase hover:border-b cursor-pointer">Home</li>
            </HashLink>
            <HashLink
              to="/#about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <li className="ml-10 text-sm uppercase hover:border-b cursor-pointer">About</li>
            </HashLink>
            <ul className="list-none">
              <li className="inline-block ml-10 text-sm uppercase relative group cursor-pointer">
                <HashLink
                  to="/#certified"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Rankings
                </HashLink>
                <ul className="absolute hidden bg-white mt-1 p-4 rounded-md text-black shadow-md group-hover:block cursor-pointer">
                  <li>
                    <HashLink
                      to="/#win"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      Prizes
                    </HashLink>
                  </li>
                  <li className="mt-3 cursor-pointer">
                    <HashLink
                      to="/#deadline"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      Deadline
                    </HashLink>
                  </li>
                </ul>
              </li>
            </ul>
            <HashLink
              to="/#promotion"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <li className="ml-10 text-sm uppercase hover:border-b cursor-pointer">
                Promote
              </li>
            </HashLink>
            <ul className="list-none">
              <li className="inline-block ml-10 text-sm uppercase relative group cursor-pointer">
                <HashLink
                  to="/#rule"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Rules
                </HashLink>
                <ul className="absolute hidden text-black bg-white mt-3 p-4 rounded-md shadow-md group-hover:block">
                  <li className="cursor-pointer">
                    <HashLink to="/#faq">FAQ</HashLink>
                  </li>
                </ul>
              </li>
            </ul>
            <Link to="/funding" spy={true} smooth={true} offset={50} duration={500}>
              <li className="ml-10 text-sm uppercase hover:border-b">
                Funding
              </li>
            </Link>
            <HashLink
              to="/#contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <li className="ml-10 text-sm uppercase hover:border-b cursor-pointer">
                Contact
              </li>
            </HashLink>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} color="black"/>
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen text-black bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[100%] top-0   p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <img src="/assest/newlogo.png" alt="/" width="80" height="30" />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose color="black"/>
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Lets Build Something Special Together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase font-bold cursor-pointer">
              <a
                href="/#header"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <li className=" text-sm">Home</li>
              </a>
              <a
                href="/#about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <li className="cursor-pointer py-4 text-sm">About</li>
              </a>
              <ul className="list-none">
                <li className="inline-block relative group">
                  <a
                    href="/#certified"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="py-4 text-sm cursor-pointer"
                  >
                    Rankings
                  </a>
                  <ul className="absolute hidden bg-white mt-1 p-2 rounded-md shadow-md group-hover:block">
                    <li>
                      <a
                        href="/#win"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="py-4 text-sm cursor-pointer"
                      >
                        Prizes
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#deadline"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="py-4 my-2 text-sm cursor-pointer"
                      >
                        Deadline
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>

              <a
                href="/#promotion"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <li className="py-4 text-sm cursor-pointer">Promote</li>
              </a>
              <ul className="list-none">
                <li className="inline-block relative group cursor-pointer">
                  <a
                    href="/#rule"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="py-4 text-sm"
                  >
                    Rules
                  </a>
                  <ul className="absolute hidden bg-white mt-1 p-2 rounded-md shadow-md group-hover:block">
                    <li>
                      <a href="/#faq" className="py-2 text-sm cursor-pointer">
                        FAQ
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <Link
                to="/funding"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <li className="py-4 text-sm">Funding</li>
              </Link>
              <a
                href="/#contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <li className=" text-sm cursor-pointer">Contact</li>
              </a>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#115740] font-bold">
                Lets Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:2-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedin />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
