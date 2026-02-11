import React from "react";
import "./BestSellingProductCard.css";
import { Link } from "react-router-dom";
import { IoArrowUpSharp } from "react-icons/io5";

const BestSellingProductCard = ({ bestSellProduct }) => {
  return (
    <div className="best_selling_product_item">
      <img src={bestSellProduct.image} alt="" />
      <div className="text">
        <Link className="title" to="/">
          Kid's Western Party Dress
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
        <a className="buy_btn" href="shop_details.html">
          buy now <IoArrowUpSharp />
        </a>
      </div>
    </div>
  );
};

export default BestSellingProductCard;
