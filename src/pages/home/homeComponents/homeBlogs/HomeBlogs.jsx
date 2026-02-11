import React from "react";
import SectionHeading from "./../../../../components/sectionHeadng/SectionHeading";
import { Link } from "react-router-dom";
import useData from "../../../../hooks/Hooks";
import BlogCard from "../../../../components/blogCard/BlogCard";

const HomeBlogs = () => {
  const { blogs } = useData();

  return (
    <div className="home_blogs mt-5 pt-5">
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-6 col-sm-9">
            <SectionHeading
              headingFirst={"Our"}
              headingShapes={"News  "}
              headingLast={"& Articles"}
            />
          </div>
          <div className="col-xl-6 col-sm-3">
            <div className="view_all_btn_area">
              <Link className="view_all_btn" to="/">
                View all
              </Link>
            </div>
          </div>
        </div>
        <div className="row mt-1">
          {blogs
            ?.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .slice(-4)
            .map((blog) => (
              <div className="col-xl-3">
                <BlogCard blog={blog} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomeBlogs;
