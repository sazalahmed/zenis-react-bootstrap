import React from "react";
import "./MenuCategory.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import useData from "../../hooks/Hooks";

const MenuCategory = () => {
  // receive categorys from useData hook
  const { categorys } = useData();

  return (
    <>
      <ul className="menu_cat_item">
        {categorys?.map((category) => (
          <li key={category.id}>
            <Link to="/product">
              <span>
                <img src={category.image} alt="Zenis" />
              </span>
              {category.title}
              <IoIosArrowForward />
            </Link>
          </li>
        ))}
        <li className="all_category">
          <Link to="/category">
            View All Categories <FaArrowRight />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default MenuCategory;
