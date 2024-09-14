import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Main = () => {
  return (
    <div className="">
      {/* navbar */}
      <div className="w-full ">
        <Navbar></Navbar>
      </div>
      <div className=" py-16 max-w-screen-xl mx-auto min-h-[calc(100vh-234px)] ">
        <Outlet></Outlet>
      </div>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default Main;
