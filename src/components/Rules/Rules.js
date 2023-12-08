import React from "react";
import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
function Rules() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <div className="sm:w-1/2 mb-10 px-4" data-aos="flip-left">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/assest/rule.png"
              />
            </div>
            <h2 className="title-font text-2xl text-[#115740] font-bold mt-6 mb-3">
              Official Rules
            </h2>
            <p className="leading-relaxed text-base">
              Learn the official rules to participate in the MOS U.S. National
              Championship.
            </p>
            <button className="flex mx-auto mt-6 text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-green-600 font-bold rounded">
              Rules
            </button>
          </div>
          <div className="sm:w-1/2 mb-10 px-4" data-aos="flip-right">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/assest/faq.png"
              />
            </div>
            <h2 className="title-font text-2xl text-[#115740] font-bold mt-6 mb-3">
              Frequently asked questions
            </h2>
            <p className="leading-relaxed text-base">
              Want to learn more about the MOS U.S. National Championship? Visit
              our Frequently Asked Questions page for more information.
            </p>
            <button className="flex mx-auto mt-6 text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-green-600 font-bold rounded">
              FAQ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rules;
