import React from "react";
import "./BlogDetails.css";
import { Link } from "react-router-dom";
import Breadcrumb from "./../../components/breadcrumb/Breadcrumb";
import useData from "./../../hooks/Hooks";
import { useParams } from "react-router-dom";
import { LuCalendarDays, LuUserRound, LuSearch } from "react-icons/lu";
import {
  FaRegComments,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa6";

const BlogDetails = () => {
  // receive blogs from hooks
  const { blogs } = useData();

  // receive blogs id from url params and find the blogs with the id
  const { id } = useParams();
  const findBlog = blogs.find((blog) => blog.id === parseInt(id));

  const popularCategoryCount = blogs
    ?.filter((blog) => blog.is_popular)
    .reduce((acc, blog) => {
      acc[blog.categoty] = (acc[blog.categoty] || 0) + 1;
      return acc;
    }, {});

  return (
    <>
      <Breadcrumb pageTitle="Blog Details" />

      <div className="blog_details blog_2 mt-5 pt-5 mb-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8">
              <div className="blog_details_left">
                <div className="blog_details_img_1">
                  <img
                    src={findBlog?.details_thumbnail}
                    alt={findBlog?.title}
                  />
                </div>
                <ul className="blog_details_top d-flex flex-wrap">
                  <li>
                    <span>
                      <LuCalendarDays />
                    </span>
                    March 28,2024
                  </li>
                  <li>
                    <span>
                      <LuUserRound />
                    </span>
                    By Douglas Lyphe
                  </li>
                  <li>
                    <span>
                      <FaRegComments />
                    </span>
                    3 Comment
                  </li>
                </ul>
                <h2>Maximize Room in Petite Bedroom Spaces.</h2>
                <p>
                  Many individuals and institutions invest in real estate for
                  potential appreciation in value, rental income combination
                  both. Real estate investment can be done directly by buying
                  properties or indirectly through real estate investment trusts
                  (REITs) and other investment vehicles.
                </p>
                <ul>
                  <li>
                    Real estate development involves the process of purchasing,
                    improving.
                  </li>
                  <li>
                    Real estate markets can experience fluctuations in property
                    values & demand.
                  </li>
                  <li>
                    Real estate development involves the process of purchasing,
                    improving.
                  </li>
                </ul>
                <h4>Embracing a sophisticated yet minimalist aesthetic.</h4>
                <p>
                  This includes single-family homes, condominiums, townhouses,
                  and apartment buildings. Residential real estate is often
                  classified by the number of dwelling units, such as
                  single-family (one unit), duplex (two units), triplex (three
                  units), or multi-family (four or more units). This includes
                  single-family homes, condominiums, townhouses, and apartment
                  buildings.
                </p>
                <ul className="blog_explaine">
                  <li>
                    Real estate development involves the process of purchasing,
                    improving.
                  </li>
                  <li>
                    This can include constructing buildings, roads, utilities,
                    and other infrastructure.
                  </li>
                  <li>
                    Real estate markets can experience fluctuations in property
                    values & demand.
                  </li>
                  <li>
                    Real estate development involves the process of purchasing,
                    improving.
                  </li>
                </ul>
                <h4>Embracing a sophisticated yet minimalist aesthetic.</h4>
                <p>
                  This includes single-family homes, condominiums, townhouses,
                  and apartment buildings. Residential real estate is often
                  classified by the number of dwelling units, such as
                  single-family (one unit), duplex (two units), triplex (three
                  units), or multi-family (four or more units). This includes
                  single-family homes, condominiums, townhouses, and apartment
                  buildings.
                </p>
              </div>

              <div className="blog_shear_area">
                <div className="row">
                  <div className="col-xl-7">
                    <div className="blog_shear_area_left d-flex flex-wrap">
                      <h5>Post Tags:</h5>
                      <ul className="blog_details_tag d-flex flex-wrap">
                        {findBlog?.tags.map((tag, index) => (
                          <li key={index}>
                            <Link to="/blog">{tag}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-5">
                    <div className="blog_shear_area_right d-flex flex-wrap">
                      <h5>Share:</h5>
                      <ul className="d-flex flex-wrap">
                        <li>
                          <Link to="#">
                            <FaFacebookF />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <FaTwitter />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <FaLinkedinIn />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <FaPinterestP />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="blog_details_comment">
                <h2>2 Comments</h2>
                <div className="blog_comment d-flex flex-wrap">
                  <div className="blog_comment_img">
                    {/* <img src="assets/images/comment_1.png" alt="img" className="img-fluid w-100"> */}
                  </div>
                  <div className="blog_comment_text">
                    <h4>Douglas Lyphe</h4>
                    <span>march 26,2024 at 10:47 pm</span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Omnis temporibus eaque repudiandae rem veniam quos iste
                      cupiditate, perspiciatis itaque nesciunt quae impedit
                      necessitatibus nostrum recusandae ea laboriosam doloremque
                      repellat hic?.
                    </p>
                  </div>
                </div>
                <div className="blog_comment d-flex flex-wrap">
                  <div className="blog_comment_img">
                    {/* <img src="assets/images/comment_2.png" alt="img" className="img-fluid w-100"> */}
                  </div>
                  <div className="blog_comment_text">
                    <h4>Lance Bogrol</h4>
                    <span>march 26,2024 at 10:47 pm</span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tenetur recusandae dolorem maiores minima ipsa! Suscipit
                      vitae officia sequi ipsam voluptates laborum ea fugiat ad
                      vero repellendus corrupti accusantium eligendi porro
                      perspiciatis eius, dolorem doloribus doloremque.
                    </p>
                  </div>
                </div>
                <div className="blog_comment d-flex flex-wrap">
                  <div className="blog_comment_img">
                    {/* <img src="assets/images/comment_1.png" alt="img" className="img-fluid w-100"> */}
                  </div>
                  <div className="blog_comment_text">
                    <h4>Douglas Lyphe</h4>
                    <span>march 26,2024 at 10:47 pm</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque turpis turpis, maximus ut augue et, imperdiet
                      tempor nisi. Fusce at lacus a risus viverra suscipit.
                    </p>
                  </div>
                </div>
                <div className="blog_comment d-flex flex-wrap">
                  <div className="blog_comment_img">
                    {/* <img src="assets/images/comment_2.png" alt="img" className="img-fluid w-100"> */}
                  </div>
                  <div className="blog_comment_text">
                    <h4>Lance Bogrol</h4>
                    <span>march 26,2024 at 10:47 pm</span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Omnis temporibus eaque repudiandae rem veniam quos iste
                      cupiditate, perspiciatis itaque nesciunt quae impedit
                      necessitatibus nostrum recusandae ea laboriosam doloremque
                      repellat hic.
                    </p>
                  </div>
                </div>

                <div className="pagination_area">
                  <nav aria-label="...">
                    <ul className="pagination mt_50">
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          <i className="far fa-arrow-left"></i>
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link active" to="#">
                          01
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          02
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          03
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          <i className="far fa-arrow-right"></i>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="blog_details_comment_input">
                <form>
                  <h2>Leave a Comment</h2>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="blog_form_input">
                        <input type="text" placeholder="Name" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="blog_form_input">
                        {/* <input type="email" placeholder="E-mail *"> */}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="blog_form_input">
                        {/* <input type="text" placeholder="Phone"> */}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="blog_form_input">
                        {/* <input type="text" placeholder="Subject"> */}
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="blog_form_input">
                        <textarea
                          rows="6"
                          placeholder="Your Comment Here..."
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="form-check blog_checkbox">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="flexCheckDefault"
                        />
                        {/* <input className="form-check-input" type="checkbox" id="flexCheckDefault"> */}
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Save my name, email, and website in this browser for
                          the next time I comment.{" "}
                        </label>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <button className="common_btn">
                        Submit Comment{" "}
                        <i className="fas fa-long-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-8">
              <div id="sticky_sidebar">
                <div className="blog_details_right">
                  <form action="#">
                    <input type="text" placeholder="Search..." />
                    <button type="submit">
                      <LuSearch />
                    </button>
                  </form>
                  <div className="blog_details_right_header sidebar_blog">
                    <h3>Popular Blog</h3>
                    {blogs
                      ?.filter((blog) => blog.is_popular)
                      .sort(
                        (a, b) =>
                          new Date(b.created_at) - new Date(a.created_at),
                      )
                      .slice(-3)
                      .map((blog) => (
                        <div
                          className="popular_blog d-flex flex-wrap"
                          key={blog.id}
                        >
                          <div className="popular_blog_img">
                            <img src={blog.image} alt={blog.title} />
                          </div>
                          <div className="popular_blog_text">
                            <p>
                              <span>
                                <LuCalendarDays />
                              </span>
                              {blog.created_at}
                            </p>
                            <Link className="title" to="/">
                              {blog.title}
                            </Link>
                          </div>
                        </div>
                      ))}
                  </div>
                  <div className="blog_details_right_header">
                    <h3>Property Categories</h3>
                    <ul className="sidebar_blog_category">
                      <ul className="sidebar_blog_category">
                        {Object.entries(popularCategoryCount || {})
                          // .sort((a, b) => b[1] - a[1])
                          // .slice(0, 5)
                          .map(([category, count]) => (
                            <li key={category}>
                              <Link to="/blog">
                                <p>{category}</p>
                                <span>({count})</span>
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </ul>
                  </div>
                  <div className="blog_details_right_header">
                    <h3>Tags</h3>
                    <ul className="blog_details_tag d-flex flex-wrap">
                      {findBlog?.tags.map((tag, index) => (
                        <li key={index}>
                          <Link to="/blog">{tag}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="blog_details_right_header">
                    <div className="blog_seidebar_add">
                      {/* <img src="assets/images/blog_sidebar_add_img.png" alt="blog add"
                                        className="img-fluid w-100"> */}
                      <div className="text">
                        <h4>Will help enhance your beauty.</h4>
                        <Link className="common_btn" to="/">
                          shop now
                          <i
                            className="fas fa-long-arrow-right"
                            aria-hidden="true"
                          ></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
