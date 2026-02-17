import React from "react";
import "./Contact.css";
import Breadcrumb from "./../../components/breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";
import contaactImg from "../../assets/images/contact_message.jpg";
import {
  IoCallOutline,
  IoMailUnreadOutline,
  IoLocationOutline,
  IoNotificationsOutline,
} from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <Breadcrumb pageTitle="Contact Us" />

      <div className="contact_us mt-5 pt-4">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="contact_info">
                <span>
                  <IoCallOutline />
                </span>
                <h3>Call Us</h3>
                <Link to="callto:12345678901">+44 20 9994 7740</Link>
                <Link to="callto:12345678901">+44 30 7772 8830</Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="contact_info">
                <span>
                  <IoMailUnreadOutline />
                </span>
                <h3>Email Us</h3>
                <Link to="mailto:example@gmail.com">
                  support@yourdomain.com
                </Link>
                <Link to="mailto:example@gmail.com">hellow@yourdomain.com</Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="contact_info">
                <span>
                  <IoLocationOutline />
                </span>
                <h3>Our Location</h3>
                <p>
                  37 W 24th St, Blackwell Street Creek, 10th Avenue, New York
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-5 pt-4">
            <div className="col-lg-5">
              <div className="contact_img">
                <img
                  src={contaactImg}
                  alt="contact"
                  className="img-fluid w-100"
                />
                <div className="contact_hotline">
                  <h3>Hotline</h3>
                  <Link to="callto:+123324587939">+123 324 5879 39</Link>
                  <div className="icon">
                    <IoNotificationsOutline />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="contact_form">
                <h2>Get In Touch 👋</h2>
                <form action="#">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="single_input">
                        <label>name</label>
                        <input type="text" placeholder="Jhon Deo" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_input">
                        <label>email</label>
                        <input type="email" placeholder="example@Zenis.com" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_input">
                        <label>phone</label>
                        <input type="text" placeholder="+96512344854475" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_input">
                        <label>Subject</label>
                        <input type="text" placeholder="Subject" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="single_input">
                        <label>Message</label>
                        <textarea rows="7" placeholder="Message..."></textarea>
                      </div>
                      <button className="common_btn" type="button">
                        send message
                        <FaArrowRightLong />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="contact_map mt-5 pt-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.8776746534986!2d-77.027541687759!3d38.903912546200644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7931d95b707%3A0x16e85cf5a8a5fdce!2sMarriott%20Marquis%20Washington%2C%20DC!5e0!3m2!1sen!2sbd!4v1700767199965!5m2!1sen!2sbd"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
