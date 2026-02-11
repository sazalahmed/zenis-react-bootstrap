import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import footerBg from "../../assets/images/footer_2_bg_2.jpg";
import footerLogo from "../../assets/images/footer_logo_2.png";
import paymentImg from "../../assets/images/payment_img.png";
import {
  RiFacebookFill,
  RiTwitterXFill,
  RiLinkedinFill,
  RiInstagramLine,
} from "react-icons/ri";
import { GrLocation } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { IoMailUnreadOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="pt-5" style={{ backgroundImage: `url(${footerBg})` }}>
      <div className="container pt-5">
        <div className="row">
          <div className="col-xl-3 col-md-6 col-lg-3">
            <div className="footer_logo_area">
              <Link className="footer_logo" to="/">
                <img src={footerLogo} alt="Zenis" />
              </Link>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                distinctio molestiae error ullam obcaecati dolorem inventore.
              </p>
              <ul>
                <li>
                  <span>Follow :</span>
                </li>
                <li>
                  <Link to="/" target="_blank">
                    <RiFacebookFill />
                  </Link>
                </li>
                <li>
                  <Link to="/" target="_blank">
                    <RiTwitterXFill />
                  </Link>
                </li>
                <li>
                  <Link to="/" target="_blank">
                    <RiLinkedinFill />
                  </Link>
                </li>
                <li>
                  <Link to="/" target="_blank">
                    <RiInstagramLine />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-sm-6 col-md-4 col-lg-2">
            <div className="footer_link">
              <h3>Company</h3>
              <ul>
                <li>
                  <Link to="/">About us</Link>
                </li>
                <li>
                  <Link to="/">Contact Us</Link>
                </li>
                <li>
                  <Link to="/">Affiliate</Link>
                </li>
                <li>
                  <Link to="/">Career</Link>
                </li>
                <li>
                  <Link to="/">Latest News</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-sm-6 col-md-4 col-lg-2">
            <div className="footer_link">
              <h3>Category</h3>
              <ul>
                <li>
                  <Link to="/">Men’s Fashion</Link>
                </li>
                <li>
                  <Link to="/">denim Collection</Link>
                </li>
                <li>
                  <Link to="/">western wear</Link>
                </li>
                <li>
                  <Link to="/">sport wear</Link>
                </li>
                <li>
                  <Link to="/">fashion jewellery</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-sm-6 col-md-4 col-lg-2">
            <div className="footer_link">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <Link to="/">Privacy Ploicy</Link>
                </li>
                <li>
                  <Link to="/">Terms and Condition</Link>
                </li>
                <li>
                  <Link to="/">Return Policy</Link>
                </li>
                <li>
                  <Link to="/">FAQ's</Link>
                </li>
                <li>
                  <Link to="/">Become a Vendor</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-md-4 col-lg-3">
            <div className="footer_link footer_logo_area">
              <h3>Contact Us</h3>
              <p>
                It is a long established fact that reader distracted looking
                layout It is a long established fact.
              </p>
              <span>
                <b>
                  <GrLocation />
                </b>
                37 W 24th St, New York, NY
              </span>
              <span>
                <b>
                  <IoCallOutline />
                </b>
                <Link to="callto:+123324587939">+123 324 5879 39</Link>
              </span>
              <span>
                <b>
                  <IoMailUnreadOutline />
                </b>
                <Link to="mailto:support@mail.com">info@Zenis.com</Link>
              </span>
            </div>
          </div>
        </div>
        <div className="row mt-5 pt-4">
          <div className="col-12 ">
            <div className="footer_copyright">
              <p>
                Copyright @ <b>Zenis</b> 2026. All right reserved.
              </p>
              <ul className="payment">
                <li>Payment by :</li>
                <li>
                  <img src={paymentImg} alt="Payment" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
