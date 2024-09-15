import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const BlogCard = ({ blog }) => {
//   console.log(blog);
  return (
    <div>
      <div className="card bg-base-100  shadow-xl h-full">
        <figure className="px-10 pt-10">
          <img src={blog.image} alt="error image" className="rounded-xl" />
        </figure>
        <div className="card-body items-center ">
          
            <h2 className="card-title">{blog.blogName}</h2>
         
            <h2 className="">date:{blog.date}</h2>
          <p>{blog.description}</p>
          <div className="card-actions">
            <Link to={`/blog/${blog.id}`} className="bg-gradient-to-r from-blue-500 to-green-500 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500 text-white font-bold py-2 px-4 rounded flex items-center gap-1" >detsils</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
