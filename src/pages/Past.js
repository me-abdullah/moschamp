import React from "react";

function Past() {
  return (
    <>
      <img
        src="/assest/pastt-champ.jpg"
        alt="about"
        className="w-full h-full md:pt-0 pt-[10vh]"
      />
      <div className="lg:w-2/3 mx-auto text-center my-10">
        <h1 className="sm:text-3xl text-2xl title-font mb-4 text-[#115740] font-bold">
          Champions
        </h1>

        {/* Welcome Section */}
        <section>
          <p className="leading-relaxed text-xl text-[#115740] font-bold">
            Congratulations to the 2023 Microsoft Office Specialist U.S.
            National Champions.
          </p>
          <p className="leading-relaxed text-gray-600 text-justify text-base my-2">
            The 2023 MOS U.S. National Championship attracted more than 217,000
            exam entries who competed to demonstrate their mastery of Microsoft
            Office products.
          </p>
        </section>

        {/* Competition Process Section */}
        <section>
         
          <p className="leading-relaxed text-gray-600 text-justify text-base my-2">
          The 2023 MOS U.S. Champions are:
          </p>
          <ul className="text-gray-600 list-disc text-left">
            <li>Microsoft Word® (Microsoft 365 Apps and Office 2019): Joy Skaggs, Arkansas</li>
            <li>Microsoft Excel® (Microsoft 365 Apps and Office 2019): Mason Braithwaite, Utah</li>
            <li>Microsoft PowerPoint® (Microsoft 365 Apps and Office 2019): Alexandra Occhiuto, New York</li>
            <li>Microsoft Word® (Office 2016): Nicholas Keller, Virginia</li>
            <li>Microsoft Excel® (Office 2016):  Javier Hamilton, Virginia</li>
            <li>Microsoft PowerPoint® (Office 2016): Celia Cole, West Virginia</li>
          </ul>
          <p className="leading-relaxed text-gray-600 text-justify text-base my-2">
          In 2024, Certiport will host the Microsoft Office Specialist U.S. National Championship in Orlando, Florida on June 17- 19, 2024.
          </p>
        </section>

        {/* Video Section */}
        <section className="my-10">
          <iframe
            width="100%" 
            height="515"
            src="https://www.youtube.com/embed/4LffFW4qRzg?si=GXKkvfHbulSkZ1fJ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </section>

        {/* Additional Information Section */}
      

        {/* Call-to-Action Button */}
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-8">
        <a href="https://certiport.pearsonvue.com/Blog/2023/June/Announcing-the-2023-MOS-US-Champions" target="_blank">Press Release</a>
        </button>
      </div>
    </>
  );
}

export default Past;
