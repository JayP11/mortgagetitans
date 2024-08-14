import React, { useEffect } from "react";
import "./Quote.css";
import { BiSolidQuoteAltRight } from "react-icons/bi";

const Quote = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="quote">
      <div className="quote-main">
        <div className="quote-left">
          <h3>Get Mortgage Quote</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing eltsed do
            eiusmod
            <br />
            tempor incididunt ut labore et dolore
          </p>
          <button className="button-quote">
            <BiSolidQuoteAltRight />
            Get A Quote
          </button>
        </div>
        <div className="quote-right">
          <img
            src="https://themes.hibootstrap.com/levix/wp-content/uploads/2021/09/quote.jpg"
            alt="quote"
          />
        </div>
      </div>
    </div>
  );
};

export default Quote;
