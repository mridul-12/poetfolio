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
        <h1 className="mb-5 md:text-4xl text-2xl lg:text-5xl font-bold  bg-gradient-to-r from-orange-700 via-red-500 to-green-400 text-transparent bg-clip-text animate-gradient">
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
       

          <p className="mb-5 text-left font-semibold wfu lg:text-xl text-xs text-[#24C06A]">
            I am currently pursuing a Diploma in Engineering at Moulvibazar
            Polytechnic Institute, specializing in Computer Science and
            Technology (CST). My academic journey has provided me with a strong
            foundation in various aspects of computer science
          </p>
          <div className=" flex gap-2 items-center w-full   ">
            <Link
              to={"/contact"}
              className="bg-gradient-to-r from-blue-500 to-green-500 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500 text-white font-bold py-2 px-4 rounded flex items-center gap-1 "
            >
              <IoCallSharp></IoCallSharp> Contact
            </Link>
            <Link
              to={"/about"}
              className="bg-gradient-to-r from-blue-500 to-green-500 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500 text-white font-bold py-2 px-4 rounded flex items-center gap-1  "
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
