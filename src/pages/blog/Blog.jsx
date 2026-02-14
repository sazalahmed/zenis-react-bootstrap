import React from "react";
import useData from "./../../hooks/Hooks";
import BlogCard from "./../../components/blogCard/BlogCard";
import Breadcrumb from "./../../components/breadcrumb/Breadcrumb";

const Blog = () => {
  const { blogs } = useData();

  return (
    <>
      <Breadcrumb pageTitle="Blogs" />

      <div className="blog_page mt-5 pt-4 mb-5 pb-5">
        <div className="container">
          <div className="row">
            {blogs
              ?.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
              .map((blog) => (
                <div className="col-xl-3">
                  <BlogCard blog={blog} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
