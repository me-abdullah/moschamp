import React from "react";

function Promote() {
  return (
    <div
      className="lg:w-2/3 mx-auto text-center relative"
      style={{ paddingTop: "120px" }}
    >
      {/* Competition Process Section */}
      <section>
        <h1 className="sm:text-3xl text-2xl title-font mb-4 text-[#115740] font-bold">
          Promotional downloads
        </h1>
        <p className="leading-relaxed text-gray-600 text-justify text-base my-2">
          Get your student’s excited about competitions! Use these marketing
          materials to help inform them of this amazing opportunity.
        </p>
        <ul className="text-gray-500 list-disc text-left">
          <li>
            <a
              href="https://certiport.filecamp.com/s/d/Ayy9T6qBBHiCznl0"
              target="_blank"
              className="underline"
            >
              Webpage Header (PSD)
            </a>
          </li>
          <li>
            <a
              href="https://certiport.filecamp.com/s/d/yQv4Xz6zgdJWC52a"
              target="_blank"
              className="underline"
            >
              Webpage Footer (PNG)
            </a>
          </li>
          <li>
            <a
              href="https://certiport.filecamp.com/s/d/uDxZKU5lfURRdZQQ"
              target="_blank"
              className="underline"
            >
              Email Header (PNG)
            </a>
          </li>
          <li>
            <a
              href="https://certiport.filecamp.com/s/d/lLad3LsfCgedNSBF"
              target="_blank"
              className="underline"
            >
              Poster (PDF)
            </a>
          </li>
          <li>
            <a
              href="https://certiport.filecamp.com/s/d/2isHvuzwe5Qu4yZv"
              target="_blank"
              className="underline"
            >
              Datesheet (PDF)
            </a>
          </li>
        </ul>
      </section>
      <h1 className="sm:text-3xl text-2xl title-font mb-4 text-[#115740] font-bold my-10">
        Promo Video
      </h1>
      {/* Video Section */}
      <section className="my-10">
        <iframe
          width="100%"
          height="515"
          className="border-4 border-green-600"
          src="https://www.youtube.com/embed/Q3SLm29D6NQ?si=_toEYObsBF5wjr2g"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </section>
    </div>
  );
}

export default Promote;
