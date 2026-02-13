import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { GoGitCompare } from "react-icons/go";
import { GiSelfLove } from "react-icons/gi";
import { LuShoppingCart } from "react-icons/lu";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";

const ProductCard = ({ product }) => {
  // discount percent calculate start
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
    <div className="product_item">
      <div className="product_img">
        <img src={product.image} alt="Zenis" />
        <ul className="discount_list">
          {hasDiscount && (
            <li className="discount">
              <b>-</b> {discountPercent}%
            </li>
          )}
          {product.is_new && <li className="new">new</li>}
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
        <Link className="title" to={`/product/${product.id}`}>
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
        <p className="rating">
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStarHalf />
          <IoStarOutline />
          <span>({product.review_count} Reviews)</span>
        </p>
        <ul className="color">
          {Array.isArray(product.colors) ? (
            product.colors.map((color, index) => (
              <li
                key={index}
                title={color.name}
                style={{ backgroundColor: color.code }}
              />
            ))
          ) : product.color ? (
            <li title={product.color}>{product.color}</li>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default ProductCard;
