import React from "react";
import Blog from "@/app/components/Blog/Blog";

import blogsData from "@/constants/blogs";

const Blogs = () => {
  return (
    <div className="flex flex-col items-center min-h-screen " id="Blogs">
      <h2 className="text-4xl underline mb-5">Blogs</h2>

      <ul className="list-none sm:w-11/12 w-3/5 flex flex-col items-center gap-4 lg:flex-row lg:mx-10 lg:mb-3 ">
        {blogsData.map((blog) => {
          return (
            <Blog
              key={blog.id}
              id={blog.id}
              title={blog.title}
              image={blog.image}
              desc={blog.desc}
              link={blog.link}
            ></Blog>
          );
        })}
      </ul>
      <a
        href="https://www.linkedin.com/in/mo-adeeb-alkahat/"
        className="bg-lime-950  shadow-lg shadow-lime-800/50 border-double border-4 border-lime-500  w-36 h-20  text-center rounded-md mt-2 mb-5 flex items-center justify-center"
      >
        {" "}
        more blogs{" "}
      </a>
    </div>
  );
};

export default Blogs;
