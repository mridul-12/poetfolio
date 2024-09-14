import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <button>error</button>
      <Link to={'/'}>
        {" "}
        <button>go Back</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
