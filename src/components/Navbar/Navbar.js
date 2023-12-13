import React, { useState, useEffect } from "react";

import { Link } from "react-scroll";

import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

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
        <img src="/assest/logo.png" alt="/" width="100" height="40" />
        <div>
          <ul className="hidden md:flex font-bold items-baseline">
            <Link
              to="header"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <ul className="list-none">
              <li className="inline-block ml-10 text-sm uppercase relative group">
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Rankings
                </Link>
                <ul className="absolute hidden bg-white mt-1 p-4 rounded-md shadow-md group-hover:block">
                  <li>
                    <Link
                      to="win"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      Prizes
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link
                      to="deadline"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      Deadline
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <Link
              to="promotion"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <li className="ml-10 text-sm uppercase hover:border-b">
                Promote
              </li>
            </Link>
            <ul className="list-none">
              <li className="inline-block ml-10 text-sm uppercase relative group">
                <Link
                  to="rule"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Rules
                </Link>
                <ul className="absolute hidden bg-white mt-3 p-4 rounded-md shadow-md group-hover:block">
                  <li>
                    <a href="/#faq">FAQ</a>
                  </li>
                </ul>
              </li>
            </ul>
            <Link to="fund" spy={true} smooth={true} offset={50} duration={500}>
              <li className="ml-10 text-sm uppercase hover:border-b">
                Funding
              </li>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
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
              <img src="/assest/logo.png" alt="/" width="80" height="30" />
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
            <ul className="uppercase font-bold">
              <Link
                to="header"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <li className=" text-sm">Home</li>
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <li className="py-4 text-sm">About</li>
              </Link>
              <ul className="list-none">
                <li className="inline-block relative group">
                  <Link
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="py-4 text-sm"
                  >
                    Rankings
                  </Link>
                  <ul className="absolute hidden bg-white mt-1 p-2 rounded-md shadow-md group-hover:block">
                    <li>
                      <Link
                        to="win"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="py-4 text-sm"
                      >
                        Prizes
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="deadline"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="py-4 my-2 text-sm"
                      >
                        Deadline
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>

              <Link
                to="promotion"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <li className="py-4 text-sm">Promote</li>
              </Link>
              <ul className="list-none">
                <li className="inline-block relative group">
                  <Link
                    to="rule"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="py-4 text-sm"
                  >
                    Rules
                  </Link>
                  <ul className="absolute hidden bg-white mt-1 p-2 rounded-md shadow-md group-hover:block">
                    <li>
                      <a href="/faq" className="py-2 text-sm">
                        FAQ
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <Link
                to="fund"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <li className="py-4 text-sm">Funding</li>
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <li className=" text-sm">Contact</li>
              </Link>
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
