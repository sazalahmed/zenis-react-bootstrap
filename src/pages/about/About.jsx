import React from "react";
import "./About.css";
import Breadcrumb from "./../../components/breadcrumb/Breadcrumb";
import aboutImg from "../../assets/images/about_img.jpg";
import whyChooseImg from "../../assets/images/why_choose_img.jpg";
import Features from "../home/homeComponents/features/Features";
import SectionHeading from "./../../components/sectionHeadng/SectionHeading";
import { IoShirtOutline, IoReturnUpBack } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import HomeBrands from "../home/homeComponents/homeBrands/HomeBrands";
import { Link } from "react-router-dom";
import { CiPlay1 } from "react-icons/ci";
import videoBg from "../../assets/images/about_video_bg.jpg";

const About = () => {
  return (
    <>
      <Breadcrumb pageTitle="About Us" />

      <div className="about_page mt-5 pt-5">
        <div className="about_us mb-5 pb-4">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-xxl-5 col-md-10 col-lg-6">
                <div className="about_us_img">
                  <div className="img">
                    <img src={aboutImg} alt="" />
                    {/* <img src="assets/images/about_img.jpg" alt="about us" className="img-fluid w-100"> */}
                  </div>
                  <h3>
                    12+ <span>Years experience</span>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate officiis architecto reiciendis.
                    <span>jhon deo</span>
                  </p>
                </div>
              </div>
              <div className="col-xxl-6 col-lg-6">
                <div className="about_us_text">
                  <h6>About Company</h6>
                  <h2>Well-coordinated Teamwork Speaks About Us</h2>
                  <p className="description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate aspernatur molestiae minima pariatur consequatur
                    voluptate sapiente deleniti soluta.
                  </p>
                  <ul>
                    <li>
                      <h4>trusted partner</h4>
                      <p>
                        Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing
                        Elit. Minus, Officiis Placeat Iusto Quasi Adipisci
                        Impedit Delectus Beatae Ab Maxime. Lorem Ipsum Dolor Sit
                        Amet Consectetur, Adipisicing Elit.{" "}
                      </p>
                    </li>
                    <li>
                      <h4>quality products</h4>
                      <p>
                        Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing
                        Elit. Minus, Officiis Placeat Iusto Quasi Adipisci
                        Impedit Delectus Beatae Ab Maxime. Lorem Ipsum Dolor Sit
                        Amet Consectetur,{" "}
                      </p>
                    </li>
                    <li>
                      <h4>first Delivery</h4>
                      <p>
                        Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing
                        Elit. Minus, Officiis Placeat Iusto Quasi Adipisci
                        Impedit Delectus Beatae Ab Maxime. Lorem Ipsum Dolor Sit
                        Amet Consectetur Adipisicing Elit Minus Officiis.
                      </p>
                    </li>
                    <li>
                      <h4>secure payment</h4>
                      <p>
                        Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing
                        Elit. Minus, Officiis Placeat Iusto Quasi Adipisci
                        Impedit Delectus Beatae Ab Maxime. Lorem Ipsum Dolor Sit
                        Amet Consectetur
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Features />

        <div className="mt-5 pt-5">
          <div className="about_choose pt-5 pb-5">
            <div className="container pt-5 pb-5">
              <div className="row">
                <div className="col-xxl-8 col-lg-7">
                  <div className="about_choose_text">
                    <div className="row">
                      <div className="col-12 mb-3">
                        <SectionHeading
                          headingFirst={"Why we are the"}
                          headingShapes={"best"}
                        />
                      </div>
                      <div className="col-xl-6 col-md-6">
                        <div className="about_choose_text_box">
                          <span>
                            <IoShirtOutline />
                          </span>
                          <h4>quality products</h4>
                          <p>
                            Objectively pontificate quality models before
                            intuitive information.
                          </p>
                        </div>
                      </div>
                      <div className="col-xl-6 col-md-6 wow fadeInUp">
                        <div className="about_choose_text_box">
                          <span>
                            <TbTruckDelivery />
                          </span>
                          <h4>Fast Delivery</h4>
                          <p>
                            Objectively pontificate quality models before
                            intuitive information.
                          </p>
                        </div>
                      </div>
                      <div className="col-xl-6 col-md-6 wow fadeInUp">
                        <div className="about_choose_text_box">
                          <span>
                            <IoReturnUpBack />
                          </span>
                          <h4>return policy</h4>
                          <p>
                            Objectively pontificate quality models before
                            intuitive information.
                          </p>
                        </div>
                      </div>
                      <div className="col-xl-6 col-md-6 wow fadeInUp">
                        <div className="about_choose_text_box">
                          <span>
                            <BiSupport />
                          </span>
                          <h4>24/7 Service</h4>
                          <p>
                            Objectively pontificate quality models before
                            intuitive information.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4 col-lg-5">
                  <div className="about_choose_img">
                    <img src={whyChooseImg} alt="Why Choose Us" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="div pb-4">
          <HomeBrands />
        </div>

        <div className="mt-5 pt-5 mb-5 pb-5">
          <div className="about_video mt_100">
            <div className="container">
              <div className="row">
                <div className="col-12 wow fadeInUp">
                  <div className="about_video_area">
                    <img src={videoBg} alt="About Video" />
                    <div className="overlay">
                      <Link className="venobox play_btn" to="#">
                        <CiPlay1 />
                      </Link>
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

export default About;
