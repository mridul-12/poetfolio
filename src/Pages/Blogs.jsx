import { useEffect, useState } from "react";
import BlogCard from "../Components/BlogCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setBlogs(data);
      });
  }, []);
  const blogsCards = blogs.slice(0, 6);

  return (
    <div>
      <h3 className="text-center font-bold text-3xl mt-16 mb-5 text-[#EE444F]">
        Blogs
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {blogsCards?.map((blog) => (
          <BlogCard key={blog.id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
