import React, { useState } from "react";
import "./Choose.css";
import { FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { chooseData } from "../../data";

const Choose = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    customPaging: (i) => (
      <button className={`dot ${currentSlide === i ? "active" : ""}`}>-</button>
    ),
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <div className="Batches_main">
      <div className="batches_card_main">
        <div style={{ textAlign: "center" }}>
          <h3 style={{ textAlign: "center" }}>WHY CHOOSE US ____</h3>
          <p
            style={{
              color: "gray",
              letterSpacing: "1px",
              lineHeight: "2",
              fontWeight: "500",
              padding:"0 1rem"
            }}>
            At Mortgage Titans, we follow a streamlined process to ensure you
            get the best mortgage deal. From the initial consultation to loan
            approval and beyond, we are with you every step of the way.
          </p>
        </div>
        <div className="main_flex">
          <Slider {...settings}>
            {chooseData.map((data) => {
              return (
                <div className="webinar_card_main" key={data.id}>
                  <div className="webinar_card_part1">
                    <img src={data.img} className="webinar_card_img" alt="" />
                  </div>
                  <div className="webinar_card_part2">
                    <p className="webinar_card_head">{data.info}</p>
                    <p className="webinar_card_text"> {data.detail} </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Choose;
