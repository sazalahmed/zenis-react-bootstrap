import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { GoGitCompare } from "react-icons/go";
import { GiSelfLove } from "react-icons/gi";
import { LuShoppingCart } from "react-icons/lu";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";

const ProductCard = ({ product }) => {
  return (
    <div className="product_item">
      <div className="product_img">
        <img src={product.image} alt="Zenis" />
        <ul className="discount_list">
          <li className="discount">
            {" "}
            <b>-</b> 75%
          </li>
          <li className="new"> new</li>
        </ul>
        <ul className="btn_list">
          <li>
            <Link to="/">
              <GoGitCompare />
            </Link>
          </li>
          <li>
            <Link to="/">
              <GiSelfLove />
            </Link>
          </li>
          <li>
            <Link to="/">
              <LuShoppingCart />
            </Link>
          </li>
        </ul>
      </div>
      <div className="product_text">
        <Link className="title" to="/">
          {product.title}
        </Link>
        <p className="price">
          {product.discount_price} <del>{product.original_price}</del>
        </p>
        <p className="rating">
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStarHalf />
          <IoStarOutline />
          <span>({product.review_count} Reviews)</span>
        </p>
        <ul className="color">
          <li>Red</li>
          <li>blue</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductCard;
