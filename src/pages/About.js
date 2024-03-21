import React from "react";

import Helmet from "react-helmet";

const About = () => {
  return (
    <>
      <img
        src="/assest/about.png"
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
        <section>
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
        <section>
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
            Students can enter their exam scores in one of two ways:
          </p>
          <ol className="text-gray-600">
            <li>
              Enter an Exam at the Time of Testing: While sitting for a
              qualifying MOS exam, you will be prompted to participate in the
              Championship. Before the exam begins, a screen will appear with
              competition information and an opt-in checkbox. To submit your
              exam into the Championship, check the box and then select the OK
              button. If you pass, your exam will automatically be submitted
              into the Championship. If you do not want to submit your exam,
              then you can opt out of the competition by not checking the
              checkbox.
            </li>
            <li>
              Enter an Exam You’ve Already Completed: Did you complete and pass
              a qualifying exam but did not select to enter it into the
              Championship? You can still enter your exam for a chance to be the
              next P.K. National Champion! Simply follow these steps:
            </li>
          </ol>
          <ul className="text-gray-600 list-disc text-left">
            <li>Login to your Candidate Home Page</li>
            <li>Click on the Championship link</li>
            <li>
              Select the exam you would like to enter into the Championship
            </li>
            <li>Select the ‘Register Selected Exams’ button</li>
          </ul>
        </section>

        {/* Video Section */}
        <section className="my-10">
         
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

        {/* Additional Information Section */}
        <section>
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
        </section>

        {/* Call-to-Action Button */}
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-8">
          Where do I rank in your state?
        </button>
      </div>
    </>
  );
};

export default About;
