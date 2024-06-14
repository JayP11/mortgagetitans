import React, { useState } from "react";
import "./HomeHero.css";
import images from "../../constants/images";
import { Link } from "react-router-dom";

import { FcCalendar } from "react-icons/fc";
import { GiCarWheel } from "react-icons/gi";
import { BiSolidOffer } from "react-icons/bi";
import { BsClipboardHeart } from "react-icons/bs";
// import { FiPlus, FiMinus } from "react-icons/fi";

const HomeHero = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <>
      <div
        className="hero_main"
        style={{
          // backgroundImage:
          //   "https://i0.wp.com/calmatters.org/wp-content/uploads/2022/07/homeownership-7.20.22.jpg?fit=2249%2C1333&ssl=1",
          backgroundImage: `url(${images.homehero})`,
          backgroundSize: "cover",

          // backgroundPosition: "center",
          // backdropFilter: "blur(10px)",
          // width: "100vw",
          // display: "flex",
          // alignItems: "center",
        }}>
        <div
          className="homehero_main_div_bg"
          style={{
            backgroundColor: "rgba(0,0,0,0.7",
          }}>
          <div className="hero_content">
            <div
              style={{ gap: "1rem", display: "flex", flexDirection: "column" }}>
              <div className="head_hero">
                <h1 style={{ margin: "0px" }} className="homehero_welcome">
                  Welcome to Mortgage Titans
                </h1>
              </div>
              <div className="head_hero">
                <h1 style={{ margin: "0px" }} className="homehero_slogan_line">
                  Empowering your journey to homeownership
                </h1>
              </div>
            </div>
            <div style={{ textAlign: "justify" }}>
              <p style={{ margin: "0px" }} className="hero_para">
                With a deep understanding of the financial industry, I am
                committed to delivering exceptional service and ensuring that
                you make informed decisions every step of the way. Whether
                you're a first-time home buyer, looking to refinance, or
                investing in property, I am here to help you achieve your home
                ownership goals.
              </p>
              <br />
              <p style={{ margin: "0px" }} className="hero_para">
                Contact me today at{" "}
                <span style={{ fontWeight: "700" }}>
                  <Link style={{color:"white"}} to="tel:+0410222182">+0410 222 182</Link>
                </span>{" "}
                and let's get started!
              </p>
            </div>

            <Link
              className="home_hero_contact_btn"
              to="/contact"
              style={{ display: "flex", justifyContent: "flex-end" }}>
              <button className="btn">Contact Us</button>
            </Link>
          </div>
          <div className="home_hero_img_main">
            <img
              src={images.gif}
              alt=""
              style={{ width: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
