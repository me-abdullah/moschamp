import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function About() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="/assest/new.jpg" data-aos="flip-right"
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 text-[#115740] font-bold" data-aos="fade-up">
            What is the MOS U.S. National Championship?
          </h1>
          <p className="mb-8 leading-relaxed" data-aos="zoom-in">
            The Microsoft Office Specialist U.S. National Championship presented
            by Certiport, a Pearson VUE Business, is a competition that tests
            students’ skills on Microsoft Office Word, Excel® and PowerPoint®.
            Top students are invited to represent their respective states at the
            U.S. National Championship. In some states, students are invited to
            participate in a Statewide Championship, and the winners of that
            event continue on to the U.S. National Championship.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 font-bold rounded text-lg">
              Compete in your state
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
