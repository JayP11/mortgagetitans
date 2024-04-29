import React from "react";
import "./ServicesHome.css";
import { FaArrowRight } from "react-icons/fa";
import images from "../../constants/images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    id: 1,
    name: "Home Loans",
    description:
      "Whether you're a first-time homebuyer or looking to upgrade, we'll help you find the right home loan to fit your budget and lifestyle.",
    img: require("../../assets/home_lone.jpg"),
    icon: require("../../assets/mortgage.png"),
  },
  {
    id: 2,
    name: "Refinancing",
    description:
      "Looking to refinance your current mortgage? We'll help you explore your options and find a refinancing solution that works for you.",
    img: require("../../assets/refinance_img.jpg"),
    icon: require("../../assets/refinancing.png"),
  },
  {
    id: 3,
    name: "Investment Loans",
    description:
      "Interested in investing in property? We'll help you secure the financing you need to grow your investment portfolio.",
    img: require("../../assets/investmentloan2_img.jpg"),
    icon: require("../../assets/investment.png"),
  },
  {
    id: 4,
    name: "Construction Loans",
    description:
      "Building your dream home? We'll guide you through the construction loan process and help you turn your dream into reality.",
    img: require("../../assets/constructionlon_img.png"),
    icon: require("../../assets/budget.png"),
  },
  {
    id: 5,
    name: "First Home Buyer Assistance",
    description:
      "Buying your first home can be daunting. We'll help you navigate the process and secure the financing you need to make your dream of homeownership a reality.",
    img: require("../../assets/firsttimehome_img.jpg"),
    icon: require("../../assets/buy.png"),
  },
  {
    id: 6,
    name: "Debt Consolidation",
    description:
      "Struggling with multiple debts? We'll help you consolidate your debts into one manageable loan, so you can take control of your finances.",
    img: require("../../assets/debtconsolidationloans_img.jpg"),
    icon: require("../../assets/debt.png"),
  },
  {
    id: 7,
    name: "Loan Pre-approval",
    description:
      "Get pre-approved for a loan before you start house hunting. We'll help you understand your borrowing capacity and give you the confidence to make an offer on your dream home.",
    img: require("../../assets/preapprovedloan_img.png"),
    icon: require("../../assets/approved.png"),
  },
];
const ServicesHome = () => {
  var settings = {
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
  };

  return (
    <div style={{ background: "#e6ebf1" }}>
      <div className="Batches_main">
        <div className="batches_card_main">
          <>
            <div className="main_flex">
              <Slider {...settings}>
                {data && data.length > 0
                  ? data.map((item, index) => {
                      return (
                        <div className="webinar_card_main">
                          <div className="webinar_card_part1">
                            <img
                              src={item?.img ? item.img : images.img}
                              className="webinar_card_img"
                              alt=""
                            />
                          </div>
                          <div className="webinar_card_part2">
                            <p className="webinar_card_head">{item?.name}</p>
                            <p className="webinar_card_text">
                              {" "}
                              {item?.description}{" "}
                            </p>
                            <div className="webinar_card_icon_main">
                              <img
                                src={item?.icon ? item.icon : images.icon}
                                alt="mains_icon"
                                className="batches_card_icon_inner webinar_card_icon"
                              />
                            </div>

                            <div className="webinar_card_btn">
                              <p>Explore </p>
                              <FaArrowRight className="webinar_card_btn_icon" />
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : null}
              </Slider>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default ServicesHome;
