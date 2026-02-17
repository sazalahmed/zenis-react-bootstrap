import React from "react";
import useData from "./../../hooks/Hooks";
import BlogCard from "./../../components/blogCard/BlogCard";
import Breadcrumb from "./../../components/breadcrumb/Breadcrumb";
import { useState } from "react";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

const Blog = () => {
  const { blogs } = useData();
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 8;

  const sortedBlogs = blogs
    ?.slice()
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  const totalPages = Math.ceil(sortedBlogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const paginatedBlogs = sortedBlogs.slice(
    startIndex,
    startIndex + blogsPerPage,
  );

  return (
    <>
      <Breadcrumb pageTitle="Blogs" />

      <div className="blog_page mt-5 pt-4 mb-5 pb-5">
        <div className="container">
          <div className="row">
            {paginatedBlogs
              ?.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
              .map((blog, index) => (
                <div className="col-xl-3" key={index}>
                  <BlogCard blog={blog} />
                </div>
              ))}
          </div>
          <div className="row">
            <div className="col-12">
              {totalPages > 1 && (
                <div className="pagination">
                  <button
                    disabled={currentPage <= 1}
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                  >
                    <GrLinkPrevious />
                  </button>

                  {[...Array(totalPages)].map((_, index) => {
                    const page = index + 1;
                    return (
                      <button
                        key={page}
                        className={currentPage === page ? "active" : ""}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </button>
                    );
                  })}

                  <button
                    disabled={currentPage >= totalPages}
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                  >
                    <GrLinkNext />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
