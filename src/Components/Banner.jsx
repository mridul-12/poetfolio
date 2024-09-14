import { Typewriter } from "react-simple-typewriter";

import { IoCallSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
// import profile from "../../../assets/Profile.png";
import bannerImg from "../assets/1000013693-01.jpeg";
import { FaHandsBound } from "react-icons/fa6";

// import { RiReactjsFill } from "react-icons/ri";

const Banner = () => {
  return (
    <div
      className="hero lg:h-[600px] md:h-[400px] h-[350px]"
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className=" text-neutral-content text-center lg:flex items-center justify-between">
      <div className="max-w-screen-md">
        <div className="">
        <h1 className="mb-5 md:text-4xl text-2xl lg:text-5xl font-bold text-red-600">
            {" "}
            <Typewriter
              words={["Hey, I'm MRIDUL."]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
       

          <p className="mb-5 text-left font-semibold wfu lg:text-xl text-xs">
            I am currently pursuing a Diploma in Engineering at Moulvibazar
            Polytechnic Institute, specializing in Computer Science and
            Technology (CST). My academic journey has provided me with a strong
            foundation in various aspects of computer science
          </p>
          <div className=" flex gap-2 items-center w-full   ">
            <Link
              to={"/contact"}
              className="btn btn-secondary hover:bg-purple-700 flex items-center"
            >
              <IoCallSharp></IoCallSharp> Contact
            </Link>
            <Link
              to={"/about"}
              className="btn btn-secondary hover:bg-purple-700 "
            >
                <FaHandsBound></FaHandsBound>
              About
            </Link>
          </div>
          <div className="flex-1">

          </div>
        </div>
         
        </div>
      </div>
    </div>
  );
};

export default Banner;
