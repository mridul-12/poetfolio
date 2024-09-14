/* eslint-disable react/prop-types */
import { ScaleLoader } from "react-spinners";
const Loader = ({loading}) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-180px)]">
      <ScaleLoader size={100} color="#C550CF" loading={loading}></ScaleLoader>
    </div>
  );
};

export default Loader;