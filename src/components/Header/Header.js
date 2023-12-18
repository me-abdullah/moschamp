import React from "react";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import Aos from "aos";
import 'aos/dist/aos.css';

import { useSpring, animated } from "react-spring";
export default function Header() {

const fade = useSpring({
  from: {
    opacity: 0
  },
  to:{
    opacity: 1
  }
});   
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <animated.div
      id="header"
      style={fade}
      className="w-full md:h-50 p-2 flex items-center py-16 relative bg-[#acdbcc]"
    >
      <section className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center h-2/3 relative z-10">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            Who Will be the next
            <br className="hidden lg:inline-block" />
            <span className="font-bold text-4xl text-[#115740]">
              {" "}
              P.K National Champion
            </span>
          </h1>
          <p className="mb-6 leading-relaxed  text-justify">
            Engage in the pinnacle of Microsoft Office mastery by participating
            in Certiport's P.K National Championship for MS Office Specialists.
            Elevate your skills and compete for excellence on a national stage.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <button
              onClick={() => navigate("/contact")}
              className="w-full md:w-auto inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg font-bold text-center mt-2 md:mt-0"
            >
              Apply Now!
            </button>
            <div className="md:ml-4 mt-2 md:mt-0">
              <h5 className="py-4 font-bold text-[#115740]">
                500+ National Champions
              </h5>
            </div>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative z-10">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/assest/champ.png"
            loading="lazy"
          />
        </div>
      </section>
    </animated.div>
  );
}
