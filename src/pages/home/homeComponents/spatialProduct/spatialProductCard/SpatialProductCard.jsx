import React from "react";
import "./SpatialProductCard.css";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const SpatialProductCard = ({ spatialProduct }) => {
  const hasDiscount =
    typeof spatialProduct.discount_price === "number" &&
    spatialProduct.discount_price < spatialProduct.original_price;

  const discountPercent = hasDiscount
    ? Math.round(
        ((spatialProduct.original_price - spatialProduct.discount_price) /
          spatialProduct.original_price) *
          100,
      )
    : null;
  // discount percent calculate end

  return (
    <>
      <div className="special_product_item">
        <div className="special_product_img">
          <img src={spatialProduct.image} alt="Product" />
          {hasDiscount && (
            <span className="discount">
              <b>save</b> {discountPercent}%
            </span>
          )}
        </div>
        <div className="special_product_text">
          <Link className="title" to="/">
            {spatialProduct.title}
          </Link>
          <span>
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStarHalf />
            <IoStarOutline />
          </span>
          {typeof spatialProduct.discount_price === "number" ? (
            <p>
              ${Number(spatialProduct.discount_price).toFixed(2)}
              <del>${Number(spatialProduct.original_price).toFixed(2)}</del>
            </p>
          ) : (
            <p>${Number(spatialProduct.original_price).toFixed(2)}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default SpatialProductCard;
