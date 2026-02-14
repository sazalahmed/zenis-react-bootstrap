import React from "react";
import "./FlashSell.css";
import Breadcrumb from "./../../components/breadcrumb/Breadcrumb";
import useData from "./../../hooks/Hooks";
import ProductCard from "./../../components/productCard/ProductCard";

const FlashSell = () => {
  const { products } = useData();
  return (
    <>
      <Breadcrumb pageTitle="Flash Sell" />

      <div className="flash_sell_page mt-5 pt-5 mb-5 pb-5">
        <div className="container">
          <div class="row">
            <div class="col-12">
              <div class="falsh_deals_heading">
                <h3>Eid special offer</h3>
              </div>
            </div>
          </div>
          <div className="row">
            {products
              ?.filter((product) => product.is_flash_sell)
              .map((product) => (
                <div className="col-xl-1-5" key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FlashSell;
