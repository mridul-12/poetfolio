/* eslint-disable react/no-unescaped-entities */
import { MdOutlineEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";

import { FaArrowLeft, FaArrowRightLong, FaInstagram } from "react-icons/fa6";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Contact = () => {
  useEffect(() => {
    Aos.init();
    emailjs.init("HmRS7FQ6bDFpsD8dX"); 
  }, []);
  
  const sendEmail = (e) => {
    e.preventDefault();
    toast.success("Your email is being sent. Please wait...");
    emailjs
      .sendForm("service_yru17js", "template_j1ccmtq", e.target)
      .then(
        () => {
          toast.success("Message sent successfully!");
        },
        (error) => {
          toast.error(`Failed to send message: ${error.text}`);
        }
      );
    e.target.reset();
  };
  

  return (
    <div className=" " data-aos="fade-up" data-aos-duration="3000">
      <h3 className="text-3xl font-bold text-center my-5 text-[#EE444F]">
        Contact Us{" "}
      </h3>
      <p className="my-5"></p>
      <div className="lg:flex justify-around lg:mx-0 mx-3 ">
        <div>
          <p className="lg:text-2xl text-xl font-serif my-5">
            <span className="font-bold">name:</span> M.H Mridul
          </p>
          <div className="font-bold text-xl">
            <p className="flex items-center   lg:text-xl text-xs">
              <MdOutlineEmail></MdOutlineEmail>email:{" "}
              <a
                href=""
                target="_blank"
                className="hover:link-hover hover:text-blue-500 "
              >
                mridulhasan6211@gmail.com
              </a>
            </p>
            <p className="flex items-center my-2 lg:text-xl text-xs">
              <IoCallSharp></IoCallSharp> <span>contact Number:</span>
              +8801612510850
            </p>
            <p className="flex items-center my-2 lg:text-xl text-xs">
              <FaWhatsapp></FaWhatsapp> <span>Whatsapp Number:</span>
              +8801612510850
            </p>
          </div>
          <div>
            <h4 className=" flex items-center lg:text-xl text-xs">
              <FaArrowLeft></FaArrowLeft>
              Let's connect on social networks
              <FaArrowRightLong></FaArrowRightLong>
            </h4>
            <nav>
              <div className="grid grid-cols-3 my-4">
                <a
                  href="https://www.instagram.com/mridh1561/?igsh=MTRpaWlnbjJqMHBhcA%3D%3D"
                  target="blank"
                >
                  <FaInstagram className="text-4xl bg-instagram-gradient"></FaInstagram>
                  Instragram
                </a>
                <a
                  href="https://www.facebook.com/people/Mri-Du-L/100081711587660/?mibextid=ZbWKwL"
                  target="blank"
                >
                  <FaFacebookF className="text-4xl text-blue-600"></FaFacebookF>
                  facebook
                </a>
              </div>
            </nav>
          </div>
        </div>
        <div className="py-5">
          <section className="max-w-4xl p-6 mx-auto bg-[#2f2f2f] rounded-md shadow-md">
            <h2 className="text-2xl   capitalize  font-bold bg-gradient-to-r from-orange-700 via-green-500 to-red-400 text-transparent bg-clip-text animate-gradient">
              Let’s Message me !
            </h2>

            <section className="max-w-4xl p-6 mx-auto bg-[#2f2f2f] rounded-md shadow-md">
              <form onSubmit={sendEmail}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                  <div>
                    <label className="text-white" htmlFor="username">
                      Your Name{" "}
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      name="name"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <label className="text-white" htmlFor="emailAddress">
                      Email Address
                    </label>
                    <input
                      id="emailAddress"
                      type="email"
                      name="email"
                      placeholder="your email"
                      required
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-white">Message</label>
                  <textarea
                    className="textarea textarea-info block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </div>
                <div className="flex justify-end mt-6">
                  <button className="px-8 py-2.5 leading-5 text-white w-full transition-colors duration-300 transform bg-gray-700 rounded-md  focus:outline-none focus:bg-gray-600 hover:bg-gray-950">
                    Submit
                  </button>
                </div>
              </form>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
