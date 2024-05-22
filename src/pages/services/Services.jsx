import React, { useEffect, useState } from "react";
import "./Services.css";
import images from "../../constants/images";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const servicedata = [
  {
    id: 1,
    name: "Home Loans",
    desc: "Whether you're a first-time home buyer or looking to upgrade, we'll help you find the right home loan to fit your budget and lifestyle.",
  },

  {
    id: 2,
    name: "Refinancing",
    desc: "Looking to refinance your current mortgage? We'll help you explore your options and find a refinancing solution that works for you.",
  },
  {
    id: 3,
    name: "Investment Loans",
    desc: "Interested in investing in property? We'll help you secure the financing you need to grow your investment portfolio.",
  },
  {
    id: 4,
    name: "Construction Loans",
    desc: "Building your dream home? We'll guide you through the construction loan process and help you turn your dream into reality.",
  },
  {
    id: 5,
    name: "First Home Buyer Assistance",
    desc: "Buying your first home can be daunting. We'll help you navigate the process and secure the financing you need to make your dream of homeownership a reality.",
  },
  {
    id: 6,
    name: "Debt Consolidation",
    desc: "Struggling with multiple debts? We'll help you consolidate your debts into one manageable loan, so you can take control of your finances.",
  },
  {
    id: 7,
    name: "Loan Pre-approval",
    desc: "Get pre-approved for a loan before you start house hunting. We'll help you understand your borrowing capacity and give you the confidence to make an offer on your dream home.",
  },
];

const Services = () => {
  const [getIndex, setIndex] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Mortgage Titans | Services</title>
      </Helmet>
      <div style={{ height: "90px" }}></div>
      <div
        className="services_sec"
        style={{
          backgroundImage: `url(${images.service_bgimg})`,
          backgroundPosition: "center",
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "revert-layer",
          backgroundSize: "cover",
          opacity: "0.9",
          // position: "relative",
        }}
      >
        <div className="services_hero_main">
          <Link to="/">Home &nbsp; / &nbsp; </Link> Services
        </div>
        <div className="services_con_main">
          <div style={{ height: "90px" }}></div>
          <div className="service_head_flex">
            <p className="service_main_head">Our Service</p>
            <p className="service_sub_head">
              At Mortgage Titans, we offer a range of services to help you
              achieve your home ownership and financial goals. With our
              expertise and personalized approach, we'll help you find the
              perfect loan for your needs. Our services include
            </p>
          </div>
          <div className="services_con">
            <div className="services_flex_part1">
              {servicedata &&
                servicedata.map((item, index) => {
                  return (
                    <p
                      onClick={() => {
                        setIndex(index);
                      }}
                      className="services_name"
                      style={{
                        color:
                          getIndex + 1 === item.id
                            ? "var(--color_brand)"
                            : "var(--color-white)",
                        fontWeight: getIndex + 1 === item.id ? "600" : "600",
                      }}
                    >
                      {item.name}
                    </p>
                  );
                })}
            </div>

            <div className="services_flex_part2">
              {servicedata &&
                servicedata.map((item, index) => {
                  return (
                    <>
                      {getIndex + 1 === item.id ? (
                        <>
                          <p className="services_desc">{item.desc}</p>
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
