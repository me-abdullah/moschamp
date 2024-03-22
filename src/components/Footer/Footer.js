import React from "react";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const listenToScroll = () => {
    let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <footer className=" text-black relative mt-10">
      <div className="container px-5 py-24 mx-auto flex md:items-start text-start lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="space-y-6 w-64 flex-shrink-0 md:mx-0 mx-auto text-start md:text-left">
          <Link
            to="/"
            className="flex title-font font-medium items-start md:justify-start justify-start text-gray-900"
          >
            <img src="/assest/newlogo.png" alt="Logo" width="100" height="50" loading="lazy"/>
          </Link>
          <p className="mt-2">
            Excel in Certiport's P.K National Championship, showcasing Microsoft
            Office mastery on a national stage.
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-start">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-bold tracking-widest mb-3 text-xl uppercase text-[#115740]">
              Company
            </h2>
            <nav className="list-none mb-10 space-y-4">
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Terms of Use</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">How it Works</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="tracking-widest mb-3 text-xl uppercase text-[#115740] font-bold">
              Support
            </h2>
            <nav className="list-none mb-10 space-y-4">
              <li>
                <Link to="/">Career</Link>
              </li>
              <li>
                <Link to="/">24h Service</Link>
              </li>
              <li>
                <Link to="/">Quick Chat</Link>
              </li>
              <li>
                <Link to="/">Whatsapp</Link>
              </li>
              <li>
                <Link to="/">Support 24h</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 px-4">
            <label
              htmlFor="footer-field"
              className="leading-7 text-sm customfont"
            >
              Subscribe Our Newsletter
            </label>
            <input
              type="text"
              id="footer-field"
              name="footer-field"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-green-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="mt-7">
            <button className="inline-flex text-white bg-gradient-to-tr from bg-green-500 to bg-green-600 border-0 py-2 px-6 focus:outline-none rounded shadow-lg shadow-black/5 dark:shadow-black/30">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        {isVisible && (
        <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300" onClick={goToBtn}>
          <HiOutlineChevronDoubleUp className="text-[#115740]" size={30} />
        </div>
        )}
      </div>

      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className=" text-sm text-center sm:text-left text-black">
            © 2024 Certiport, a business of NCS Pearson, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;