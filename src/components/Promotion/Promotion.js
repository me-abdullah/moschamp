import React from "react";

import {motion} from 'framer-motion';

import Typewriter from "typewriter-effect";

import { useNavigate } from "react-router-dom";
function Promotion() {
  const navigate = useNavigate();
  return (
    <div className="qt-box qt-background2 flex items-center" id="promotion">
      <div className="container">
        <div className="row">
          <div className="col-md-8 ml-auto mr-auto text-center text-xl font-medium text-white">
            <h2 className="sm:text-3xl text-2xl font-bold text-center title-font mb-4">
              
              <Typewriter
      options={{
        strings: ['Looking to Promote The Competition?'],
        autoStart: true,
        loop: true, // Set loop to true for infinite loop
      }}
    />
            </h2>
            <span className="lead">
              Certiport wants educators to have the materials they need to
              promote the MOS P.K National Championship in their classroom,
              school, or state. Visit our Media page to request promotional
              items, view videos, and download your own posters, fliers, press
              releases, and other materials to get your students excited about
              the MOS P.K National Championship.
            </span>
          </div>
        </div>
        <div className="text-center">
          <motion.button onClick={() => navigate('/promote')} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded my-5"
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
          >
            Lets Promote
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Promotion;
