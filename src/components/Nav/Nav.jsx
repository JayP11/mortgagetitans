import React from "react";
import "./Nav.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-left">
        <FaTwitter size={17} style={{ color: "#0b5998" }} />
        <FaFacebookF size={17} style={{ color: "#1da1f2" }} />
        <FaInstagram size={17} style={{ color: "#d43535" }} />
        <FaLinkedinIn size={17} style={{ color: "#405de6" }} />
      </div>
      <div className="nav-center">
        <p>
          We Recognize This Is a Difficult Time for Many People.
          <span> Become a Partner</span>
        </p>
      </div>
      <div className="nav-right">
        <p>
          Call Us: <span>+4 234-543 123 678</span>
        </p>
        <p>
          Mail Us: <span>info@levix.com</span>
        </p>
      </div>
    </div>
  );
};

export default Nav;
