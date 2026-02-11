import React from "react";
import "./FavouriteProduct.css";
import SectionHeading from "./../../../../components/sectionHeadng/SectionHeading";
import favouriteImg from "../../../../assets/images/favourite_pro_2_banner_img.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useData from "./../../../../hooks/Hooks";
import FavouriteProductCard from "./favouriteProductCard/FavouriteProductCard";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const FavouriteProduct = () => {
  // receive data from hooks
  const { products } = useData();

  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <FaArrowRight />,
    prevArrow: <FaArrowLeft />,
  };

  return (
    <div className="favourite_product mt-5 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            <div className="bundle_product_banner">
              <img src={favouriteImg} alt="favourite image" />
              <div className="text">
                <h4>
                  This Spring On Apple <span>Up To 50K Off</span>
                </h4>
                <p>Limited Time Offer</p>
                <Link className="common_btn" to="/">
                  shop now <FaArrowRightLong />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8">
            <div className="row">
              <div className="col-xl-8">
                <SectionHeading
                  headingFirst={"Our"}
                  headingShapes={"Favorite"}
                  headingLast={"arrival Products"}
                />
              </div>
              <div className="row mt-4 pt-1">
                <Slider {...settings}>
                  {products
                    ?.filter((product) => product.is_favourite)
                    .sort(
                      (a, b) => new Date(b.created_at) - new Date(a.created_at),
                    )
                    .slice(-8)
                    .map((product) => (
                      <div className="col-xl-1-5" key={product.id}>
                        <FavouriteProductCard product={product} />
                      </div>
                    ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavouriteProduct;
