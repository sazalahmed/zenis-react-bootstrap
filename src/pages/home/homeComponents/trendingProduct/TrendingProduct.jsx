import React from "react";
import "./TrendingProduct.css";
import SectionHeading from "./../../../../components/sectionHeadng/SectionHeading";
import { Link } from "react-router-dom";
import useData from "./../../../../hooks/Hooks";
import ProductCard from "./../../../../components/productCard/ProductCard";

const TrendingProduct = () => {
  // receive data from hooks
  const { products } = useData();

  return (
    <div className="trending_product mt-5 pt-5">
      <div className="container">
        <div className="row">
          <div className="row lign-items-center">
            <div className="col-lg-6">
              <SectionHeading
                headingShapes={"Trending "}
                headingLast={"Products"}
              />
            </div>
            <div className="col-lg-6">
              <div className="filter_btn_area">
                {products.map((product) => (
                  <button>{product.category}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {products
            //product slice
            .slice(0, 10)
            //product looping
            .map((product) => (
              <div className="col-xl-1-5" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingProduct;
