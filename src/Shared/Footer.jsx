/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";
import { FaFacebook, FaReact } from "react-icons/fa";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-300 text-xs rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-purple-800  link link-hover" : "link link-hover"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive ? "text-purple-800  link link-hover" : "link link-hover"
          }
        >
          About
        </NavLink>
        {/* <NavLink
          to={"/blogs"}
          className={({ isActive }) =>
            isActive ? "text-purple-800  link link-hover" : "link link-hover"
          }
        >
          blogs
        </NavLink> */}
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive ? "text-purple-800  link link-hover" : "link link-hover"
          }
        >
          contact
        </NavLink>
      </nav>
      <h4 className="text-xl flex items-center">
        Let's connect on social networks <BiSolidDownArrow></BiSolidDownArrow>
      </h4>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGonzb4vjmpzwAAAZCGNetYaTBkmPmP3jwbyu15qSZsZVSa01c5lbIg6a22QjHL8Mf9sDcVq7rvWtCOZsF0One3ecf7WwC9NYgSj07FJv4AXXmn3LI444T7zHLq47D4Huetwe4=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmd-nayeem-miah-734719307"
            target="blank"
          >
            <FaInstagram className="text-4xl text-blue-600 bg-instagram-gradient"></FaInstagram>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100042968569904"
            target="blank"
          >
            <FaFacebook className="text-4xl text-blue-600"></FaFacebook>
          </a>
        </div>
        <p className="my-3 flex">
          developer by
          <a
            href="https://nayeemportfolio-70.web.app/"
            target="_blank"
            className="text-blue-700 hover:underline px-1 flex items-center hover:scale-125"
          >
            <span> NAYEEM </span>
            <span className="ml-1 animate-spin">
              <FaReact size={14}> </FaReact>
            </span>
          </a>
        </p>
      </nav>

      <div className="text-[14px]">
        <div>
          Copyright © ${new Date().getFullYear()} - All right reserved by MRIDUL
        </div>
      </div>
    </footer>
  );
};

export default Footer;
