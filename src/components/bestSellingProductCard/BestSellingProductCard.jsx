import React from "react";
import "./BestSellingProductCard.css";
import { Link } from "react-router-dom";
import { IoArrowUpSharp } from "react-icons/io5";

const BestSellingProductCard = ({ bestSellProduct }) => {
  return (
    <div className="best_selling_product_item">
      <img src={bestSellProduct.image} alt="" />
      <div className="text">
        <Link className="title" to={`/product/${bestSellProduct.id}`}>
          {bestSellProduct.title}
        </Link>
        <p className="price">
          {typeof bestSellProduct.discount_price === "number" ? (
            <>
              ${Number(bestSellProduct.discount_price).toFixed(2)}
              <del>${Number(bestSellProduct.original_price).toFixed(2)}</del>
            </>
          ) : (
            <>${Number(bestSellProduct.original_price).toFixed(2)}</>
          )}
        </p>
        <Link className="buy_btn" to={`/product/${bestSellProduct.id}`}>
          buy now <IoArrowUpSharp />
        </Link>
      </div>
    </div>
  );
};

export default BestSellingProductCard;
