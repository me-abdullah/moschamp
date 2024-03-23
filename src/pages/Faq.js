import React from "react";
import { useEffect } from "react";

import { Link } from "react-router-dom";

import { useSpring, animated } from "react-spring";

function Faq() {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  const fade = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });
  return (
    <section className="text-gray-600 relative">
      <animated.div className="container px-5 py-24 mx-auto" style={fade}>
        <div className="text-center mb-12">
          <h1 className="sm:text-3xl text-2xl title-font mb-4 text-[#115740] font-bold">
            Frequently asked questions
          </h1>
        </div>
        <div className="lg:w-2/3 mx-auto">
          <p className="leading-relaxed text-[#115740] font-bold text-base">
            Q. What is Certiport’s Microsoft Office Specialist Pakistan National
            Championship?
          </p>
          <p className="leading-relaxed text-gray-600 text-justify text-base my-2">
            A. The 2024 Microsoft Office Specialist Pakistan National
            Championship presented by Certiport, Inc. is a national competition
            that tests students’ skills in Microsoft Office Word, Excel® and
            PowerPoint®. Top students are invited to represent their respective
            cities at the P.K. National Championship a on<b><u> May 18 – 19, 2024</u></b>. At
            the P.K. National Championship Event, each student competes to be
            the champion in their category: Microsoft Word (Office 2019),
            Microsoft Excel (Office 2019), Microsoft PowerPoint (Office 2019),
            Microsoft Word (Microsoft 365 Apps), Microsoft Excel (Microsoft 365
            Apps), or Microsoft PowerPoint (Microsoft 365 Apps).
          </p>
          <p className="leading-relaxed text-[#115740] font-bold text-base">
            Q. Who can participate in the Championship?
          </p>
          <p className="leading-relaxed text-gray-600 text-justify text-base my-2">
            A: Participation in the P.K. National Championship is open to
            students enrolled in recognized degree-seeking academic
            institutions, aged between <b><u> 13 and 22 as of June 15</u></b> of the
            competition year. Proof of age and student status may be required.
            Previous participants of the P.K. National Championship round are
            eligible to compete, with the condition that they cannot compete in
            the same exam category as their previous participation. For
            instance, a candidate who competed in Microsoft Word (Office 2016),
            Microsoft Word (Office 2019), or Microsoft Word (Microsoft 365 Apps)
            in a previous round can compete in Microsoft Excel® or PowerPoint®
            in the current competition.
          </p>
          <p className="leading-relaxed text-[#115740] font-bold text-base">
          Q: What versions of Microsoft Office Specialist certifications will the Microsoft Office Specialist P.K. National Championship include?
          </p>
          <p className="leading-relaxed text-gray-600 text-justify text-base my-2">
          A: The P.K. National Championship will feature six (6) tracks, namely: Microsoft Word (Office 2019), Microsoft Excel® (Office 2019), Microsoft PowerPoint® (Office 2019), Microsoft Word (Microsoft 365 Apps), Microsoft Excel® (Microsoft 365 Apps), and Microsoft PowerPoint® (Microsoft 365 Apps).
          </p>
          <p className="leading-relaxed text-[#115740] font-bold text-base">
          Q: Where can I take an exam?
          </p>
          <p className="leading-relaxed text-gray-600 text-justify text-base my-2">
          A: The MOS Championship Venue will be shared according to your city.
          </p>
          <p className="leading-relaxed text-[#115740] font-bold text-base">
            Q. How many times can I take an eligible exam for the championship?
          </p>
          <p className="leading-relaxed text-gray-600 text-justify text-base my-2">
          A: Candidates have only one chance to take the exam on the designated day and time at the venue provided by the MOS Championship team.
          </p>
          <p className="leading-relaxed text-[#115740] font-bold text-base">
          Q: How do I register for the MOS Championship?
          </p>
          <p className="leading-relaxed text-gray-600 text-justify text-base my-2">
            A. Registration details and instructions will be provided on the MOS Championship website. Participants will need to complete the registration process within the specified timeframe to secure their spot in the competition.
          </p>
          <p className="leading-relaxed text-[#115740] font-bold text-base">
          Q: Are there any registration fees?
          </p>
          <p className="leading-relaxed text-gray-600 text-justify text-base my-2">
          A: Yes, there are registration fees. Participants are encouraged to review the registration guidelines for more information.
          </p>
          <p className="leading-relaxed text-[#115740] font-bold text-base">
          Q: Can previous winners participate again?
          </p>
          <p className="leading-relaxed text-gray-600 text-justify text-base my-2">
          A: Previous winners of the MOS Championship may be eligible to participate again, subject to the rules and regulations of the competition. Please refer to the website's rules and regulation page for specific eligibility criteria.
          </p>
          <p className="leading-relaxed text-[#115740] font-bold text-base">
          Q: How are winners determined?
          </p>
          <p className="leading-relaxed text-gray-600 text-justify text-base my-2">
            A. Winners are determined based on their performance in the competition, including test scores, interviews, and other evaluation criteria. Detailed information about the evaluation process will be provided on the website.
          </p>
          <p className="leading-relaxed text-[#115740] font-bold text-base">
          Q: Can foreign students participate in the MOS Championship? 
          </p>
          <p className="leading-relaxed text-gray-600 text-justify text-base my-2">
          A: Yes, foreign students enrolled in accredited academic institutions in Pakistan are eligible to participate in the MOS Championship.
          </p>
          <p className="leading-relaxed text-[#115740] font-bold text-base">
          Q: Who can I contact for assistance or further inquiries about the MOS Championship? 
          </p>
          <p className="leading-relaxed text-gray-600 text-justify text-base my-2">
          A: For additional information or inquiries about the MOS Championship,<br/> please contact [+92-3344967167 /+92-3362525920], or visit the MOS Championship website for updates and announcements.
          </p>
          {/* <p className="leading-relaxed text-[#115740] font-bold text-base">
            Q. What scholarships are awarded?
          </p>
          <p className="leading-relaxed text-gray-600 text-justify text-base my-2">
            A. The first-place champion receives $3,000, a medal of achievement,
            a trophy, a certificate, a gift from Microsoft, and an invitation to
            compete at the MOS World Championship. The invitation to the World
            Championship includes a free flight and hotel room for the
            competitor and a chaperone. The second-place winner receives $2,000
            along with a medal of achievement and certificate. The third-place
            winner receives $1,000, a medal of achievement, and a certificate.
          </p>
          <p className="leading-relaxed text-[#115740] font-bold text-base">
            Q. How many days after the deadline do you wait to invite students
            to the MOS P.K. National Championship?
          </p>
          <p className="leading-relaxed text-gray-600 text-justify text-base my-2">
            A. Reports are run the following Monday, after the closing deadline.
            After the winners are determined, invitations will be sent out to
            the email provided on the student’s Certiport profile as well as the
            exam procotor. Invitations are usually sent about one week following
            the qualification deadline. Be sure the email address listed on the
            Certiport profile is correct and frequently checked.
          </p>
          <p className="leading-relaxed text-[#115740] font-bold text-base">
            Q. I just received an invitation to compete in the MOS P.K. National
            Championship. What do I do now?
          </p>
          <p className="leading-relaxed text-gray-600 text-justify text-base my-2">
            A. Congratulations! You’ve been invited to compete in the MOS P.K.
            National Championship. If you’re interested in competing, you will
            need to complete the online registration, submit your student
            packet, and book your travel and hotel. All of these items were
            linked in your invitation, but if you have additional questions,
            please reach out to{" "}
            <a href="mailto:info@moschampionship.com" className="text-blue-500">
              {" "}
              MOSChampionship@pearson.com.
            </a>
          </p> */}
          <p className="leading-relaxed text-gray-600 text-justify text-base my-2">
            Have a question that wasn’t answered?{" "}
            <Link to="/contact" className="text-blue-500">
              {" "}
              Reach out to us!{" "}
            </Link>
          </p>
        </div>
      </animated.div>
    </section>
  );
}

export default Faq;
