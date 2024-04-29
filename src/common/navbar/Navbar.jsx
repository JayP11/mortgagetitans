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
              <Link to="/About" className="nav_link_h3">
                About
              </Link>
            </div>
            <div className="link_decor_nav">
              <Link to="/Resources" className="nav_link_h3">
                Resources
              </Link>
            </div>
            <div className="dropdown nav_link_h3" style={{ display: "flex" }}>
              <Link
                to="/Services"
                style={{
                  color: "var(--color-white)",
                  //   color:
                  //     location.pathname === "/Services"
                  //       ? "var(--color-white)"
                  //       : "var(--color-green-nav)",
                  display: "flex",
                  alignItems: "center",
                }}>
                Services
              </Link>
              <div className="dropdown-content">
                <Link to="/RollerChains">Home Loan</Link>
                <Link to="/Refinancing">Refinancing</Link>
                <Link to="/Investmentloan">Investment Loan</Link>
              </div>
            </div>

            <div className="link_decor_nav">
              <Link
                to="/Contact"
                className="nav_link_h3"
                style={{
                  color:
                    location.pathname === "/Contact"
                      ? "var(--color-white)"
                      : "var(--color-green-nav)",
                }}>
                Contact
              </Link>
            </div>
            <div className="link_decor_nav">
              <Link
                to="/faq"
                className="nav_link_h3"
                style={{
                  color:
                    location.pathname === "/faq"
                      ? "var(--color-white)"
                      : "var(--color-green-nav)",
                }}>
                Faq
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
              <li>
                <Link
                  to={"/"}
                  onClick={() => setToggleMenu(false)}
                  className="mobile-nav-link">
                  Home
                </Link>
              </li>
              <div className="dropdown">
                <Link to="/About" className="mobile-nav-link">
                  About
                  <i className="fa fa-caret-down"></i>
                </Link>
              </div>
              <div className="dropdown">
                <Link to="/Products" className="mobile-nav-link">
                  Products
                  <i className="fa fa-caret-down"></i>
                </Link>
                {/* <div className="dropdown-content">
                  <Link to="/RollerChains" style={{ color: "red" }}>
                    Roller Chains
                  </Link>
                  <Link to="/BushChains" style={{ color: "red" }}>
                    Bush Chains
                  </Link>
                  <Link to="/ExtendedPitchChains" style={{ color: "red" }}>
                    Extended Pitch Chains
                  </Link>
                  <Link to="/LeafChains" style={{ color: "red" }}>
                    Leaf Chains
                  </Link>
                  <Link to="/AttachmentChains" style={{ color: "red" }}>
                    Attachment Chains
                  </Link>
                  <Link to="/AgricultureChains" style={{ color: "red" }}>
                    Agriculture Chains
                  </Link>
                </div> */}
              </div>

              <li>
                <Link
                  to={"/Contact"}
                  // onClick={() => setToggleMenu(false)}
                  className="mobile-nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </>
    </div>
  );
};

export default Navbar;
