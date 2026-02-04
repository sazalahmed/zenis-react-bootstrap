import React from "react";
import "./Header.css";
import logo from "../../../assets/images/logo_2.png";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { HiOutlinePhoneMissedCall } from "react-icons/hi";
import { CSSProperties } from "react";
import Select from "react-select";

const Header = () => {
  const categoryOptions = [
    { value: "all category", label: "all category" },
    { value: "fashion", label: "fashion" },
    { value: "elentronics", label: "elentronics" },
    { value: "fashion & beauty", label: "fashion & beauty" },
    { value: "jewelry", label: "jewelry" },
    { value: "grocery", label: "grocery" },
  ];

  const languageOptions = [
    { value: "english", label: "english" },
    { value: "arabic", label: "arabic" },
    { value: "hindi", label: "hindi" },
    { value: "chinese", label: "chinese" },
  ];

  const currencyOptions = [
    { value: "$USD", label: "$USD" },
    { value: "€EUR", label: "€EUR" },
    { value: "¥JPY", label: "¥JPY" },
    { value: "£GBP", label: "£GBP" },
    { value: "₹INR", label: "₹INR" },
  ];

  return (
    <div>
      <header className="header_2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2">
              <div className="header_logo_area">
                <Link className="header_logo" to="/">
                  <img src={logo} alt="Zenis"></img>
                </Link>
                <div
                  className="mobile_menu_icon d-block d-lg-none"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasWithBothOptions"
                  aria-controls="offcanvasWithBothOptions"
                >
                  <span className="mobile_menu_icon">
                    <i className="far fa-stream menu_icon_bar"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-5 col-lg-5 d-none d-lg-block">
              <form>
                <Select
                  options={categoryOptions}
                  defaultValue={categoryOptions[0]}
                />
                <div className="input">
                  <input type="search" placeholder="Search your product" />
                  <button type="submit">
                    <FiSearch />
                  </button>
                </div>
              </form>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-5 d-none d-lg-flex">
              <div className="header_support_user d-flex flex-wrap">
                <div className="header_support">
                  <span className="icon">
                    <HiOutlinePhoneMissedCall />
                  </span>
                  <h3>
                    Hotline:
                    <Link className="header_logo" to="callto:1234567890">
                      <span>+(402) 763 282 46</span>
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="topbar_right d-flex flex-wrap align-items-center justify-content-end">
                <Select
                  className="language"
                  options={languageOptions}
                  defaultValue={languageOptions[0]}
                />
                <Select
                  className="currency"
                  options={currencyOptions}
                  defaultValue={currencyOptions[0]}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
