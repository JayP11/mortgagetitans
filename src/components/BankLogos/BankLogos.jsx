import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BankLogos.css";
import images from "../../constants/images";
import styled from "styled-components";

const BankLogos = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1134,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Wrapper>
      <div className="bank-logos">
        <h2
          className="homehero_welcome"
          style={{
            margin: "0px",
            textAlign: "center",
            color: "#033872",
          }}
        >
          Our Lender Panel
        </h2>
        <div className="underline"></div>

        <Slider {...settings} className="slider">
          <div className="b-logo">
            <img src={images.bendigo_bank} alt="bendigo" />
          </div>
          <div className="b-logo">
            <img src={images.sydneyBank} alt="think_tank" />
          </div>
          <div className="b-logo">
            <img src={images.cba} alt="think_tank" />
          </div>
          <div className="b-logo">
            <img src={images.fmc} alt="think_tank" />
          </div>
          <div className="b-logo">
            <img src={images.ING} alt="ing" />
          </div>
          <div className="b-logo">
            <img src={images.MAMoney} alt="ma" />
          </div>

          <div className="b-logo">
            <img src={images.MyState_Bank} alt="state" />
          </div>
          <div className="b-logo">
            <img src={images.orde} alt="think_tank" />
          </div>
          <div className="b-logo">
            <img src={images.Ownhome} alt="own_home" />
          </div>

          <div className="b-logo">
            <img src={images.Thinktank_Logo} alt="think_tank" />
          </div>
          <div className="b-logo">
            <img src={images.UBank} alt="ubank" />
          </div>
        </Slider>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  .slider {
    padding: 0px;
  }
`;

export default BankLogos;
