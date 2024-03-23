import React from "react";

import {motion} from 'framer-motion';

import Typewriter from "typewriter-effect";
const Certified = () => {
  return (
    <div id="certified" className="qt-box qt-background2 flex items-center">
      <div className="container">
        <div className="row">
          <div className="col-md-8 text-white ml-auto mr-auto text-center text-xl font-medium">
            <h2 className="sm:text-3xl text-2xl font-bold title-font mb-4">
            <Typewriter
      options={{
        strings: ['Empowering Educators: Adobe Certified Professional P.K National Championship'],
        autoStart: true,
        loop: true, // Set loop to true for infinite loop
      }}
    />
            </h2>
            <span className="lead">
              Explore the pinnacle of Adobe expertise at the Adobe Certified
              Professional P.K National Championship. Teachers of qualifying
              students receive a pass to attend educator sessions at the
              CERTIFIED Educator Conference. Join the educator community and
              unlock the potential of certification in the classroom.
            </span>
          </div>
        </div>
        <div className="text-center">
          <motion.button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded my-5"
           whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}>
            <a href="https://certified.certiport.com/conference/"> More about Certified</a>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Certified;
