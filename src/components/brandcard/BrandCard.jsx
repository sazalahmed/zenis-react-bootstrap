import React from "react";
import "./BrandCard.css";

const BrandCard = ({ brand }) => {
  return (
    <div className="single_brand">
      <img src={brand.brand_logo} alt="" />
    </div>
  );
};

export default BrandCard;
