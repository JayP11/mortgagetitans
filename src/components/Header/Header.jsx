import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import { IoMdPlayCircle } from "react-icons/io";

const Header = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [homeValue, setHomeValue] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [loanDuration, setLoanDuration] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  const [homeValueError, setHomeValueError] = useState("");
  const [downPaymentError, setDownPaymentError] = useState("");
  const [interestRateError, setInterestRateError] = useState("");
  const [loanDurationError, setLoanDurationError] = useState("");
  const [rawInterestRate, setRawInterestRate] = useState("");
  const inputRef = useRef(null);

  const calculateMortgage = () => {
    const home = parseFloat(homeValue);
    const down = parseFloat(downPayment);
    const rate = parseFloat(rawInterestRate);
    const duration = parseFloat(loanDuration);

    if (isNaN(home) || isNaN(down) || isNaN(rate) || isNaN(duration)) {
      return;
    }

    const loan = home - down;
    const monthlyInterestRate = rate / 100 / 12;
    const months = duration * 12;
    const monthlyPayment =
      (loan * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -months));
    const totalPayment = monthlyPayment * months;

    setMonthlyPayment(Math.round(monthlyPayment));
    setTotalPayment(Math.round(totalPayment));
  };

  const validateFields = () => {
    let isValid = true;

    if (!homeValue) {
      // setHomeValueError("Home value is required.");
      setHomeValueError("Minimum of $1 required");
      isValid = false;
    } else {
      setHomeValueError("");
    }

    if (!downPayment) {
      setDownPaymentError("Deposit amount is required.");
      isValid = false;
    } else {
      setDownPaymentError("");
    }

    // if (!interestRate) {
    if (!rawInterestRate) {
      setInterestRateError("Interest rate is required.");
      isValid = false;
    } else {
      setInterestRateError("");
    }

    if (!loanDuration) {
      setLoanDurationError("Loan duration is required.");
      isValid = false;
    } else {
      setLoanDurationError("");
    }
    return isValid;
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    const isValid = validateFields();
    if (isValid) {
      calculateMortgage();
    }
  };

  const handleInterestRateChange = (e) => {
    const value = e.target.value.replace(/[^0-9.]/g, ""); // Allow only numbers and dots
    setRawInterestRate(value);
  };

  useEffect(() => {
    if (inputRef.current) {
      const length = rawInterestRate.length;
      inputRef.current.selectionStart = length;
      inputRef.current.selectionEnd = length;
    }
  }, [rawInterestRate]);

  return (
    <div className="header">
      <div className="header-left">
        <h3>
          <IoMdPlayCircle size={90} />
          Into With Company
        </h3>
        <h2>Mortgage Is A Great For You</h2>
        <h4>Reliable Sustainable Provider</h4>
        <div
          className="header-form"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
          onSubmit={handleCalculate}
        >
          <div className="Calc_input_main" style={{ margin: "0 0.5rem" }}>
            <label>Home Value (%):</label>
            <input
              ref={inputRef}
              type="number"
              value={homeValue}
              onChange={(e) => setHomeValue(e.target.value)}
            />
            {interestRateError && (
              <p style={{ color: "red" }}>{interestRateError}</p>
            )}
          </div>
          <div className="Calc_input_main" style={{ margin: "0 0.5rem" }}>
            <label>Deposit (%):</label>
            <input
              ref={inputRef}
              type="number"
              value={downPayment}
              onChange={(e) => setDownPayment(e.target.value)}
            />
            {interestRateError && (
              <p style={{ color: "red" }}>{interestRateError}</p>
            )}
          </div>
          <div className="Calc_input_main" style={{ margin: "0 0.5rem" }}>
            <label>Interest Rate (%):</label>
            <input
              ref={inputRef}
              type="text"
              value={rawInterestRate ? `${rawInterestRate}%` : ""}
              onChange={handleInterestRateChange}
            />
            {interestRateError && (
              <p style={{ color: "red" }}>{interestRateError}</p>
            )}
          </div>
          <div className="Calc_input_main" style={{ margin: "0 0.5rem" }}>
            <label>Loan Duration (years):</label>
            <input
              type="number"
              value={loanDuration}
              onChange={(e) => setLoanDuration(e.target.value)}
            />
            {loanDurationError && (
              <p style={{ color: "red" }}>{loanDurationError}</p>
            )}
          </div>

          <button
            onClick={handleCalculate}
            type="submit"
            style={{ cursor: "pointer", margin: "0 0.5rem" }}
            className="submit"
          >
            Calculate
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "0.7rem",
              paddingLeft: "0.5rem",
            }}
          >
            <h3
              style={{
                letterSpacing: "1px",
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              Principal and Interest Repayments: ${monthlyPayment}
            </h3>
            <h3
              style={{
                letterSpacing: "1px",
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              Total Loan Repayments: ${totalPayment}
            </h3>
          </div>
        </div>
      </div>
      <div className="header-right">
        <img
          src="https://themes.hibootstrap.com/levix/wp-content/uploads/2021/09/banner-main2.jpg"
          alt="header"
        />
      </div>
    </div>
  );
};

export default Header;
