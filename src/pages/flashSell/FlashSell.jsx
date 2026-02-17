import React from "react";
import "./FlashSell.css";
import Breadcrumb from "./../../components/breadcrumb/Breadcrumb";
import useData from "./../../hooks/Hooks";
import ProductCard from "./../../components/productCard/ProductCard";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";
import { useState } from "react";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

const FlashSell = () => {
  const { products } = useData();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const flashProducts = products?.filter((product) => product.is_flash_sell);
  const totalPages = Math.ceil(flashProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = flashProducts.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  // set flsh sell time
  const flashSellEnd = new Date("2027-02-15T23:59:59");

  return (
    <>
      <Breadcrumb pageTitle="Flash Sell" />

      <div className="flash_sell_page mt-5 pt-5 mb-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="flash_sell_page_header">
                <h3>Eid special offer</h3>
                <div className="flash_sell_page_countdown">
                  <Countdown
                    date={flashSellEnd}
                    renderer={({
                      days,
                      hours,
                      minutes,
                      seconds,
                      completed,
                    }) => {
                      if (completed) return <span>Flash Sell Ended</span>;

                      const pad = (num) => String(num).padStart(2, "0");

                      return (
                        <>
                          <p>
                            {pad(days)} <span>Days</span>
                          </p>
                          <p>
                            {pad(hours)} <span>Hours</span>
                          </p>
                          <p>
                            {pad(minutes)} <span>Minutes</span>
                          </p>
                          <p>
                            {pad(seconds)} <span>Seconds</span>
                          </p>
                        </>
                      );
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {paginatedProducts
              ?.filter((product) => product.is_flash_sell)
              .map((product) => (
                <div className="col-xl-1-5" key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
          </div>
          <div className="row">
            <div className="co-12">
              <div className="pagination">
                <button
                  disabled={currentPage <= 1}
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
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
                  disabled={currentPage >= totalPages}
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                >
                  <GrLinkNext />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlashSell;
