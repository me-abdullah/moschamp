import React from "react";
import { useEffect } from "react";

import Helmet from "react-helmet";

import Typewriter from "typewriter-effect";

import Aos from "aos";
import "aos/dist/aos.css";
function Deadline() {
  useEffect(() => {
    Aos.init({ duration: 5000 });
  }, []);

  return (
    <section className=" overflow-hidden" id="deadline">
       <Helmet>
        <title>
        Microsoft Office Championship Events in Pakistan | Join the Competition
        </title>
        <meta
          name="description"
          content="Participate in exciting Microsoft Office championship events in Pakistan. Showcase your skills, compete with the best, and earn prestigious international certifications. Be a champion with Microsoft Championship Pakistan.
          "
        />
        <meta
          name="keywords"
          content="Championship, Certification, MS-Office, Microsoft Champions"
        />
      </Helmet>
      <h1 className="sm:text-3xl text-2xl text-[#115740] font-bold text-center title-font  mb-4 relative">
     
      <Typewriter
      options={{
        strings: ['Mark Your Calendar'],
        autoStart: true,
        loop: true, // Set loop to true for infinite loop
      }}
    />
      </h1>
      <div className="mycontainer">
            <div className="lines">
              <div className="mycircle"></div>
            </div>
          </div>
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          <div
            className="py-8 flex flex-wrap md:flex-nowrap"
            data-aos="fade-right"
          >
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="title-font text-[#115740] font-bold">
                DATE
              </span>
              <span className="mt-1 text-black text-sm font-bold"> 15 April 2024 to 15 May 2024</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl text-[#115740] font-bold title-font mb-2">
              Registration Days to Enter The P.K National Championship
              </h2>
              <p className="leading-relaxed">
              Unlock your path to glory. Register now for the P.K National Championship!
              </p>
              <a className="text-green-500 inline-flex items-center mt-4" href="https://forms.office.com/r/7t6GfPTEZE" target="_blank">
                Register Now!
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
                DATE
              </span>
              <span className="mt-1 text-black text-sm font-bold">18 & 19 May 2024 </span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl text-[#115740] font-bold title-font mb-2">
               Time to Compete!
              </h2>
              <p className="leading-relaxed">
              Accept the challenge. It's time to show off your skills and compete!
              </p>
              <a className="text-green-500 inline-flex items-center mt-4" href="https://forms.office.com/r/7t6GfPTEZE" target="_blank">
                Register Now!
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
                DATE
              </span>
              <span className="text-sm text-black font-bold">25 & 26 May </span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl text-[#115740] font-bold title-font mb-2">
              Final Interview
              </h2>
              <p className="leading-relaxed">
              Your moment to shine. The final interview awaits.
              </p>
              <a className="text-green-500 inline-flex items-center mt-4" href="https://forms.office.com/r/7t6GfPTEZE" target="_blank">
                Register Now!
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
                DATE
              </span>
              <span className="text-sm text-black font-bold">1 June 2024</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl text-[#115740] font-bold title-font mb-2">
              	National Champions Announcements
              </h2>
              <p className="leading-relaxed">
              MOS Pakistan National Championship, The Day of Winners' Announcement
              </p>
              <a className="text-green-500 inline-flex items-center mt-4" href="https://forms.office.com/r/7t6GfPTEZE" target="_blank">
                Register Now!
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
