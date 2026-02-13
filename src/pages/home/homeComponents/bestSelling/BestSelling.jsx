import React from "react";
import "./BestSelling.css";
import SectionHeading from "./../../../../components/sectionHeadng/SectionHeading";
import { Link } from "react-router-dom";
import useData from "./../../../../hooks/Hooks";
import BestSellingProductCard from "../../../../components/bestSellingProductCard/BestSellingProductCard";
import bestSellLargeImg from "../../../../assets/images/best_sell_pro_img_4.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

const BestSelling = () => {
  const { bestSellingProduct } = useData();

  return (
    <div className="best_selling mt-5 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-9">
            <SectionHeading
              headingFirst={"Our"}
              headingShapes={"Best "}
              headingLast={"Selling Products"}
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
          <div className="col-xl-7">
            <div className="row">
              {bestSellingProduct.map((product) => (
                <div className="col-xl-4" key={product.id}>
                  <BestSellingProductCard bestSellProduct={product} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-xl-5">
            <div className="best_selling_product_item_large">
              <img src={bestSellLargeImg} alt="" />
              <div className="text">
                <Link
                  className="title"
                  to={`/product/${bestSellingProduct.id}`}
                >
                  Best Sales Discount And Offers
                </Link>
                <p className="price">
                  $89.00 <del>$12.00</del>
                </p>
                <Link
                  className="common_btn"
                  to={`/product/${bestSellingProduct.id}`}
                >
                  buy now <FaArrowRightLong />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
