/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet-async";
import img from "../assets/Banner.jpg";
import { useEffect, useState } from "react";
import Loader from "../Components/Loading";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      {loading ? (
        <Loader> </Loader>
      ) : (
        <div>
          <Helmet>
            <title>MRIDUL | about Page</title>
          </Helmet>
          <div className="">
            <img className="h-full w-full" src={img} alt="" />
          </div>
          <p
            className="my-7 text-xs lg:text-xl"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            My name is M.H. Mridul, and I come from the beautiful town of
            Tangail. Currently, I am studying for a diploma in engineering at
            Moulvibazar Polytechnic Institute, where I am specializing in the
            CST (Computer Science and Technology) department. My academic
            journey has given me a deep interest in the fields of programming,
            software development, and networking, and I am eager to apply my
            knowledge in real-world projects. Outside of my studies, one of my
            favorite pastimes is gaming, particularly playing PUBG Mobile. It’s
            not just a hobby but also a way for me to unwind after a busy day of
            studying. Playing video games like PUBG helps me sharpen my
            strategic thinking and teamwork skills. I also enjoy learning about
            the mechanics behind games, which further ignites my curiosity in
            game development and coding. In the future, I hope to combine my
            passion for technology and gaming into something productive, like
            creating apps or developing software for the gaming industry. I am
            constantly learning, both in my academic journey and through
            personal experiences, and I am excited about where my interests will
            take me in the future.
          </p>
          <div className="my-6"    data-aos="fade-up"
        data-aos-duration="3000">
            <h3 className="text-center font-bold text-3xl mt-16 mb-5 text-[#EE444F]">
              Eduction
            </h3>
            <ul className="steps steps-vertical">
              <li className="step text-xs md:text-2xl ">
                "Diploma in Engineering at Moulvibazar Polytechnic Institute –
                Enrolled in 2022, Expected Completion in 2026"
              </li>
              <li className="step text-xs md:text-2xl ">
                SSC : "Sristy Academic School, Tangail – SSC Journey Started in
                2020-2021"
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center py-5"></div>

          <div className=" lg:flex md:flex justify-between ">
            <div className="">
              <h4 className="font-bold">Name:</h4>
              <p className="">M.H Mridul </p>
            </div>
            <div className="">
              <h4 className="font-bold">Email:</h4>
              <p className="">mridulhasan6211@gmail.com</p>
            </div>
            <div className="">
              <h4 className="font-bold">Date of birth:</h4>
              <p className=""> 10 February 2005</p>
            </div>
            <div className="">
              <h4 className="font-bold">From:</h4>
              <p className=""> Tangail, Bangladesh</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
