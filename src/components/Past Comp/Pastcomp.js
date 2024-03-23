import React from "react";

import {motion} from 'framer-motion';

import Typewriter from "typewriter-effect";

import { useNavigate } from "react-router-dom";
function Pastcomp() {
  const navigate = useNavigate();
  return (
    <div className="qt-box qt-background3 flex items-center">
      <div className="container">
        <div className="row">
          <div className="col-md-8 ml-auto mr-auto text-center text-xl font-medium text-white">
            <h2 className="sm:text-3xl text-2xl font-bold text-center title-font mb-4">
             
              <Typewriter
      options={{
        strings: ['Past Competitions'],
        autoStart: true,
        loop: true, // Set loop to true for infinite loop
      }}
    />
            </h2>
            <span className="lead">
            Do you want to see highlights from our past competitions? Search our hashtag MOSWC on Facebook, Twitter and Instagram.
            </span>
          </div>
        </div>
        <div className="text-center">
          <motion.button onClick={() => navigate('/past')} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded my-5"
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}>
            View Past Competitions
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Pastcomp;
