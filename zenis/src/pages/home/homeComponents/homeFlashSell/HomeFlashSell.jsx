import React from "react";
import SectionHeading from "../../../../components/sectionHeadng/SectionHeading";
import { Link } from "react-router-dom";
import useData from "../../../../hooks/Hooks";
import ProductCard from "../../../../components/productCard/ProductCard";

const HomeFlashSell = () => {
  const { products } = useData();

  return (
    <div className="flash_sell mt-5 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-md-3 col-xl-4">
            <SectionHeading headingShapes={"flash"} headingLast={"Sell"} />
          </div>
          <div className="col-xxl-6 col-md-9 col-xl-8">
            <div className="d-flex flex-wrap justify-content-end">
              <div className="count_down me-5">
                <h4>Countdown Here</h4>
              </div>
              <div className="view_all_btn_area">
                <Link className="view_all_btn" to="/">
                  View all
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {products.map((product) => (
            <div className="col-xl-1-5">
              <ProductCard key={product.id} product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeFlashSell;
