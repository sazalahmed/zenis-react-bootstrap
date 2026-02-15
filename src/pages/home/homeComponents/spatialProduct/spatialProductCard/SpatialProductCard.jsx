import React from "react";
import "./SpatialProductCard.css";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const SpatialProductCard = ({ product }) => {
  const hasDiscount =
    typeof product.discount_price === "number" &&
    product.discount_price < product.original_price;

  const discountPercent = hasDiscount
    ? Math.round(
        ((product.original_price - product.discount_price) /
          product.original_price) *
          100,
      )
    : null;
  // discount percent calculate end

  return (
    <>
      <div className="special_product_item">
        <Link
          className="special_product_img"
          to={`/product-details/${product.id}`}
        >
          <img src={product.image} alt="Product" />
          {hasDiscount && (
            <span className="discount">
              <b>save</b> {discountPercent}%
            </span>
          )}
        </Link>
        <div className="special_product_text">
          <Link className="title" to={`/product-details/${product.id}`}>
            {product.title}
          </Link>
          <span>
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStarHalf />
            <IoStarOutline />
          </span>
          {typeof product.discount_price === "number" ? (
            <p>
              ${Number(product.discount_price).toFixed(2)}
              <del>${Number(product.original_price).toFixed(2)}</del>
            </p>
          ) : (
            <p>${Number(product.original_price).toFixed(2)}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default SpatialProductCard;
