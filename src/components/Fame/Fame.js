import React from "react";
import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
function Fame() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-6" data-aos="fade-right">
            <h1 className=" text-[#115740] font-bold text-3xl mb-2">
              MOS Championship Hall of Fame
            </h1>
            <div className="leading-relaxed my-3 text-justify">
              The MOS Championship doesn’t end with the awards ceremony. Winners
              go on to compete and succeed in higher education and the job
              market. Want to read the stories of some of our top MOS Champions
              from the past and find out where they are now? Download a copy of
              our e-book “Where Are They Now: Stories of Microsoft Office
              Specialists”.
            </div>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded my-5">
              Find Out More!
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
          <img
            className="object-cover object-center w-full h-full border-4 border-green-500"
            src="/assest/champ3.jpg"
            alt="stats"
            data-aos="flip-right"
          />
        </div>
      </div>
    </section>
  );
}

export default Fame;
