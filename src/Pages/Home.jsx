import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";
import AboutHome from "../Components/AboutHome";
import Contact from "./Contact";
import { useEffect, useState } from "react";
import Loader from "../Components/Loading";
// import Blogs from "./Blogs";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div>
          <Helmet>
            <title>MRIDUL | Home Page</title>
          </Helmet>
          {/* banner */}
          <Banner />
          {/* about  */}
          <AboutHome />
       
          {/* Blogs */}
         
          {/* contact */}
          <Contact />
        </div>
      )}
    </div>
  );
};

export default Home;
