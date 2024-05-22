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
  // const [pincode, setPincode] = useState();
  // const [faqData, setFaqData] = useState([
  //   {
  //     // id: 1,
  //     icon: <FcCalendar />,
  //     question: "Request Appointment",
  //     answer: "Find our stores location near you.",
  //     location_title: "Zip or City, State (required)",
  //     location: (
  //       <input
  //         type="number"
  //         value={pincode}
  //         onChange={(e) => {
  //           setPincode(e.target.value);
  //         }}
  //       />
  //     ),
  //   },
  //   {
  //     icon: <GiCarWheel />,
  //     question: "Shop for Tires",
  //     answer: "Find a our stores location near you.",
  //     location_title: "Zip or City, State (required)",
  //     location: (
  //       <input
  //         type="number"
  //         value={pincode}
  //         onChange={(e) => {
  //           setPincode(e.target.value);
  //         }}
  //       />
  //     ),
  //   },
  //   {
  //     icon: <BiSolidOffer />,
  //     question: "Get Coupons & Offers",
  //     answer: "Find a our stores location near you.",
  //     location_title: "Zip or City, State (required)",
  //     location: (
  //       <input
  //         type="number"
  //         value={pincode}
  //         onChange={(e) => {
  //           setPincode(e.target.value);
  //         }}
  //       />
  //     ),
  //   },
  //   {
  //     icon: <BsClipboardHeart />,
  //     question: "Get a Repair Estimate",
  //     answer: "Find a our stores location near you.",
  //     location_title: "Zip or City, State (required)",
  //     location: (
  //       <input
  //         type="number"
  //         value={pincode}
  //         onChange={(e) => {
  //           setPincode(e.target.value);
  //         }}
  //       />
  //     ),
  //   },
  // ]);

  const [expanded, setExpanded] = useState(null);

  // const toggleAccordion = (index) => {
  //   if (expanded === index) {
  //     setExpanded(null);
  //   } else {
  //     setExpanded(index);
  //   }
  // };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0px",
      backgroundColor: "none",
      border: "none",
      borderRadius: "0px",
    },
    overlay: {
      zIndex: 1000,
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
  };
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
                <h1 className="homehero_welcome">Welcome to Mortgage Titans</h1>
              </div>
              <div className="head_hero">
                <h1 className="homehero_slogan_line">
                  Empowering your journey to homeownership
                </h1>
              </div>
            </div>
            <div style={{ textAlign: "justify" }}>
              <p className="hero_para">
                With a deep understanding of the financial industry, I am
                committed to delivering exceptional service and ensuring that
                you make informed decisions every step of the way. Whether
                you're a first-time home buyer, looking to refinance, or
                investing in property, I am here to help you achieve your home
                ownership goals. Contact me today at +0410 222 182 and let's get
                started!
              </p>
            </div>

            <Link
              to="/contactus"
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
