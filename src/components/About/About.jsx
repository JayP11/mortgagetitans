import React, { useEffect } from "react";
import "./About.css";
import { TiTick } from "react-icons/ti";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img
          src="https://themes.hibootstrap.com/levix/wp-content/uploads/2022/01/about.jpg"
          alt="about"
        />
      </div>
      <div className="about-right">
        <h3>ABOUT OUR COMPANY___</h3>
        <h2 style={{ margin: "0px" }}>Why Should You Choose Us?</h2>
        <p>
          Campaign dolor sit amet conseetur diisci velit sed quiLorem ipsum
          dolor sit <br />
          amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut
          <br /> labore et dolore meniam,
        </p>
        <ul className="about-list">
          <li>
            <TiTick size={22} style={{ color: "#003872" }} />
            Purchase New House
          </li>
          <li>
            <TiTick size={22} style={{ color: "#003872" }} />
            Apply For Loan
          </li>
          <li>
            <TiTick size={22} style={{ color: "#003872" }} />
            Refinancing Your Home
          </li>
          <li>
            <TiTick size={22} style={{ color: "#003872" }} />
            Capital Management
          </li>
          <li>
            <TiTick size={22} style={{ color: "#003872" }} />
            Renovation House
          </li>
          <li>
            <TiTick size={22} style={{ color: "#003872" }} />
            Refinance Advisor
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
