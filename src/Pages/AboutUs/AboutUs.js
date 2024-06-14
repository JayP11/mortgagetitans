import React, { useEffect } from "react";
import "./AboutUs.css";
import { TiTick } from "react-icons/ti";
import images from "../../constants/images";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Mortgage Titans | About us</title>
      </Helmet>
      <div style={{ height: "89px" }}></div>
      <div className="about">
        <div className="about-left">
          <img
            src="https://themes.hibootstrap.com/levix/wp-content/uploads/2022/01/about.jpg"
            alt="about"
          />
        </div>
        <div className="about-right">
          <h3>ABOUT OUR COMPANY</h3>
          <h2 className="Why_should_line">Why Should You Choose Us?</h2>
          <p
            style={{
              lineHeight: "1.5",
              letterSpacing: "1px",
            }}>
            Campaign dolor sit amet conseetur diisci velit sed quiLorem ipsum
            dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore meniam,
          </p>
          <ul className="about-list">
            <li className="abt_list_inner">
              <TiTick size={22} style={{ color: "#003872" }} />
              Purchase New House
            </li>
            <li className="abt_list_inner">
              <TiTick size={22} style={{ color: "#003872" }} />
              Apply For Loan
            </li>
            <li className="abt_list_inner">
              <TiTick size={22} style={{ color: "#003872" }} />
              Refinancing Your Home
            </li>
            <li className="abt_list_inner">
              <TiTick size={22} style={{ color: "#003872" }} />
              Capital Management
            </li>
            <li className="abt_list_inner">
              <TiTick size={22} style={{ color: "#003872" }} />
              Renovation House
            </li>
            <li className="abt_list_inner">
              <TiTick size={22} style={{ color: "#003872" }} />
              Refinance Advisor
            </li>
          </ul>
        </div>
      </div>
      <div
        style={{
          background: "var(--color_brand2)",
        }}>
        <div className="HomeBio_main">
          <div className="HomeBio_part1">
            <div>
              <h1 className="bio_name_inner">Jash Shah</h1>
            </div>
            <div>
              <h1 className="bio_slogan">ABOUT THE FOUNDER & PROBLEM SOLVER</h1>
            </div>
          </div>
          <div className="HomeBio_part2">
            <div className="demo">
              <img className="demo_inner" src={images.profile_img} alt="" />
            </div>
            <div className="bio_desc_main">
              <p className="bio_desc_inner">
                Your trusted partner in the journey to home ownership. I'm Jash
                Shah, your dedicated mortgage broker with over 3 years of
                banking experience. My mission is to provide you with the
                professional guidance and support you need to navigate the
                complex world of mortgages and find the perfect loan for your
                property and home needs.
              </p>
              <br />
              <p className="bio_desc_line">
                Empowering your journey to home ownership.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="about">
        <div className="about-left">
          <img
            src="https://themes.hibootstrap.com/levix/wp-content/uploads/2022/01/about.jpg"
            alt="about"
          />
        </div>
        <div className="about-right">
          <h3>ABOUT OUR COMPANY</h3>
          <h2 className="Why_should_line">Why Should You Choose Us?</h2>
          <p>
            Campaign dolor sit amet conseetur diisci velit sed quiLorem ipsum
            dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore meniam,
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
      </div> */}
    </>
  );
};

export default AboutUs;
