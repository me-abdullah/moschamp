import React from "react";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";
function Fame() {
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <section className="text-gray-600">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-6" data-aos="fade-right">
            <h1 className=" text-[#115740] font-bold text-3xl mb-2">
            MOS Pakistan National Championship
            </h1>
            <h4 className=" text-[#115740] font-bold mb-2">
            Where World Champions Begin Their Journey!
            </h4>
            <div className="mycontainer">
            <div className="lines">
              <div className="mycircle"></div>
            </div>
          </div>
            <div className="leading-relaxed my-3 text-justify">
            After the MOS Championship Award Ceremony, the journey doesn't end there. Our national champions are gearing up for the upcoming World Championship. But wait, there's more! Participants will stay engaged with counseling sessions, job opportunities events, MCT events, and a myriad of other enriching activities in the future.
            </div>
            <button onClick={() => navigate('/fame')} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded my-5">
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
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Fame;
