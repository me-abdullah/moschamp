import React from "react";
import { useEffect } from "react";

import Helmet from "react-helmet";

import Typewriter from "typewriter-effect";

import { useNavigate } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";

import {motion} from 'framer-motion';
function About() {
  const navigate = useNavigate();
 
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <section className="text-gray-600" id="about">
      <Helmet>
        <title>
          About Microsoft Championship Pakistan | Leaders in MS Office
          Certifications
        </title>
        <meta
          name="description"
          content="Learn about Microsoft Championship Pakistan, your trusted partner for MS Office certifications. Discover our mission, values, and commitment to empowering individuals through internationally recognized skills."
        />
        <meta
          name="keywords"
          content="Championship, Certification, MS-Office, Microsoft Champions"
        />
      </Helmet>
   
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          className="border-4 border-green-500 lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded "
          alt="hero"
          src="/assest/About-img.jpeg"
          data-aos="flip-right"
          loading="lazy"
        />
         
        <div className="text-center lg:w-2/3 w-full">
          <h1
            className="title-font sm:text-4xl text-3xl mb-4 text-[#115740] font-bold"
            data-aos="fade-up"
          >
             <img src="/assest/circle.png" alt="" className="customimg"/>
            <Typewriter
      options={{
        strings: [' What is The MOS P.K National Championship?'],
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
          <p className="mb-8 leading-relaxed" data-aos="zoom-in">
            The Microsoft Office Specialist Pakistan National Championship,
            presented by Certiport, a Pearson VUE Business, is a competition
            designed to assess students' proficiency in Microsoft Office
            applications such as Word, Excel®, and PowerPoint®. The
            top-performing students earn the honor of representing their
            respective cities at the P.K National Championship. In certain
            cities, students have the opportunity to compete in a national
            championship, and the champions of this event progress to the MOS
            World Championship.
          </p>
          <div className="float-right">
        <img src="/assest/block.png" alt="" className="customimg customimg2"/>
        </div>
          <section className="my-10 relative">
            <iframe
              width="100%" // Set the width to 80%
              height="515"
              className="border-4 border-green-600"
              src="https://www.youtube.com/embed/Q3SLm29D6NQ?si=vDpbCyxbraqlwXIq"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>

          
          </section>
          <div className="flex justify-center relative">
            
            <motion.button
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(34,197,94)",
              boxShadow: "0px 0px 8px rgb(34,197,94)",
            }}
              onClick={() => navigate("/about")}
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 font-bold rounded text-lg"
            >
              Uncover Your National Championship Info!
            </motion.button>
            
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default About;
