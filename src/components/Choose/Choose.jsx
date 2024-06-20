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
            }}
          >
            At Mortgage Titans, we follow a streamlined process to ensure you
            get the best mortgage deal. From the initial consultation to loan
            approval and beyond, we are with you every step of the way.
          </p>
        </div>

        <div className="Batches_grid_main">
          <div className="choose_block_main">
            <div className="choose_heading">1</div>
            <div className="choose_block_inner_part2_1">
              <div className="choose_block_head">
                <span className="choose_num">1{")"}&nbsp;</span>Consultation
              </div>
              <div>
                We start with a detailed consultation to understand your
                financial situation and goals.
              </div>
            </div>
            <div className="choose_arrow_main">
              <div className="choose_arrow_main1"></div>
              <div className="choose_arrow_main2"></div>
            </div>
          </div>
          <div className="choose_block_main">
            <div
              className="choose_heading2"
              style={{ color: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" }}
            >
              2
            </div>
            <div className="choose_block_inner_part2_2">
              <div className="choose_block_head">
                <span className="choose_num">2{")"}&nbsp; </span>Loan Comparison
              </div>
              <div>
                We compare mortgage products from over 40 lenders to find the
                best match for you.
              </div>
            </div>
            <div className="choose_arrow_main">
              <div className="choose_arrow_main1"></div>
              <div className="choose_arrow_main2"></div>
            </div>
          </div>
          <div className="choose_block_main">
            <div className="choose_heading3">3</div>
            <div className="choose_block_inner_part2_3">
              <div className="choose_block_head">
                <span className="choose_num">3{")"}&nbsp; </span>
                Application Support
              </div>
              <div>
                We assist you with the application process, ensuring all
                paperwork is accurately completed.
              </div>
            </div>
            <div className="choose_arrow_main">
              <div className="choose_arrow_main1"></div>
              <div className="choose_arrow_main2"></div>
            </div>
          </div>
          <div className="choose_block_main">
            <div className="choose_heading2">4</div>
            <div className="choose_block_inner_part2_4">
              <div className="choose_block_head">
                <span className="choose_num">4{")"}&nbsp; </span> Approval and
                Settlement
              </div>
              <div>
                We guide you through the final steps, ensuring a smooth
                transition to homeownership.
              </div>
            </div>
            <div className="choose_arrow_main">
              <div className="choose_arrow_main1"></div>
              <div className="choose_arrow_main2"></div>
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
