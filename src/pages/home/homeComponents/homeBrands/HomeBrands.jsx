import React from "react";
import "./HomeBrands.css";
import SectionHeading from "./../../../../components/sectionHeadng/SectionHeading";
import { Link } from "react-router-dom";
import useData from "../../../../hooks/Hooks";
import BrandCard from "./../../../../components/brandcard/BrandCard";

const HomeBrands = () => {
  const { brands } = useData();

  return (
    <div className="home_brands mt-5 pt-4">
      <div className="container mt-3">
        <div className="row lign-items-center">
          <div className="col-xl-6 col-sm-9">
            <SectionHeading headingFirst={"our Top"} headingShapes={"Brands"} />
          </div>
          <div className="col-xl-6 col-sm-3">
            <div className="view_all_btn_area">
              <Link className="view_all_btn" to="/brand">
                View all
              </Link>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12">
            <ul className="brand_area">
              {brands
                ?.sort(
                  (a, b) => new Date(b.created_at) - new Date(a.created_at),
                )
                .slice(-16)
                .map((brand, index) => (
                  <li key={index}>
                    <Link to="/">
                      <BrandCard brand={brand} />
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBrands;
