import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import MenuCategory from "../../menuCategory/MenuCategory";
// import images
import compareIcon from "../../../assets/images/compare_black.svg";
import loveIcon from "../../../assets/images/love_black.svg";
import cartIcon from "../../../assets/images/cart_black.svg";
import logo from "../../../assets/images/logo_2.png";
// import icons
import {
  HiBars3BottomLeft,
  HiOutlineUser,
  HiOutlineShoppingBag,
} from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { LuUserRound, LuLayoutDashboard } from "react-icons/lu";
import { IoHeartOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";

const Menu = () => {
  const [showCategory, setShowCategory] = useState(false);
  const handleCategoryToggle = () => {
    setShowCategory((prev) => !prev);
  };

  return (
    <>
      <nav className="main_menu d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex flex-wrap">
              <div className="main_menu_area">
                <div
                  className={`menu_category_area ${
                    showCategory ? "show_category" : ""
                  }`}
                  onClick={handleCategoryToggle}
                >
                  <Link className="header_logo d-none" to="/">
                    <img src={logo} alt="Zenis" />
                  </Link>
                  <div className="menu_category_bar">
                    <p>
                      <span>
                        <HiBars3BottomLeft />
                      </span>
                      Browse Categories
                    </p>
                    <IoIosArrowDown className="ratate_arrow" />
                  </div>
                  <MenuCategory />
                </div>
                <ul className="menu_item">
                  <li>
                    <Link className="active" to="/">
                      home
                    </Link>
                  </li>
                  <li>
                    <Link to="/product">shop</Link>
                  </li>
                  <li>
                    <Link to="/flash-sell">Flash Deals</Link>
                  </li>
                  <li>
                    <Link to="/about">about us</Link>
                  </li>
                  <li>
                    <Link to="/blog">blog</Link>
                  </li>
                  <li>
                    <Link to="/contact">contact</Link>
                  </li>
                </ul>
                <ul className="menu_icon">
                  <li>
                    <Link to="/compare">
                      <b>
                        <img src={compareIcon} alt="Compare" />
                      </b>
                      {/* <span>2</span> */}
                    </Link>
                  </li>
                  <li>
                    <Link to="/wishlist">
                      <b>
                        <img src={loveIcon} alt="Wishlist" />
                      </b>
                      {/* <span>0</span> */}
                    </Link>
                  </li>
                  <li>
                    <Link to="/cart">
                      <b>
                        <img src={cartIcon} alt="Cart" />
                      </b>
                      {/* <span>3</span> */}
                    </Link>
                  </li>
                  <li>
                    <Link className="user" to="/profile">
                      <b>
                        <LuUserRound />
                      </b>
                      <h5> Smith Jhon</h5>
                    </Link>
                    <ul className="user_dropdown">
                      <li>
                        <Link to="/">
                          <LuLayoutDashboard />
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <HiOutlineUser />
                          my account
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <HiOutlineShoppingBag />
                          my order
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <IoHeartOutline />
                          wishlist
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <TbLogout2 />
                          logout
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;
