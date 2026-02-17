import React from "react";
import "./ProductDetails.css";
import useData from "./../../hooks/Hooks";
import { useParams } from "react-router-dom";
import Breadcrumb from "./../../components/breadcrumb/Breadcrumb";
import {
  IoStar,
  IoStarHalf,
  IoStarOutline,
  IoHeartOutline,
} from "react-icons/io5";
import { FaPlus, FaMinus, FaArrowRightLong } from "react-icons/fa6";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { SlQuestion } from "react-icons/sl";
import { Link } from "react-router-dom";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { GoGlobe } from "react-icons/go";
import { BsCheck2Circle } from "react-icons/bs";
import { CiBadgeDollar } from "react-icons/ci";
import { IoReturnUpBack } from "react-icons/io5";
import { GoVerified } from "react-icons/go";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

const ProductDetails = () => {
  // receive products from hooks
  const { products } = useData();

  // receive product id from url params and find the product with the id
  const { id } = useParams();
  const fondProduct = products.find((product) => product.id === parseInt(id));

  const isOutOfStock = !fondProduct?.stock_status;

  return (
    <>
      <Breadcrumb pageTitle="Shop Details" />

      <div className="product_details mt-5 pt-5 mb-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-10">
              <div className="row">
                <div className="col-xl-6">
                  <div className="details_slider_thumb_item">
                    <img src={fondProduct?.image} alt={fondProduct?.title} />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="shop_details_text">
                    <p className="category">{fondProduct?.category}</p>
                    <h2 className="details_title">{fondProduct?.title}</h2>
                    <div className="d-flex flex-wrap align-items-center">
                      {fondProduct?.stock_status && (
                        <p className="stock">In Stock</p>
                      )}
                      {!fondProduct?.stock_status && (
                        <p className="out_stock stock">out of Stock</p>
                      )}
                      <p className="rating">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                        <IoStarOutline />
                        <span>({fondProduct?.review_count} Reviews)</span>
                      </p>
                    </div>
                    <h3 className="price">
                      {typeof fondProduct?.discount_price === "number" ? (
                        <>
                          ${Number(fondProduct?.discount_price).toFixed(2)}
                          <del>
                            ${Number(fondProduct?.original_price).toFixed(2)}
                          </del>
                        </>
                      ) : (
                        <>${Number(fondProduct?.original_price).toFixed(2)}</>
                      )}
                    </h3>

                    <p className="short_description">
                      {fondProduct?.description}
                    </p>

                    <div className="details_single_variant">
                      <p className="variant_title">Color :</p>
                      <ul className="details_variant_color">
                        {fondProduct?.colors.map((color, index) => (
                          <li
                            key={index}
                            style={{ background: color.code }}
                          ></li>
                        ))}
                      </ul>
                    </div>

                    <div className="details_single_variant">
                      <p className="variant_title">Size :</p>
                      <ul className="details_variant_size">
                        {fondProduct?.sizes.map((size, index) => (
                          <li key={index}>{size}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="d-flex flex-wrap align-items-center">
                      <div className="details_qty_input">
                        <button className="minus">
                          <FaMinus />
                        </button>
                        <input type="text" placeholder="01" />
                        <button className="plus">
                          <FaPlus />
                        </button>
                      </div>
                      <div className="details_btn_area">
                        <Link
                          to="/checkout"
                          className="common_btn buy_now"
                          aria-disabled={isOutOfStock}
                          tabIndex={isOutOfStock ? -1 : 0}
                          onClick={(e) => {
                            if (isOutOfStock) {
                              e.preventDefault();
                            }
                          }}
                        >
                          Buy Now <FaArrowRightLong />
                        </Link>

                        <Link
                          to="#"
                          className="common_btn"
                          aria-disabled={isOutOfStock}
                          tabIndex={isOutOfStock ? -1 : 0}
                          onClick={(e) => {
                            if (isOutOfStock) {
                              e.preventDefault();
                            }
                          }}
                        >
                          Add to cart <FaArrowRightLong />
                        </Link>
                      </div>
                    </div>

                    <ul className="details_list_btn">
                      <li>
                        <Link to="#">
                          <IoHeartOutline />
                          Add Wishlist
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <LiaExchangeAltSolid />
                          Compare
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <SlQuestion />
                          Ask a question
                        </Link>
                      </li>
                    </ul>

                    <ul className="details_tags_sku">
                      <li>
                        <p>SKU:</p> {fondProduct?.product_sku}
                      </li>
                      <li>
                        <p>Category:</p> {fondProduct?.category}
                      </li>
                      <li>
                        <p>Tag:</p>
                        {fondProduct?.tags?.map((tag, index) => (
                          <span key={index}>{tag},</span>
                        ))}
                      </li>
                    </ul>
                    <ul className="shop_details_shate">
                      <li>Share:</li>
                      <li>
                        <Link to="#">
                          <FaFacebookF />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <FaTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <FaInstagram />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <FaWhatsapp />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2">
              <div className="shop_details_sidebar_info">
                <ul>
                  <li>
                    <span>
                      <GoGlobe />
                    </span>
                    Shipping worldwide
                  </li>
                  <li>
                    <span>
                      <BsCheck2Circle />
                    </span>
                    Always Authentic
                  </li>
                  <li>
                    <span>
                      <CiBadgeDollar />
                    </span>
                    Cash on Delivery Available
                  </li>
                </ul>
                <h5>Return &amp; Warranty </h5>
                <ul>
                  <li>
                    <span>
                      <IoReturnUpBack />
                    </span>
                    14 days easy return
                  </li>
                  <li>
                    <span>
                      <GoVerified />
                    </span>
                    Warranty not available
                  </li>
                </ul>
              </div>
              <div className="shop_details_sidebar_store">
                <p className="sold_by">Sold by</p>
                <h4 className="store_name">Zapier Gallery</h4>
                <ul>
                  <li>
                    <p>Positive Seller Ratings</p>
                    {/* <!-- <span>New Seller</span> --> */}
                    <span>4.5 (320)</span>
                  </li>
                  <li>
                    <p>Ship on Time</p>
                    <span>100%</span>
                  </li>
                  <li>
                    <p>Chat Response Rate</p>
                    <span>90%</span>
                  </li>
                </ul>
                <Link className="go_store" to="#">
                  Go To Store
                </Link>
                <Link className="chat" to="#">
                  <HiOutlineChatBubbleLeftRight />
                  Chat Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
