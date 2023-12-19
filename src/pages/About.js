import React from 'react';

import Helmet from "react-helmet";

const About = () => {
  return (
    <>
      <img src='/assest/about.png' alt='about' className='w-full h-full md:pt-0 pt-[10vh]' loading='lazy'/>
      <Helmet>
        <title>
        About Microsoft Championship Pakistan | Leaders in MS Office Certifications
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
      <div className="lg:w-2/3 mx-auto text-center my-10">
        <h1 className="sm:text-3xl text-2xl title-font mb-4 text-[#115740] font-bold">
          Competition details
        </h1>

        {/* Welcome Section */}
        <section>
          <p className="leading-relaxed text-xl text-[#115740] font-bold">
            Welcome to the 2024 Microsoft Office Specialist P.K. National Championship
          </p>
          <p className="leading-relaxed text-gray-600 text-justify text-base my-2">
            Prove your skills in Microsoft Word, Excel and PowerPoint and you could win an invitation to compete in the P.K. National Championship finals in Orlando, Florida, at the Hilton Lake Buena Vista Hotel! <br />

            The Microsoft Office Specialist P.K. National Championship is a national competition that tests students’ skills on Microsoft Office applications. Participating in this competition provides an excellent opportunity for you to showcase your Microsoft Office Word, Excel, and PowerPoint skills, expand your network, make new friends, and prove your skills.
          </p>
        </section>

        {/* Competition Process Section */}
        <section>
          <p className="leading-relaxed text-xl text-[#115740] font-bold">
            How Do Students Compete in the Microsoft Office Specialist P.K. National Championship?
          </p>
          <p className="leading-relaxed text-gray-600 text-justify text-base my-2">
            The process is simple! To receive an invitation to the Microsoft Office Specialist P.K. National Championship (June 17-19, 2024), students between the ages of 13 and 22 must earn the highest score in their state in one of the following categories:
          </p>
          <ul className='text-gray-600 list-disc text-left'>
            <li>Microsoft Word (Office 2019)</li>
            <li>Microsoft Excel (Office 2019)</li>
            <li>Microsoft PowerPoint (Office 2019)</li>
            <li>Microsoft Word (Microsoft 365 Apps)</li>
            <li>Microsoft Excel (Microsoft 365 Apps)</li>
            <li>Microsoft PowerPoint (Microsoft 365 Apps)</li>
          </ul>
          <p className="leading-relaxed text-gray-600 text-justify text-base my-2">
                    There are two qualifying periods to enter: the Fall Qualifier and the Spring Qualifier. At the end of each competition qualifying round, Certiport will issue invites to the students with the top scores in their exam category, for a total of twelve students from each state possible. For example, at the end of the Fall Qualifier, six invitations will be issued to students with the highest exam score per track in the state of Idaho. At the end of the Spring Qualifier, six invitations will be issued to students with the highest exam score per track in the state of Idaho. <br />

                    In the case that two or more students submit the same high score, the exam time will be used as a tie-breaker (the exam taken in the least amount of time will win). Students can and are encouraged to retake their Microsoft Office Specialist exam(s) to improve their score and time. There is no limit to the number of times a student may take an eligible Microsoft Office Specialist exam, regardless of the pass/fail outcome, as long as the student is not in violation of the exam retake policy. <br />

                    Previous participants of the Microsoft Office Specialist P.K. National Championship round can compete in this year’s championship ONLY if they are competing in a different exam. For example, if a student competed at a prior P.K. National Championship round in Microsoft Word (Office 2019) or Microsoft Word (Microsoft 365 Apps), they can participate this year in any Microsoft Excel or PowerPoint exam but they cannot participate in any Microsoft Word exam.
                </p>
                <p className="leading-relaxed text-xl text-[#115740] my-5 font-bold">
                    Students can enter their exam scores in one of two ways:
                </p>
                <ol className='text-gray-600'>
                    <li>Enter an Exam at the Time of Testing: While sitting for a qualifying MOS exam, you will be prompted to participate in the Championship. Before the exam begins, a screen will appear with competition information and an opt-in checkbox. To submit your exam into the Championship, check the box and then select the OK button. If you pass, your exam will automatically be submitted into the Championship. If you do not want to submit your exam, then you can opt out of the competition by not checking the checkbox.</li>
                    <li>Enter an Exam You’ve Already Completed: Did you complete and pass a qualifying exam but did not select to enter it into the Championship? You can still enter your exam for a chance to be the next P.K. National Champion! Simply follow these steps:
                    </li>
                </ol>
                <ul className='text-gray-600 list-disc text-left'>
                    <li>Login to your Candidate Home Page</li>
                    <li>Click on the Championship link</li>
                    <li>Select the exam you would like to enter into the Championship</li>
                    <li>Select the ‘Register Selected Exams’ button</li>
                </ul>

        </section>

        {/* Video Section */}
        <section className='my-10'>
          <iframe
            width="100%" // Set the width to 80%
            height="515"
            src="https://www.youtube.com/embed/4LffFW4qRzg?si=GXKkvfHbulSkZ1fJ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </section>

        {/* Additional Information Section */}
        <section>
          <p className="leading-relaxed text-gray-600 text-justify text-base my-2">
            Check the leaderboards below to see how your school stacks up! Don’t see your state listed? Email MOSChampionship@pearson.com for a list of the top schools in your state.
          </p>
          <p className="leading-relaxed text-gray-600 text-justify text-base my-2">
            If you have any questions about the 2024 Microsoft Office Specialist P.K. National Championship, please speak watch the Competition 101 Webinar or email MOSchampionship@pearson.com.
          </p>
        </section>

        {/* Call-to-Action Button */}
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-8">
          Where do I rank in your state?
        </button>
      </div>
    </>
  );
}

export default About;
