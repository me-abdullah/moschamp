import React from "react";

function Past() {
  return (
    <>
      <img
        src="/assest/past.jpeg"
        alt="about"
        className="w-full h-full md:pt-15 pt-[10vh] relative"
        loading="lazy"
      />
      <div className="lg:w-2/3 mx-auto text-center my-10 relative">
        <h1 className="sm:text-3xl text-2xl title-font mb-4 text-[#115740] font-bold">
          Champions
        </h1>

        {/* Welcome Section */}
        <section>
          <p className="leading-relaxed text-xl text-[#115740] font-bold">
            Congratulations to the 2023 Microsoft Office Specialist P.K.
            National Champions.
          </p>
          <p className="leading-relaxed text-gray-600 text-justify text-base my-2 mx-3">
            Waqas Ali, a diligent student hailing from Mirpur Mathelo in Ghotki
            district, achieved a remarkable feat by securing a bronze medal in
            PowerPoint 2013 at the esteemed Microsoft Office Specialist World
            Championship (MOSWC) 2015, held in Dallas, Texas. Despite being the
            sole participant representing Pakistan at the 14th MOSWC, with a
            staggering 600,000 participants worldwide, Ali's dedication and
            proficiency stood out amidst fierce competition in various Microsoft
            Office products. In the culmination of this global event, 145
            students from 47 countries engaged in an intense battle for top
            honors. Expressing his sentiments, Ali, a student at FFC Grammar
            School, humbly shared, "I am overwhelmed with emotions, but above
            all, I am immensely proud of this achievement. This victory is not
            mine alone; it belongs to my family, TEC Education Foundation, and
            my friends, whose unwavering support propelled me forward." In
            recognition of his exceptional performance, Certiport, the
            organizing body, awarded Ali a prestigious scholarship worth $1,500,
            along with a medal, a trophy, and valuable Microsoft products.
          </p>
        </section>

        {/* Competition Process Section */}
        {/* <section>
          <p className="leading-relaxed text-gray-600 text-justify text-base my-2">
            The 2023 MOS P.K. Champions are:
          </p>
          <ul className="text-gray-600 list-disc text-left">
            <li>
              Microsoft Word® (Microsoft 365 Apps and Office 2019): Joy Skaggs,
              Arkansas
            </li>
            <li>
              Microsoft Excel® (Microsoft 365 Apps and Office 2019): Mason
              Braithwaite, Utah
            </li>
            <li>
              Microsoft PowerPoint® (Microsoft 365 Apps and Office 2019):
              Alexandra Occhiuto, New York
            </li>
            <li>Microsoft Word® (Office 2016): Nicholas Keller, Virginia</li>
            <li>Microsoft Excel® (Office 2016): Javier Hamilton, Virginia</li>
            <li>
              Microsoft PowerPoint® (Office 2016): Celia Cole, West Virginia
            </li>
          </ul>
          <p className="leading-relaxed text-gray-600 text-justify text-base my-2">
            In 2024, Certiport will host the Microsoft Office Specialist P.K.
            National Championship in Orlando, Florida on June 17- 19, 2024.
          </p>
        </section> */}

        {/* Video Section */}
        <section className="my-10">
          <iframe
            width="100%"
            height="515"
            className="border-4 border-green-600"
            src="https://www.youtube.com/embed/f4K8sKm6xE0?si=K-hq6zu9RbrBbfra"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </section>

        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-8">
          <a
            href="https://certiport.pearsonvue.com/Blog/2023/June/Announcing-the-2023-MOS-US-Champions"
            target="_blank"
          >
            Press Release
          </a>
        </button>
      </div>
    </>
  );
}

export default Past;
