import React from "react";
import MenuCategory from "./../../../../components/menuCategory/MenuCategory";
import BannerSlider from "./bannerSlider/BannerSlider";
import BannerAdd from "./bannerAdd/BannerAdd";

const HeroSection = () => {
  return (
    <>
      <div className="banner_section">
        <div className="container">
          <div className="row">
            <div className="col-xl-2  d-none d-xxl-block">
              <MenuCategory />
            </div>
            <div className="col-xxl-7 col-lg-8">
              <BannerSlider />
            </div>
            <div className="col-xxl-3 col-lg-4 col-sm-12 col-md-12">
              <BannerAdd />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
