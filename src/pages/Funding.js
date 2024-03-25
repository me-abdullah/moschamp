import React from "react";

function Funding() {
  return (
    <>
      <img
        src="/assest/pastt-champ.jpg"
        alt="about"
        className="w-full min-h-full md:pt-0 pt-[10vh] relative"
        loading="lazy"
      />
      <div className="lg:w-2/3 mx-auto text-center my-10 relative">
        <h1 className="sm:text-3xl text-2xl title-font mb-4 text-[#115740] font-bold">
          Funding Suggestions
        </h1>
        <section>
          <p className="leading-relaxed text-xl text-[#115740] font-bold">
            For students who qualify for P.K. National Championship
          </p>
          <p className="leading-relaxed text-gray-600 text-justify text-base my-2">
            Qualifying for the P.K. National Championship is a big deal! While
            the P.K. National Championship conference pass and food are free for
            all students and one chaperone, the hotel and travel to the
            championship must be funded by the attendees. In 2024, it’s
            estimated that for flights (depending on the student’s location) and
            hotel costs ($165 per night), it could cost around $1,000 for a
            student to travel to the P.K. National Championship. However,
            Certiport has a guide to help students fund their trip so that they
            can compete at the championship. If a student took their qualifying
            exam at an academic institution, they should work with their
            education and administrators to get fundraising activities approved
            by their Associate Student Body (ASB), Booster Club, or any other
            appropriate group.
          </p>
          <p className="leading-relaxed text-xl text-[#115740] font-bold">
            Academic Institution Funding
          </p>
          <p className="leading-relaxed text-gray-600 text-justify text-base my-2">
            Many academic institutions have funding available to pay for travel
            to the championships. Work with an educator to reach out to
            administrators to see if there is a budget allocated to help travel
            to the event.
          </p>

          <p className="leading-relaxed text-xl text-[#115740] font-bold">
            Certiport Travel Scholarship
          </p>
          <p className="leading-relaxed text-gray-600 text-justify text-base my-2">
            Certiport offers travel scholarships to select students. To apply,
            students must qualify for the P.K. National Championship and
            complete the application form. Application forms will be sent
            directly to students after they receive their official invitation.
          </p>
          <p className="leading-relaxed text-xl text-[#115740] font-bold">
            Go Fund Me
          </p>
          <p className="leading-relaxed text-gray-600 text-justify text-base my-2">
            Go Fund Me offers various donors an opportunity to support students’
            travel to the P.K. National Championships. Students can create a
            digital fundraiser that can easily be shared on social media and
            found by donors looking to support competitors. Students should
            describe what the competition is, why they want to attend, and how
            it will make a difference in their academic and professional
            careers. <br />
            When creating a Go Fund Me page, ensure to have the full name of the
            event in the title (“Microsoft Office Specialist P.K. National
            Championship” or “Certiport’s Adobe Certified Professional P.K.
            National Championship”), as this will help donors find their page
            more easily.
          </p>

          <p className="leading-relaxed text-xl text-[#115740] font-bold">
            Partner with local businesses
          </p>
          <p className="leading-relaxed text-gray-600 text-justify text-base my-2">
            Local businesses are often looking for opportunities to sponsor and
            support their communities. Start by brainstorming a list of
            potential sponsors in your area. This can be done by reaching out to
            parents and guardians to see if they have or know of a business that
            would like to sponsor, using the school’s social media pages or
            newsletters to request a sponsor, writing an article for a local
            newspaper, or creating flyers using to hand out to local companies.
            When proposing why businesses should sponsor the student, students
            can highlight that:
            <ul className="text-gray-600 list-disc text-left mt-5">
              <li>
                They were a top scoring student on the certification exam in the
                state
              </li>
              <li>
                Each year the student championships generate attention from
                national and local news channels
              </li>
              <li>
                By attending the championship, the student can earn scholarships
                and an invitation to attend the World Championship
              </li>
            </ul>
          </p>

          <p className="leading-relaxed text-xl text-[#115740] font-bold">
            Local Fundraisers
          </p>
          <p className="leading-relaxed text-gray-600 text-justify text-base my-2">
            Local fundraisers provide students with an opportunity to raise
            money while offering something back to their community. To start,
            the student must first decide what type of fundraiser they would
            like to do. Some options include (but are not limited to):
            <ul className="text-gray-600 list-disc text-left mt-5">
              <li>Used book sale</li>
              <li>Yard sale</li>
              <li>
                Sports tournaments (such as basketball, bowling, softball, or
                dodgeball)
              </li>
              <li>Custom T-shirts</li>
              <li>Bake sale</li>
              <li>Auctions or raffles</li>

              <li>Car washes</li>
              <li>Pancake breakfast</li>
              <li>Trivia night</li>
              <li>Selling coupon books</li>
              <li>
                Dining to donate programs (Applebee’s, Krispy Kreme, etc.)
              </li>
            </ul>
          </p>

          <p className="leading-relaxed text-gray-600 text-justify text-base my-2">
            Get creative and involve the community! Students should choose a
            fundraiser that feels important to them. Once they decide on a what
            kind of fundraiser, they should advertise it, so the community knows
            to show up and support. They can advertise through social media,
            local newspapers, school newsletters, or word of mouth. <br />
            Please reach out to{" "}
            <a href="mailto:info@moschampionship.com" className="text-blue-500">
              {" "}
              MOSChampionship@pearson.com.
            </a>{" "}
            with any questions regarding costs or funding.
          </p>
        </section>
      </div>
    </>
  );
}

export default Funding;
