import React from "react";
import { useEffect } from "react";

import Contact from "../components/Contact/Contact";

function Famee() {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  return (
    <>
      <img
        src="/assest/famee.jpeg"
        alt="about"
        className="w-full h-full md:pt-0 pt-[10vh] relative"
        loading="lazy"
      />
      <div className="lg:w-2/3 mx-auto text-center my-10 relative">
        <section>
          <p className="leading-relaxed text-gray-600 text-justify text-base my-2">
            MOS Pakistan Championship serves as a dynamic platform for nurturing
            and showcasing Pakistan's exceptional talent on the global stage.
            Through rigorous competition and skill evaluation in Microsoft
            Office applications, the championship identifies top-performing
            individuals who demonstrate unparalleled proficiency and expertise.
            <br />
            Selected champions from the MOS Pakistan Championship embark on an
            exciting journey representing their nation at the MOS World
            Championship. This prestigious event gathers the brightest minds
            from around the globe, providing a unique opportunity for Pakistani
            talent to shine on an international platform.
            <br />
            By promoting and supporting Pakistan's champions, the MOS Pakistan
            Championship not only highlights the country's technological prowess
            but also fosters a culture of excellence and innovation. These
            champions serve as ambassadors, showcasing Pakistan's capabilities
            and contributing to its positive global reputation.
            <br />
            Through dedicated training, mentorship, and support, the MOS
            Pakistan Championship empowers its participants to compete and excel
            at the highest level, preparing them to become future leaders in the
            field of technology. It is a testament to Pakistan's commitment to
            nurturing talent and driving progress in the digital age.
          </p>
        </section>
      </div>
      <Contact />
    </>
  );
}

export default Famee;
