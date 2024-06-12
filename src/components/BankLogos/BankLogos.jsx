import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BankLogos.css";
import images from "../../constants/images";
     
const BankLogos = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    arrows:false,
    slidesToShow: 5,
    slidesToScroll: 1,
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
    <div className="bank-logos">
      <h2 style={{ fontWeight: "800" }}>Our Lender Panel</h2>
      <Slider {...settings} className="slider">
        <div className="b-logo">
          <img src={images.bendigo_bank} alt="bendigo" />
        </div>
        <div className="b-logo">
          <img src={images.MyState_Bank} alt="state" />
        </div>
        <div className="b-logo">
          <img src={images.UBank} alt="ubank" />
        </div>
        <div className="b-logo">
          <img src={images.ING} alt="ing" />
        </div>
        <div className="b-logo">
          <img src={images.MAMoney} alt="ma" />
        </div>
        <div className="b-logo">
          <img src={images.Ownhome} alt="own_home" />
        </div>
        <div className="b-logo">
          <img src={images.Thinktank_Logo} alt="think_tank" />
        </div>
      </Slider>
    </div>
  );
};

export default BankLogos;
