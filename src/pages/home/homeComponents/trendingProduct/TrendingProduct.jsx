import React from "react";
import "./TrendingProduct.css";
import SectionHeading from "./../../../../components/sectionHeadng/SectionHeading";
import { Link } from "react-router-dom";
import useData from "./../../../../hooks/Hooks";
import { useState, useEffect } from "react";
import ProductCard from "./../../../../components/productCard/ProductCard";

const TrendingProduct = () => {
  // receive data from hooks
  const { categorys, products } = useData();

  var [categoryName, setCategoryName] = useState();

  useEffect(() => {
    if (categorys?.length) {
      const firstTrending = categorys.find((category) => category.is_trending);
      if (firstTrending) {
        setCategoryName(firstTrending.title);
      }
    }
  }, [categorys]);

  const handleCategoryName = (title) => {
    setCategoryName(title);
  };

  const filterProduct = products.filter(
    (product) => product.category == categoryName,
  );

  return (
    <div className="trending_product mt-5 pt-5">
      <div className="container">
        <div className="row lign-items-center">
          <div className="col-lg-6">
            <SectionHeading
              headingShapes={"Trending "}
              headingLast={"Products"}
            />
          </div>
          <div className="col-lg-6">
            <div className="filter_btn_area d-flex flex-wrap gap-2 justify-content-end">
              {categorys
                ?.filter((category) => category.is_trending)
                .map((category, index) => (
                  <button
                    key={index}
                    onClick={() => handleCategoryName(category?.title)}
                    className={categoryName === category.title ? "active" : ""}
                  >
                    {category.title}
                  </button>
                ))}
            </div>
          </div>
        </div>
        <div className="row mt-1">
          {filterProduct
            //product slice (0 to 10 products)
            .slice(0, 10)
            //product looping
            .map((product, index) => (
              <div className="col-xl-1-5" key={index}>
                <ProductCard product={product} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingProduct;
