import React from "react";
import "./BannerSlider.css";
import { FaArrowRightLong } from "react-icons/fa6";
import useData from "./../../../../../hooks/Hooks";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const BannerSlider = () => {
  const { banners } = useData();

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="row banner_2_slider">
        <Slider {...settings}>
          {banners?.map((banner, index) => (
            <div className="col-xl-12" key={index}>
              <div
                className="banner_slider_2"
                style={{ backgroundImage: `url(${banner.image})` }}
              >
                <div className="banner_slider_2_text">
                  <h3>{banner.subHeading}</h3>
                  <h1>{banner.heading}</h1>
                  <Link className="common_btn" to="/">
                    Shop Now <FaArrowRightLong />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default BannerSlider;
