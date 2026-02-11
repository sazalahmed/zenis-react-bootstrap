import React from "react";
import "./HomeSubscription.css";
import subscribeBg from "../../../../assets/images/subscribe_2_bg.jpg";

const HomeSubscription = () => {
  return (
    <div
      className="home_subscription mt-5"
      style={{ backgroundImage: `url(${subscribeBg})` }}
    >
      <div className="row justify-content-center">
        <div className="col-xxl-5 col-xl-6 col-lg-7">
          <div className="text">
            <h2>
              Get Upto <span>70% </span> Off Discount Coupon
            </h2>
            <p>by Subscribe our Newsletter</p>
            <form action="#">
              <input type="text" placeholder="Your email" />
              <button className="common_btn" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSubscription;
