import React from "react";
import "./SpatialProduct.css";
import SectionHeading from "./../../../../components/sectionHeadng/SectionHeading";
import SpatialProAddImg from "../../../../assets/images/special_banner_img.jpg";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import useData from "./../../../../hooks/Hooks";
import SpatialProductCard from "./spatialProductCard/SpatialProductCard";

const SpatialProduct = () => {
  // receive product data from hooks
  const { products } = useData();

  return (
    <div className="spatial_products mt-5 pt-4">
      <div className="container mt-2">
        <div className="row lign-items-center">
          <div className="col-xl-6 col-sm-9">
            <SectionHeading
              headingFirst={"our"}
              headingShapes={"Spatial"}
              headingLast={"Brand Products"}
            />
          </div>
          <div className="col-xl-6 col-sm-3">
            <div className="view_all_btn_area">
              <Link className="view_all_btn" to="/product">
                View all
              </Link>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-xl-4">
            <div className="special_product_banner">
              <img src={SpatialProAddImg} alt="Spatial Product" />
              <div className="text">
                <h3>make your fashion look more changing</h3>
                <p>Get 50% Off on Selected Clothing Items</p>
                <Link className="common_btn" to="/">
                  shop now <FaArrowRightLong />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="row">
              {products
                //product filter for spatial product
                ?.filter((spatialProduct) => spatialProduct.is_spatial)
                //product short for new product
                .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                //product slice (latest/last 8 products)
                .slice(-8)
                //product looping
                .map((spatialProduct, index) => (
                  <div className="col-md-6" key={index}>
                    <SpatialProductCard product={spatialProduct} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpatialProduct;
