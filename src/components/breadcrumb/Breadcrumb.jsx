import React from "react";
import "./Breadcrumb.css";
import breadcrumbBg from "../../assets/images/page_banner_bg.jpg";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";

const Breadcrumb = ({ pageTitle }) => {
  return (
    <div
      className="page_banner"
      style={{ backgroundImage: `url(${breadcrumbBg})` }}
    >
      <div className="page_banner_overlay">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="page_banner_text">
                <h1>{pageTitle}</h1>
                <ul>
                  <li>
                    <Link to="/">
                      <GoHome />
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Shop</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
