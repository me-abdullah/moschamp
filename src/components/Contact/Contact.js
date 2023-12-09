import React, { useState } from "react";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Countries } from "../Country/Countries";

export default function Contact() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isValid, setIsValid] = useState(true);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    institution: "",
    title: "",
    role: "Teacher",
    country: "",
    message: "",
    agreeTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "emailAddress" && type === "email") {
      if (value.trim() !== "" && !validateEmail(value)) {
        toast.error("Please enter a valid email address.");
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
    setIsValid(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const requiredFields = [
      "firstName",
      "lastName",
      "emailAddress",
      "institution",
      "title",
      "country",
      "message",
      "agreeTerms",
    ];
    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      toast.error(
        `Please fill in all required fields: ${missingFields.join(", ")}`
      );
      setIsValid(false);
      return;
    }
    setIsValid(true);
    toast.success("Form submitted successfully!");
  };

  return (
    <div className="w-full min-h-screen lg:h-screen" id="contact">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className=" text-center text-3xl text-[#115740] font-bold">
          Get In Touch
        </p>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="/assest/logo.png"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2 my-5">MOS P.K National Championship</h2>

                <p className="py-4 text-justify">
                  MOS P.K National Championship: A pinnacle of skill, honor,
                  and competition, uniting expertise nationwide. Champions rise,
                  embodying excellence in this prestigious American contest.
                </p>
              </div>

              <div>
                <p className="uppercase pt-8 text-[#115740] font-bold text-xl">
                  Connect With Us
                </p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedin />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                   <FaTwitter />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">First Name</label>
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      autoComplete="off"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Last Name</label>
                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Email Address
                    </label>
                    <input
                      name="emailAddress"
                      value={formData.emailAddress}
                      onChange={handleInputChange}
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="email"
                      autoComplete="off"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Institution
                    </label>
                    <input
                      name="institution"
                      value={formData.institution}
                      onChange={handleInputChange}
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Title</label>
                    <input
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      autoComplete="off"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Role</label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    >
                      <option>Teacher</option>
                      <option>Student</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Country</label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="border-2 rounded-lg p-3 flex border-gray-300 w-full"
                  >
                    <option value="">Select a country</option>
                    {Countries.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border rounded-lg p-3 border-gray-300"
                    rows={5}
                    autoComplete="off"
                  ></textarea>
                  <div className="flex items-center">
                    <input
                      id="link-checkbox"
                      name="agreeTerms"
                      type="checkbox"
                      checked={formData.agreeTerms}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="link-checkbox"
                      className="ms-2 text-sm font-medium mt-3"
                    >
                      I agree with the{" "}
                      <a
                        href="https://home.pearsonvue.com/terms"
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        terms of services &nbsp;
                      </a>
                      &{" "}
                      <a
                        href="https://home.pearsonvue.com/privacy"
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Privacy & Cookies Policy &nbsp;
                      </a>
                      consent to the collection, use, transfer, and disclosure
                      of my personal data to Certiport and its authorized
                      third-party service providers that may be located in the
                      P.K or outside of the country where I am located.
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full p-4 text-gray-100 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-green-600 font-bold "
                >
                  Send Message
                </button>
              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
