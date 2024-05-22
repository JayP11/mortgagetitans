import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
// import images from "../../constants/images";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import images from "../../constants/images";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation();
  return (
    <div className="nav-main-nav-top">
      <div className="nav-main-nav">
        <nav className="Navbar_main">
          <Link
            to="/"
            style={{ height: "100px", width: "250px", padding: "0.4rem 0" }}>
            <img
              src={images.logo}
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
              <Link to="/" className="nav_link_h3">
                Resources
              </Link>
            </div>
            <div className="link_decor_nav">
              <Link to="/MortgageCalc" className="nav_link_h3">
                Calculators
              </Link>
            </div>
            <div className="link_decor_nav">
              <Link to="/ComplaintPage" className="nav_link_h3">
                Concern
              </Link>
            </div>
            {/* <div className="dropdown nav_link_h3" style={{ display: "flex" }}>
              <Link
                to="/Services"
                style={{
                  color: "var(--color-white)",

                  display: "flex",
                  alignItems: "center",
                }}
              >
                Services
              </Link>
            </div> */}

            <div className="link_decor_nav">
              <Link
                to="/ContactUs"
                className="nav_link_h3"
                style={{
                  color:
                    location.pathname === "/ContactUs"
                      ? "var(--color-white)"
                      : "var(--color-green-nav)",
                }}>
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
              <div className="link_decor_nav">
                <Link
                  to="/"
                  className="nav_link_h3"
                  onClick={() => {
                    setToggleMenu(false);
                  }}>
                  Home
                </Link>
              </div>
              <div className="link_decor_nav">
                <Link
                  to="/"
                  className="nav_link_h3"
                  onClick={() => {
                    setToggleMenu(false);
                  }}>
                  Resources
                </Link>
              </div>
              <div className="link_decor_nav">
                <Link
                  to="/MortgageCalc"
                  className="nav_link_h3"
                  onClick={() => {
                    setToggleMenu(false);
                  }}>
                  Calculators
                </Link>
              </div>
              <div
                className="link_decor_nav"
                onClick={() => {
                  setToggleMenu(false);
                }}>
                <Link to="/ComplaintPage" className="nav_link_h3">
                  Concern
                </Link>
              </div>
              {/* <div className="dropdown nav_link_h3" style={{ display: "flex" }}>
                <Link
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                  to="/Services"
                  style={{
                    color: "var(--color-white)",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Services
                </Link>
              </div> */}
              <div className="link_decor_nav">
                <Link
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                  to="/ContactUs"
                  className="nav_link_h3"
                  style={{
                    color:
                      location.pathname === "/ContactUs"
                        ? "var(--color-white)"
                        : "var(--color-green-nav)",
                  }}>
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
