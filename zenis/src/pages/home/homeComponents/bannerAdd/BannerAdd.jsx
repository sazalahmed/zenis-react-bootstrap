import React from "react";
import "./BannerAdd.css";
import BannerAddBg from "../../../../assets/images/hero_add_bg.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

const BannerAdd = () => {
  return (
    <>
      <div
        class="banner_2_add"
        style={{ backgroundImage: `url(${BannerAddBg})` }}
      >
        <div class="text">
          <h4>Summer Offer</h4>
          <h2>Make Your Fashion Story Unique Every Day</h2>
          <a class="common_btn" href="shop_details.html">
            shop now <FaArrowRightLong />
          </a>
        </div>
      </div>
    </>
  );
};

export default BannerAdd;
