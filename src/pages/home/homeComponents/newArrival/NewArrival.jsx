import React from "react";
import "./NewArrival.css";
import SectionHeading from "./../../../../components/sectionHeadng/SectionHeading";
import { Link } from "react-router-dom";
import useData from "./../../../../hooks/Hooks";
import ProductCard from "./../../../../components/productCard/ProductCard";

const NewArrival = () => {
  const { products } = useData();

  return (
    <div className="new_arrival mt-5 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-9">
            <SectionHeading
              headingFirst={"Our"}
              headingShapes={"new "}
              headingLast={"arrival Products"}
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
          {products
            ?.filter((product) => product.is_new)
            //product short for new product
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            //product slice (latest/last 8 products)
            .slice(-5)
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

export default NewArrival;
