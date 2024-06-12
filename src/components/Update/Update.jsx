import React from "react";
import "./Update.css";

const Update = () => {
  return (
    <div className="update">
      <h3 className="update-heading">
        Do You Want To Get Update What's Upcoming?
      </h3>
      <div>
        <form className="update-form">
          <input type="text" placeholder="Enter Email Address" />
          <button className="subscribe">Subscribe Now</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
