import React from "react";
import "./Featured.css";
import { featuredData } from "../../data";
import { FaUser } from "react-icons/fa";

const Featured = () => {
  return (
    <div className="featured">
      <h3
        >
        NEWS & BLOG ____
      </h3>
      <h2
        style={{
          margin: "0px",
        }}>
        Featured News And Insights
      </h2>
      <div className="featured-main">
        {featuredData.map((data) => {
          return (
            <div className="card-f" key={data.id}>
              <img src={data.img} alt={data.id} />
              <p>{data.info}</p>
              <hr />
              <h2>
                <FaUser
                  size={30}
                  style={{
                    backgroundColor: "a0a0a0",
                    color: "fff",
                    padding: "0.5rem",
                    borderRadius: "50%",
                  }}
                />
                Levix
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Featured;
