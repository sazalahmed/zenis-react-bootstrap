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
                      home <IoIosArrowDown />
                    </Link>
                    <ul className="menu_droapdown">
                      <li>
                        <Link className="active" to="/">
                          Clothing Fashion 01
                        </Link>
                      </li>
                      <li>
                        <Link to="/">Clothing Fashion 02</Link>
                      </li>
                      <li>
                        <Link to="/">Grocery Store</Link>
                      </li>
                      <li>
                        <Link to="/">Beauty & Cosmetics</Link>
                      </li>
                      <li>
                        <Link to="/">Gadgets Shop</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/">
                      shop <IoIosArrowDown />
                    </Link>
                    <ul className="menu_droapdown">
                      <li>
                        <Link to="/">Shop</Link>
                      </li>
                      <li>
                        <Link to="/">Shop Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/">
                      Stores <IoIosArrowDown />
                    </Link>
                    <ul className="menu_droapdown">
                      <li>
                        <Link to="/">Store</Link>
                      </li>
                      <li>
                        <Link to="/">Store Details</Link>
                      </li>
                      <li>
                        <Link to="/">Become a Vendor</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/">Flash Deals</Link>
                  </li>
                  <li>
                    <Link to="/">
                      pages <IoIosArrowDown />
                    </Link>
                    <ul className="menu_droapdown">
                      <li>
                        <Link to="/">about us</Link>
                      </li>
                      <li>
                        <Link to="/">Category</Link>
                      </li>
                      <li>
                        <Link to="/">Brand</Link>
                      </li>
                      <li>
                        <Link to="/">cart view</Link>
                      </li>
                      <li>
                        <Link to="/">wishlist</Link>
                      </li>
                      <li>
                        <Link to="/">compare</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/">
                      blog <IoIosArrowDown />
                    </Link>
                    <ul className="menu_droapdown">
                      <li>
                        <Link to="/">blog classic</Link>
                      </li>
                      <li>
                        <Link to="/">blog right sidebar</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/">contact</Link>
                  </li>
                </ul>
                <ul className="menu_icon">
                  <li>
                    <Link to="/">
                      <b>
                        <img src={compareIcon} alt="Compare" />
                      </b>
                      <span>2</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <b>
                        <img src={loveIcon} alt="Wishlist" />
                      </b>
                      <span>5</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <b>
                        <img src={cartIcon} alt="Cart" />
                      </b>
                      <span>3</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="user" to="/">
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
