import React from "react";
import "./HomeFlashSell.css";
import SectionHeading from "../../../../components/sectionHeadng/SectionHeading";
import { Link } from "react-router-dom";
import useData from "../../../../hooks/Hooks";
import ProductCard from "../../../../components/productCard/ProductCard";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";

const HomeFlashSell = () => {
  // receive data from hooks
  const { products } = useData();

  // Slick slider settings
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <FaArrowRight />,
    prevArrow: <FaArrowLeft />,
  };

  // set flsh sell time
  const flashSellEnd = new Date("2027-02-15T23:59:59");

  return (
    <div className="flash_sell mt-5 pt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-6 col-md-3 col-xl-4">
            <SectionHeading headingShapes={"flash"} headingLast={"Sell"} />
          </div>
          <div className="col-xxl-6 col-md-9 col-xl-8">
            <div className="d-flex flex-wrap justify-content-end">
              <div className="home_flash_sell_countdown">
                <Countdown
                  date={flashSellEnd}
                  renderer={({ days, hours, minutes, seconds, completed }) => {
                    if (completed) return <span>Flash Sell Ended</span>;

                    const pad = (num) => String(num).padStart(2, "0");

                    return (
                      <>
                        <p>
                          {pad(days)} <span>Days</span>
                        </p>
                        <p>
                          {pad(hours)} <span>Hours</span>
                        </p>
                        <p>
                          {pad(minutes)} <span>Minutes</span>
                        </p>
                        <p>
                          {pad(seconds)} <span>Seconds</span>
                        </p>
                      </>
                    );
                  }}
                />
              </div>
              <div className="view_all_btn_area">
                <Link className="view_all_btn" to="/flash-sell">
                  View all
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4 pt-3">
          <Slider {...settings}>
            {products
              //product filter for flash sell
              ?.filter((product) => product.is_flash_sell)
              //product sort for new product
              .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
              //product slice
              .slice(0, 8)
              //product looping
              .map((product, index) => (
                <div className="col-xl-1-5" key={index}>
                  <ProductCard product={product} />
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HomeFlashSell;
