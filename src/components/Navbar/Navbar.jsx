import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation();
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
    setToggleMenu(false);
  };
 
  return (
    <div className="nav-main-nav-top">
      <div className="nav-main-nav">
        <nav className="Navbar_main">
          <Link
            to="/"
            style={{ height: "100px", width: "250px", padding: "0.4rem 0" }}
          >
            <img
              src={logo}
              alt=""
              style={{
                height: "100%",
                width: "100%",
                objectFit: "contain",
              }}
            />
          </Link>

          <div className="navbar_links_main">
            <div className="link_decor_nav">
              <Link to="/" className="nav_link_h3">
                Home
              </Link>
            </div>
            <div className="link_decor_nav">
              <Link to="/AboutUs" className="nav_link_h3">
                {/* onClick={scrollToAbout}> */}
                About Us
              </Link>
            </div>
            <div className="link_decor_nav">
              <Link to="/calculator" className="nav_link_h3">
                Calculator
              </Link>
            </div>
            <div className="link_decor_nav">
              <Link to="/concern" className="nav_link_h3">
                Concern
              </Link>
            </div>

            <div className="link_decor_nav">
              <Link
                to="/contact"
                // onClick={(event) =>
                //   handleContactClick()
                // }
                className="nav_link_h3"
                style={{
                  color:
                    location.pathname === "/Contact"
                      ? "var(--color-white)"
                      : "var(--color-green-nav)",
                }}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="nav-btn-icon-part">
            {toggleMenu === false ? (
              <button className="nav-btn" onClick={() => setToggleMenu(true)}>
                <AiOutlineMenu className="nav-btn-icon" />
              </button>
            ) : (
              <button className="nav-btn" onClick={() => setToggleMenu(false)}>
                <AiOutlineClose className="nav-btn-icon" />
              </button>
            )}
          </div>
        </nav>
      </div>
      <>
        {toggleMenu && (
          <div className="mobile-nav-main">
            <ul className="mobile-nav-links">
              <div className="">
                <Link
                  to="/"
                  className="nav_link_h3"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  Home
                </Link>
              </div>
              <div className="">
                <Link
                  to="/AboutUs"
                  className="nav_link_h3"
                  onClick={() => {
                    scrollToAbout();
                    // setToggleMenu(false);
                  }}
                >
                  About Us
                </Link>
              </div>
              <div className="">
                <Link
                  to="/calculator"
                  className="nav_link_h3"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  Calculator
                </Link>
              </div>
              <div
                className=""
                onClick={() => {
                  setToggleMenu(false);
                }}
              >
                <Link to="/concern" className="nav_link_h3">
                  Concern
                </Link>
              </div>
              <div className="">
                <Link
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                  to="/Contact"
                  className="nav_link_h3"
                  style={{
                    color:
                      location.pathname === "/Contact"
                        ? "var(--color-white)"
                        : "var(--color-green-nav)",
                  }}
                >
                  Contact
                </Link>
              </div>
            </ul>
          </div>
        )}
      </>
    </div>
  );
};

export default Navbar;
