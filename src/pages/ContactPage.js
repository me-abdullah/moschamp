import React from "react";

import Helmet from "react-helmet";

import Contact from "../components/Contact/Contact";
function ContactPage() {
  return (
    <div style={{ paddingTop: "70px" }}>
      <Helmet>
        <title>
        Contact Microsoft Championship Pakistan | Get in Touch for Certification Inquiries
        </title>
        <meta
          name="description"
          content="Reach out to Microsoft Championship Pakistan for inquiries about MS Office certifications. Our team is here to assist you on your journey to becoming a certified Microsoft Office champion. Contact us now.
          "
        />
        <meta
          name="keywords"
          content="Championship, Certification, MS-Office, Microsoft Champions"
        />
      </Helmet>
      <Contact />
    </div>
  );
}

export default ContactPage;
