import React from 'react';

import Contact from '../components/Contact/Contact';

function Famee() {
  return (
   <>
   
   <img
        src="/assest/fame.jpg"
        alt="about"
        className="w-full h-full md:pt-0 pt-[10vh]"
        loading='lazy'
      />
      <div className="lg:w-2/3 mx-auto text-center my-10">
        

        {/* Welcome Section */}
        <section>
          
          <p className="leading-relaxed text-gray-600 text-justify text-base my-2">
          At Certiport, we believe that 21st century skills empower students to succeed in college and their careers. Adding in a Microsoft Office Specialist (MOS) certification can push students to the next level, giving them an additional boost when they enter higher education or the workforce. <br/>
          Fill out the form here to read about real students from various countries, and how marketable certifications, real-world skills, and creative minds are helping them change the world.
          </p>
        </section>
      </div>
   <Contact/>
   </>
  )
}

export default Famee;