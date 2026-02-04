import React from "react";
import "./ProductCategory.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const ProductCategory = ({ category }) => {
  return (
    <Link className="category_item" to="/">
      <div className="img">
        <img src={category.image} alt="Zenis" />
      </div>
      <h3>{category.title}</h3>
    </Link>
  );
};

export default ProductCategory;
