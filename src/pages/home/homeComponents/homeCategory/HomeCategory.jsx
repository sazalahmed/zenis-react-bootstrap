import React from "react";
import useData from "../../../../hooks/Hooks";
import ProductCategory from "../../../../components/productCategory/ProductCategory";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const HomeCategory = () => {
  const { categorys } = useData();

  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    nextArrow: <FaArrowRight />,
    prevArrow: <FaArrowLeft />,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    // ],
  };

  return (
    <>
      <div className="container mt-5 pt-4">
        <div className="row">
          <Slider {...settings}>
            {categorys?.map((category, index) => (
              <div className="col-2">
                <ProductCategory key={index} category={category} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default HomeCategory;
