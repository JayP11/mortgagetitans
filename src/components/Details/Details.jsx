import React, { useState } from "react";
import "./Details.css";
import { detailsData } from "../../data";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";

const Details = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDetail = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="details-main">
      <h2
        className="homehero_welcome"
        style={{
          margin: "0px",
          textAlign: "center",
          color: "#033872", 
          display: "flex",
          justifyContent: "center",
         }}>
        Why Choose Mortgage Titans?
      </h2>
      <div className="underline"></div>
      <div className="details">
        <div className="details-left">
          {detailsData.map((data, index) => (
            <div className="details-card" key={data.id}>
              <h3
                onClick={() => toggleDetail(index)}
                className="details_card_h3">
                {data.info}{" "}
                {expandedIndex === index ? (
                  <FaCircleMinus
                    className="FaCircleMinus_icon"
                    size={28}
                    style={{ color: "#033872", cursor: "pointer" }}
                  />
                ) : (
                  <FaCirclePlus
                    className="FaCircleMinus_icon"
                    size={28}
                    style={{ color: "#033872", cursor: "pointer" }}
                  />
                )}
              </h3>
              <h5 className={expandedIndex === index ? "show" : ""}>
                {data.detail}
              </h5>
            </div>
          ))}
        </div>
        <div className="details-right">
          <img
            src="https://themes.hibootstrap.com/levix/wp-content/uploads/2022/01/faq-men.jpg"
            alt="detail"
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
