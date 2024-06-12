import React, { useEffect } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data";

const Testimonials = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="testimonials">
      <h3>TESTIMONIALS</h3>
      <h2>People Are Saying</h2>
      <div className="test-main">
        {testimonialsData.map((data) => {
          return (
            <div className="card-test" key={data.id}>
              <img src={data.img} alt={data.id} />
              <hr />
              <h3>{data.name}</h3>
              <h4>{data.title}</h4>
              <hr />
              <h3>{data.info}</h3>
              <p>{data.detail}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
