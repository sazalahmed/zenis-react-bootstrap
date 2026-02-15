import React from "react";
import useData from "./../../hooks/Hooks";
import ProductCategory from "../../components/productCategory/ProductCategory";
import Breadcrumb from "./../../components/breadcrumb/Breadcrumb";

const Category = () => {
  const { categorys } = useData();

  return (
    <>
      <Breadcrumb pageTitle="Category" />

      <div className="category_page mt-5 pt-4 mb-5 pb-5">
        <div className="container">
          <div className="row">
            {categorys?.map((category) => (
              <div className="col-xl-2 col-6 col-sm-4 col-md-3">
                <ProductCategory category={category} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
