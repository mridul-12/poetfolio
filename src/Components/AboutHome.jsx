/* eslint-disable react/no-unescaped-entities */
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const AboutHome = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="my-10" data-aos="fade-up" data-aos-duration="3000">
      <h3 className="text-center font-bold text-3xl mt-16 mb-5 text-[#EE444F]">
        About Me
      </h3>
      <p className=" lg:text-xl text-xs lg:mx-0 mx-3">
        My name is M.H. Mridul, and I come from the beautiful town of Tangail.
        Currently, I am studying for a diploma in engineering at Moulvibazar
        Polytechnic Institute, where I am specializing in the CST (Computer
        Science and Technology) department. My academic journey has given me a
        deep interest in the fields of programming, software development, and
        networking, and I am eager to apply my knowledge in real-world projects.
        Outside of my studies, one of my favorite pastimes is gaming,
        particularly playing PUBG Mobile. It’s not just a hobby but also a way
        for me to unwind after a busy day of studying. Playing video games like
        PUBG helps me sharpen my strategic thinking and teamwork skills. I also
        enjoy learning about the mechanics behind games,{" "}
        <Link to={"/about"} className="text-blue-700">
          more....
        </Link>
      </p>

      <div>
        <div className="flex justify-center items-center py-5">
          <Link
            to={"/about"}
            className="bg-gradient-to-r from-blue-500 to-green-500 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500 text-white font-bold py-2 px-4 rounded flex items-center gap-1"
          >
            about more <FaArrowRight></FaArrowRight>
          </Link>
        </div>
        <div className="my-7">
          <h3 className="text-center font-bold text-3xl mt-16 mb-5 text-[#EE444F]">
            Eduction
          </h3>
          <ul className="steps steps-vertical">
            <li className="step text-xs md:text-2xl py-5">
              "Diploma in Engineering at Moulvibazar Polytechnic Institute –
              Enrolled in 2022, Expected Completion in 2026"
            </li>
            <li className="step text-xs md:text-2xl  my-4">
              SSC : "Sristy Academic School, Tangail – SSC Journey Started in
              2020-2021"
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
