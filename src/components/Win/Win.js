import React from "react";
import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
function Win() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <section className="text-gray-600 body-font" id="win">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl text-[#115740] font-bold text-center title-font  mb-4">
            What will I Win?
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Discover your potential and unlock exciting prizes by participating.
            Elevate your experience, win unique rewards, and celebrate your
            achievements.
          </p>
        </div>
        <div className="flex flex-wrap justify-center -m-4">
          <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
            <h2 className="title-font tracking-widest text-[#115740] font-bold mb-4 text-xl text-center sm:text-left">
              1<sup>st</sup> Place
            </h2>
            <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
              <a data-aos="fade-up">
                <span className="bg-green-100 text-green-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                $3000
              </a>
              <a data-aos="fade-down">
                <span className="bg-green-100 text-green-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Trophy
              </a>
              <a data-aos="fade-right">
                <span className="bg-green-100 text-green-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Medal of Achievement
              </a>
              <a data-aos="zoom-in">
                <span className="bg-green-100 text-green-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Winner’s Certificate
              </a>
              <a data-aos="zoom-in">
                <span className="bg-green-100 text-green-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                All Expenses Paid Trip to Compete in the Microsoft Office
                Specialist World Championship
              </a>
            </nav>
          </div>
          <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
            <h2 className=" title-font tracking-widest text-[#115740] font-bold mb-4 text-xl text-center sm:text-left">
              2<sup>nd</sup> Place
            </h2>
            <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
              <a data-aos="fade-up">
                <span className="bg-green-100 text-green-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                $2000
              </a>
              <a data-aos="fade-down">
                <span className="bg-green-100 text-green-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Medal of Achievement
              </a>
              <a data-aos="fade-right">
                <span className="bg-green-100 text-green-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Winner’s Certificate
              </a>
            </nav>
          </div>
          <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
            <h2 className=" title-font tracking-widest text-[#115740] font-bold mb-4 text-xl text-center sm:text-left">
              3<sup>rd</sup> Place
            </h2>
            <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
              <a data-aos="fade-up">
                <span className="bg-green-100 text-green-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                $1000
              </a>
              <a data-aos="fade-down">
                <span className="bg-green-100 text-green-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Medal of Achievement
              </a>
              <a data-aos="fade-right">
                <span className="bg-green-100 text-green-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Winner’s Certificate
              </a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Win;
