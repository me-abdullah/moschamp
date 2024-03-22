import React from "react";

import Helmet from "react-helmet";

const About = () => {
  return (
    <>
      <img
        src="/assest/about-page.jpeg"
        alt="about"
        className="w-full h-full md:pt-0 pt-[10vh] relative"
        loading="lazy"
      />
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
      <div className="lg:w-2/3 mx-auto text-center my-10 relative">
        <h1 className="sm:text-3xl text-2xl title-font mb-4 text-[#115740] font-bold">
          Competition Details
        </h1>

        {/* Welcome Section */}
        <section className="mx-3">
          <p className="leading-relaxed text-xl text-[#115740] font-bold">
            Welcome to the 2024 Microsoft Office Specialist P.K. National
            Championship
          </p>
          <p className="leading-relaxed text-gray-600 text-justify text-base my-2">
            Ready to take your Microsoft Word, Excel, and PowerPoint skills to
            the next level? Compete for a spot in the highly-anticipated P.K.
            National Championship! The Microsoft Office Specialist P.K. National
            Championship is your chance to shine. Showcase your expertise,
            connect with like-minded individuals, and unlock exciting
            opportunities. Don't miss out on this chance to prove yourself and
            make lasting connections!
          </p>
        </section>

        {/* Competition Process Section */}
        <section className="mx-3">
          <p className="leading-relaxed text-xl text-[#115740] font-bold">
            How Do Students Compete in the Microsoft Office Specialist P.K.
            National Championship?
          </p>
          <p className="leading-relaxed text-gray-600 text-justify text-base my-2">
            The process is simple! To receive an invitation to the Microsoft
            Office Specialist P.K. National Championship, registrations will
            open from{" "}
            <b>
              <u> April 15, 2024, to May 15, 2024</u>
            </b>
            . Students between the ages of 13 and 22 must earn the highest score
            in their city/province in one of the following categories:
          </p>
          <ul className="text-gray-600 list-disc text-left">
            <li> Microsoft Office Word (Office 2019)</li>
            <li> Microsoft Office Excel (Office 2019) </li>
            <li>Microsoft Office PowerPoint (Office 2019)</li>
            <li>Microsoft Office Word (Microsoft 365 Apps)</li>
            <li>Microsoft Office Excel (Microsoft 365 Apps)</li>
            <li>Microsoft Office PowerPoint (Microsoft 365 Apps)</li>
          </ul>
          <p className="leading-relaxed text-gray-600 text-justify text-base my-2">
            Registration for the MOS Pakistan National Championship opens from{" "}
            <b>
              <u>April 15, 2024, to May 15, 2024.</u>
            </b>{" "}
            Participation requires completion of the registration process. Upon
            registration confirmation, the MOS Championship Pakistan team will
            reach out to confirm participation.
            <br />
            <br />
            Participants from across Pakistan, including Azad Jammu and Kashmir
            and Gilgit–Baltistan, are welcome to join. The competition
            progresses in two phases:
            <br />
            <br />
            <ol className="text-gray-600 list-disc text-left">
              <li>
                <b>"Time to Compete":</b> Testing will take place on{" "}
                <b>
                  <u>May 18 & 19, 2024.</u>
                </b>
                Participants will receive confirmation of the testing venue,
                along with their exam time slot, via email and phone call.
              </li>
              <li>
                <b> Interviews:</b> High-scoring students from the testing phase
                will undergo interviews on{" "}
                <b>
                  <u> May 25 & 26, 2024.</u>
                </b>
              </li>
            </ol>
            <br />
            The final results of the MOS Pakistan National Championship will be
            announced on{" "}
            <b>
              <u> June 1, 2024</u>
            </b>{" "}
            (Insha Allah). In the event of two students having the same score in
            the final test and interview, the student who completed the test in
            less time will be selected. <br />
            Previous participants of the Microsoft Office Specialist P.K.
            National Championship round can compete this year only if they are
            taking a different exam. For example, a student who competed in a
            prior round in Microsoft Word (Office 2019) or Microsoft Word
            (Microsoft 365 Apps) can participate this year in any Microsoft
            Excel or PowerPoint exam, but not in any Microsoft Word exam. <br />{" "}
            Upon completion of the MOS Pakistan National Championship, champions
            will advance to the World Championship. Terms and conditions apply.
          </p>
          <p className="leading-relaxed text-xl text-[#115740] my-5 font-bold">
            MOS Championship Pakistan Rules & Regulations
          </p>
          <ol className="text-gray-600">
            <p>
              Before entering the MOS Pakistan National Championship 2024,
              please take the time to carefully review the Official Rules. By
              agreeing to these rules, participants commit to sitting for an
              eligibility exam governed by international competition
              regulations.
            </p>
            <p>
            Participation In This Contest Constitutes Your Acceptance Of These
              Official Rules
            </p>
          </ol>
          <p className="text-gray-600">
            Please take note of the following guidelines for participation in
            the MOS Pakistan National Championship 2024:
          </p>
          <br />
          <ol className="text-gray-600 list-disc text-left">
            <li className="leading-relaxed text-[#115740] font-bold">
              Eligibility:
            </li>
          </ol>
          <p className="text-gray-600 text-left">
            - Participants must be between the ages of 13 and 22 as of June 15,
            2024. Minors must obtain permission from their parents or legal
            guardians to participate.
            <br />- Participants must be registered students with an accredited
            academic institution under the Ministry of Education in Pakistan
            between
            <b>
              <u> September 15, 2023, and August 1, 2024.</u>
            </b>
            <br />- Students awaiting results holding valid student IDs between
            <b>
              <u>September 15, 2023, and August 1, 2024,</u>
            </b>{" "}
            are eligible to participate.
            <br />- Foreign students enrolled in accredited academic
            institutions in Pakistan with valid student IDs between{" "}
            <b>
              <u>September 15, 2023, and August 1, 2024,</u>
            </b>{" "}
            are eligible to participate.
          </p>
          <br />
          <ol className="text-gray-600 list-disc text-left">
            <li className="leading-relaxed text-[#115740] font-bold">
              Prohibited Participants:
            </li>
          </ol>
          <p className="text-gray-600 text-left">
            - Previous winners of the Microsoft Office Specialist (MOS) Pakistan
            National Championship and Microsoft Office Specialist World
            Championship are ineligible to compete in the 2024 competition.
          </p>
          <br />
          <ol className="text-gray-600 list-disc text-left">
            <li className="leading-relaxed text-[#115740] font-bold">
              Competition Process:
            </li>
          </ol>
          <p className="text-gray-600 text-left">
            - Each participant must complete the qualification exam to proceed
            in the competition.
            <br />
            - In case a national winner is unable to fulfill their role, the
            first runner-up will take over as the national representative.
            <br />
            - The certification exam re-take policy will be enforced, and
            failure to comply may result in disqualification.
            <br /> - The organizer reserves the right to substitute any prize,
            and prizes cannot be exchanged for cash.
          </p>
          <br />
          <ol className="text-gray-600 list-disc text-left">
            <li className="leading-relaxed text-[#115740] font-bold">
              Personal Information:
            </li>
          </ol>
          <p className="text-gray-600 text-left">
            - By participating, schools and participants consent to the
            collection of personal information and the taking of
            photographs/videos for marketing/promotion/publicity purposes.
            <br />
            - The competition rules must comply with Certiport, Inc.'s Rules and
            Regulations.
            <br />
          </p>
          <br />
          <ol className="text-gray-600 list-disc text-left">
            <li className="leading-relaxed text-[#115740] font-bold">
              Miscellaneous:
            </li>
          </ol>
          <p className="text-gray-600 text-left">
            - The organizer reserves the right to alter the Rules and
            Regulations without prior notice.
            <br />
            - Socio Engineering Technologies (SET) and Core Academy the right to
            any media engagement involving participants of the MOS Pakistan
            National Championship.
            <br />
            - The certification score submitted is final, and no correspondence
            will be entertained.
            <br />- The registration fee is non-refundable.
            <br />
            -Terms and conditions apply for the World Championship process.
            <br />
            <br />
            Participants thoroughly review and understand these guidelines
            before entering the MOS Pakistan National Championship 2024.
          </p>
        </section>

        {/* Video Section */}
        <section className="my-10">
          <iframe
            width="100%" // Set the width to 80%
            height="515"
            className="border-4 border-green-600"
            src="https://www.youtube.com/embed/4LffFW4qRzg?si=RxgIXen-fmMjIasa"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </section>

        {/* Additional Information Section */}
        {/* <section>
          <p className="leading-relaxed text-gray-600 text-justify text-base my-2">
            Check the leaderboards below to see how your school stacks up! Don’t
            see your state listed? Email MOSChampionship@pearson.com for a list
            of the top schools in your state.
          </p>
          <p className="leading-relaxed text-gray-600 text-justify text-base my-2">
            If you have any questions about the 2024 Microsoft Office Specialist
            P.K. National Championship, please speak watch the Competition 101
            Webinar or email MOSchampionship@pearson.com.
          </p>
        </section> */}

        {/* Call-to-Action Button */}
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-8">
          Where do I rank in your state?
        </button>
      </div>
    </>
  );
};

export default About;
