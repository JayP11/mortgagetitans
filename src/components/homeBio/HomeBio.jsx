import React from "react";
import "./HomeBio.css";
import images from "../../constants/images";
const HomeBio = () => {
  return (
    <div
      style={{
        background: "var(--color_brand2)",
      }}
    >
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
              Shah, your dedicated mortgage broker with over 3 years of banking
              experience. My mission is to provide you with the professional
              guidance and support you need to navigate the complex world of
              mortgages and find the perfect loan for your property and home
              needs.
            </p>
            <br />
            <p className="bio_desc_line">
              Empowering your journey to home ownership.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBio;
