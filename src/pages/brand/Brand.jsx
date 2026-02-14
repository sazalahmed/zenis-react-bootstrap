import React from "react";
import "./Brand.css";
import useData from "./../../hooks/Hooks";
import { Link } from "react-router-dom";
import BrandCard from "./../../components/brandcard/BrandCard";
import Breadcrumb from "./../../components/breadcrumb/Breadcrumb";

const Brand = () => {
  const { brands } = useData();

  return (
    <>
      <Breadcrumb pageTitle="Brands" />

      <div className="brand_page mt-5 pt-4 mb-5 pb-5">
        <div className="container mb-4">
          <div className="row">
            <div className="col-12">
              <ul className="brand_area">
                {brands
                  ?.sort(
                    (a, b) => new Date(b.created_at) - new Date(a.created_at),
                  )
                  .slice(-16)
                  .map((brand) => (
                    <li key={brand.id}>
                      <Link to="#">
                        <BrandCard brand={brand} />
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
