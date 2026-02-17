import React from "react";
import "./Product.css";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";
import useData from "./../../hooks/Hooks";
import ProductCard from "./../../components/productCard/ProductCard";
import { useState } from "react";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

const Product = () => {
  // receive product and category data from hooks
  const { products, categorys } = useData();
  const [category, setCategory] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const handleCategory = (title) => {
    setCategory(title);
    setCurrentPage(1);
  };

  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <>
      <Breadcrumb pageTitle="Shop" />

      <div className="product_page mt-5 pt-3 mb-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-xxl-2 col-lg-4 col-xl-3">
              <div className="shop_filter_area">
                <div className="sidebar_range">
                  <h3>Price Range</h3>
                </div>
                {/* <div className="sidebar_status">
                  <h3>Product Status</h3>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="in_stock"
                    />
                    <label className="form-check-label" htmlFor="in_stock">
                      In Stock
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="out_of_stock"
                    />
                    <label className="form-check-label" htmlFor="out_of_stock">
                      out of Stock
                    </label>
                  </div>
                </div> */}
                <div className="sidebar_category">
                  <h3>Categories</h3>
                  <ul>
                    {categorys.map((cat) => (
                      <li
                        key={cat.id}
                        onClick={() => handleCategory(cat.title)}
                        className={category === cat.title ? "active" : ""}
                      >
                        {cat.title}
                        <span>20</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sidebar_color">
                  <h3>Filter by Color</h3>
                  {/* <ul>
                    <li>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="color"
                        />
                        <label htmlFor="color">Red</label>
                      </div>
                      <span>03</span>
                    </li>
                  </ul> */}
                </div>
                <div className="sidebar_rating">
                  <h3>Rating</h3>
                  {/* <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rating"
                    />
                    <label className="form-check-label" htmlFor="rating">
                      5 star
                    </label>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-xxl-10 col-lg-8 col-xl-9">
              <div className="row">
                {paginatedProducts.map((product) => (
                  <div className="col-xxl-3 col-6" key={product.id}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="pagination">
                    <button
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((prev) => prev - 1)}
                    >
                      <GrLinkPrevious />
                    </button>

                    {[...Array(totalPages)].map((_, index) => {
                      const page = index + 1;
                      return (
                        <button
                          key={page}
                          className={currentPage === page ? "active" : ""}
                          onClick={() => setCurrentPage(page)}
                        >
                          {page}
                        </button>
                      );
                    })}

                    <button
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage((prev) => prev + 1)}
                    >
                      <GrLinkNext />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
