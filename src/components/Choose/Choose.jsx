import React, { useState } from "react";
import "./Choose.css";
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
    speed: 1500,
    slidesToShow: 3,
    autoplay: true,
    pauseOnHover: false,
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
          <h3 style={{ textAlign: "center" }}>WHY CHOOSE US</h3>
          <p
            style={{
              color: "gray",
              letterSpacing: "1px",
              lineHeight: "2",
              fontWeight: "500",
              padding: "0 1rem",
            }}>
            At Mortgage Titans, we follow a streamlined process to ensure you
            get the best mortgage deal. From the initial consultation to loan
            approval and beyond, we are with you every step of the way.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
          }}>
          <div className="choose_block_main">
            <div className="choose_heading">1</div>
            <div className="choose_block_inner_part2_1">
              <div style={{ fontSize: "24px" }}>Consultation</div>
              <div>
                We start with a detailed consultation to understand your
                financial situation and goals.
              </div>
            </div>
          </div>
          <div className="choose_block_main" style={{ gap: "2rem" }}>
            <div className="choose_heading2">2</div>
            <div className="choose_block_inner_part2_2">
              <div style={{ fontSize: "24px" }}>Loan Comparison</div>
              <div>
                We compare mortgage products from over 40 lenders to find the
                best match for you.
              </div>
            </div>
          </div>
        </div>

        {/* <div className="main_flex">
          <Slider {...settings}>
            {chooseData.map((data) => {
              return (
                <div className="webinar_card_main" key={data.id}>
                  <div className="webinar_card_part1">
                    <img src={data.img} className="webinar_card_img" alt="" />
                  </div>
                  <div className="webinar_card_part2">
                    <div style={{display:"flex",flexDirection:"column",gap:"5px"}}>
                      <p style={{margin:"0px"}} className="webinar_card_head">{data.steps}</p>
                      <p style={{margin:"0px"}} className="webinar_card_head">{data.info}</p>
                    </div>
                    <p className="webinar_card_text"> {data.detail} </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div> */}
      </div>
    </div>
  );
};

export default Choose;
