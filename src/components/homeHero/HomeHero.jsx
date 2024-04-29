import React, { useState } from "react";
import "./HomeHero.css";
import images from "../../constants/images";
import { Link } from "react-router-dom";

import { FcCalendar } from "react-icons/fc";
import { GiCarWheel } from "react-icons/gi";
import { BiSolidOffer } from "react-icons/bi";
import { BsClipboardHeart } from "react-icons/bs";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";

const HomeHero = () => {
  const [pincode, setPincode] = useState();
  const [faqData, setFaqData] = useState([
    {
      // id: 1,
      icon: <FcCalendar />,
      question: "Request Appointment",
      answer: "Find our stores location near you.",
      location_title: "Zip or City, State (required)",
      location: (
        <input
          type="number"
          value={pincode}
          onChange={(e) => {
            setPincode(e.target.value);
          }}
        />
      ),
    },
    {
      icon: <GiCarWheel />,
      question: "Shop for Tires",
      answer: "Find a our stores location near you.",
      location_title: "Zip or City, State (required)",
      location: (
        <input
          type="number"
          value={pincode}
          onChange={(e) => {
            setPincode(e.target.value);
          }}
        />
      ),
    },
    {
      icon: <BiSolidOffer />,
      question: "Get Coupons & Offers",
      answer: "Find a our stores location near you.",
      location_title: "Zip or City, State (required)",
      location: (
        <input
          type="number"
          value={pincode}
          onChange={(e) => {
            setPincode(e.target.value);
          }}
        />
      ),
    },
    {
      icon: <BsClipboardHeart />,
      question: "Get a Repair Estimate",
      answer: "Find a our stores location near you.",
      location_title: "Zip or City, State (required)",
      location: (
        <input
          type="number"
          value={pincode}
          onChange={(e) => {
            setPincode(e.target.value);
          }}
        />
      ),
    },
  ]);

  const [expanded, setExpanded] = useState(null);

  const toggleAccordion = (index) => {
    if (expanded === index) {
      setExpanded(null);
    } else {
      setExpanded(index);
    }
  };

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

  const [modalIsOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    alert("Please fill the pin code.");
  };
  return (
    <>
      <div
        className="hero_main"
        style={{
          // backgroundImage: `url(${images.homehero})`,
          backgroundSize: "cover",

          // backgroundPosition: "inherit",
          // backdropFilter: "blur(2px)",
          // width: "100vw",
          // display: "flex",
          // alignItems: "center",
        }}>
        <div
          className="homehero_main_div_bg"
          style={{
            // backgroundColor: "rgba(0,0,0,.503)",
            backgroundColor: "var(--color_brand)",
          }}>
          <div className="hero_content">
            <div
              style={{ gap: "1rem", display: "flex", flexDirection: "column" }}>
              <div className="head_hero">
                <h1 style={{ fontSize: "40px", fontWeight: "900" }}>
                  Welcome to Mortgage Titans
                </h1>
              </div>
              <div className="head_hero">
                <h1 style={{ fontSize: "16px" }}>
                  Empowering your journey to homeownership
                </h1>
              </div>
            </div>
            <div style={{ textAlign: "justify" }}>
              <p style={{ lineHeight: "1.5", letterSpacing: "0.5px" }}>
                {/* <span
                  style={{
                    fontWeight: 600,
                    fontSize: "20px",
                  }}>
                  Welcome to Mortgage Titans,
                </span> */}
                Welcome to Mortgage Titans, With a deep understanding of the
                financial industry, I am committed to delivering exceptional
                service and ensuring that you make informed decisions every step
                of the way. Whether you're a first-time homebuyer, looking to
                refinance, or investing in property, I am here to help you
                achieve your homeownership goals. Contact me today at 0410 222
                182 and let's get started!
              </p>
            </div>
            <div style={{}}>
              <button className="btn">Contact Us</button>
            </div>
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
