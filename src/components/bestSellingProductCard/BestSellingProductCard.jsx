import React from "react";
import "./BestSellingProductCard.css";
import { Link } from "react-router-dom";
import { IoArrowUpSharp } from "react-icons/io5";

const BestSellingProductCard = ({ product }) => {
  return (
    <div className="best_selling_product_item">
      <img src={product.image} alt={product.title} />
      <div className="text">
        <Link className="title" to={`/product-details/${product.id}`}>
          {product.title}
        </Link>
        <p className="price">
          {typeof product.discount_price === "number" ? (
            <>
              ${Number(product.discount_price).toFixed(2)}
              <del>${Number(product.original_price).toFixed(2)}</del>
            </>
          ) : (
            <>${Number(product.original_price).toFixed(2)}</>
          )}
        </p>
        <Link className="buy_btn" to={`/product-details/${product.id}`}>
          buy now <IoArrowUpSharp />
        </Link>
      </div>
    </div>
  );
};

export default BestSellingProductCard;
