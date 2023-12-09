import React from "react";
import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
function Deadline() {
  useEffect(() => {
    Aos.init({ duration: 5000 });
  }, []);

  return (
    <section className=" overflow-hidden" id="deadline">
      <h1 className="sm:text-3xl text-2xl text-[#115740] font-bold text-center title-font  mb-4">
        When is the deadline to enter?
      </h1>
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          <div
            className="py-8 flex flex-wrap md:flex-nowrap"
            data-aos="fade-right"
          >
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="title-font text-[#115740] font-bold">
                DEADLINE
              </span>
              <span className="mt-1 text-black text-sm">16 Jun 2023</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl text-[#115740] font-bold title-font mb-2">
                First day to enter the P.K National Championship
              </h2>
              <p className="leading-relaxed">
                Get Certified! The First day to enter the 2023 MOS P.K National
                Championship.
              </p>
              <a className="text-green-500 inline-flex items-center mt-4">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div className="py-8 flex flex-wrap md:flex-nowrap"   data-aos="fade-left">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="title-font text-[#115740] font-bold">
                DEADLINE
              </span>
              <span className="mt-1 text-black text-sm">15 Dec 2023</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl text-[#115740] font-bold title-font mb-2">
                Last day to enter the Fall Qualifier
              </h2>
              <p className="leading-relaxed">
                Last day to enter your Word, Excel or Power Point Exam into the
                2024 MOS P.K National Championship Fall Qualifier.
              </p>
              <a className="text-green-500 inline-flex items-center mt-4">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div className="py-8 flex flex-wrap md:flex-nowrap" data-aos="fade-right">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="title-font text-[#115740] font-bold">
                DEADLINE
              </span>
              <span className="text-sm text-black">03 May 2024</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl text-[#115740] font-bold title-font mb-2">
                Last day to enter the Spring Qualifier
              </h2>
              <p className="leading-relaxed">
                Last day to enter your Word, Excel or Power Point Exam into the
                2024 MOS P.K National Championship Spring Qualifier.
              </p>
              <a className="text-green-500 inline-flex items-center mt-4">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div className="py-8 flex flex-wrap md:flex-nowrap" data-aos="fade-left">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="title-font text-[#115740] font-bold">
                DEADLINE
              </span>
              <span className="text-sm text-black">17-19 Jun 2024</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl text-[#115740] font-bold title-font mb-2">
                Time to Compete!
              </h2>
              <p className="leading-relaxed">
                Certiport's MOS P.K National Championship in Orlando Florida.
              </p>
              <a className="text-green-500 inline-flex items-center mt-4">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Deadline;
