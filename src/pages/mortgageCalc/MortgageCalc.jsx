import React, { useEffect, useRef, useState } from "react";
import MortgageCalculator from "mortgage-calculator-react";
import "./MortgageCalc.css";
import Modal from "react-modal";
import { IoMdCloseCircle } from "react-icons/io";
import { Helmet } from "react-helmet";
import Notification from "../../utils/Notification";
import { storein } from "../../utils/constants";
import axios from "axios";
import { mobileValidate } from "../../utils/helpers";
import CurrencyInput from "react-currency-input-field";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    background: "var(--color_brand)",
    color: "white",
    transform: "translate(-50%, -50%)",
  },
};

const MortgageCalc = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [homeValue, setHomeValue] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [loanDuration, setLoanDuration] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [totalMonths, setTotalMonths] = useState(0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [description, setDescription] = useState("");
  const [getChecked, setChecked] = useState("");

  const [homeValueError, setHomeValueError] = useState("");
  const [downPaymentError, setDownPaymentError] = useState("");
  const [interestRateError, setInterestRateError] = useState("");
  const [loanDurationError, setLoanDurationError] = useState("");
  const [rawInterestRate, setRawInterestRate] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const isCheck = JSON.parse(localStorage.getItem("checkedValue"));
    setChecked(isCheck);    
  }, []);

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
    setTotalMonths(months); // Update total months state
  };

  const validateFields = () => {
    let isValid = true;

    if (!homeValue) {
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

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const handleCalculate = (e) => {
    e.preventDefault();
    const isValid = validateFields();
    if (isValid) {
      calculateMortgage();
      if (getChecked !== 1) {
        setTimeout(() => {
          openModal();
        }, 1500);
        // openModal();
      }
    }
  };

  const handleInterestRateChange = (e) => {
    const value = e.target.value.replace(/[^0-9.]/g, ""); // Allow only numbers and dots
    setRawInterestRate(value);
  };

  // const [hValue, setHValue] = useState("");
  // const [deposit, setDeposit] = useState("");
  // const [intRate, setIntRate] = useState("");
  // const [duration, setDuration] = useState("");
  // const [principalAmt, setPrincipalAmt] = useState("");
  // const [ttlAmount, setTtlAmount] = useState("");

  const LeadsApi = async () => {
    console.log("abc");
    const regEx =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexpMobile = /^[0-9\b]+$/;

    if (name == "") {
      Notification("error", "Error!", "Please enter your Name!");
      return;
    } else if (email == "") {
      Notification("error", "Error!", "Please enter your Email Address!");
      return;
    } else if (regEx.test(email) == false) {
      Notification("error", "Error!", "Please enter valid email id!");
      return;
    } else if (number === "") {
      alert("Enter the Mobile number....!");
      return;
    } else if (number.length < 10 || number.length > 10) {
      // alert("Enter valid mobile number...");
      Notification("error", "Error!", "Enter valid mobile number...");
      return;
    } else if (description == "") {
      Notification("error", "Error!", "Please enter some Description!");
      return;
    } else {
      const formData = new FormData();
      formData.append("home_value", homeValue);
      formData.append("deposit", downPayment);
      formData.append("interest_rate", rawInterestRate);
      formData.append("loan_duration", loanDuration);
      formData.append("principal_and_interest_repayments", monthlyPayment);
      formData.append("total_loan_repayments", totalPayment);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone_number", number);
      formData.append("brief_inquiry", description);
      console.log("formData contact us ", formData);

      const response = await axios
        .post(storein, formData, {
          headers: {
            Accept: "application/x.company.v1+json",
          },
          // "Access-Control-Allow-Origin": "*",
        })
        .catch((error) => console.error(`Error: ${error}`));
      // console.log("response contact us ", response.data);

      if (response.data.success == 1) {
        localStorage.setItem(
          "checkedValue",
          JSON.stringify(response.data.data.checked)
        );
        // console.log("response.data.data.checked", response.data.data.checked);

        setName("");
        setEmail("");
        setNumber("");
        setDescription("");
        Notification("success", "Success!", response.data.message);
        window.location.reload(true);

        // Notification(
        //   "success",
        //   "Success!",
        //   "Form has been successfully submitted"
        // );
        return;
      } else {
        Notification("error", "Error!", response.data.message);
        return;
      }
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      const length = rawInterestRate.length;
      inputRef.current.selectionStart = length;
      inputRef.current.selectionEnd = length;
    }
  }, [rawInterestRate]);

  const formatPrice = (number) => {
    return new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
      minimumFractionDigits: 0,
    }).format(number);
  };

  const handleInputChange = (e) => {
    const rawValue = parseFloat(e.target.value); // Get the raw numerical value
    setHomeValue(rawValue); // Update the state with the raw value
  };
  return (
    <>
      <Helmet>
        <title>Mortgage Titans | Calculator</title>
      </Helmet>
      <div style={{ height: "90px" }}></div>
      <div className="MortgageCalc_main">
        {/* <Form /> */}
        <div className="Form_main">
          <h2>Mortgage Repayment Calculator</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
            onSubmit={handleCalculate}>
            <div className="Calc_input_main" style={{ padding: "0 0.5rem" }}>
              <label>Home Value:</label>
              <div style={{ position: "relative", display: "inline-block" }}>
                <span
                  style={{
                    position: "absolute",
                    left: 6,
                    top: "49%",
                    transform: "translateY(-50%)",
                    pointerEvents: "none",
                  }}>
                  $
                </span>
                <CurrencyInput
                  value={homeValue}
                  decimalsLimit={2}
                  onValueChange={setHomeValue}
                  // id="input-example"
                  // name="input-name"
                  // placeholder="Please enter home value"
                  // onValueChange={(e) => {
                  //   setHomeValue(e.target.value);
                  // }}
                />

                {/* <input
                  style={{ padding: "0.7rem 0.5rem" }}
                  type="number"
                  value={}
                  onChange={(e) => {
                    setHomeValue(e.target.value);
                  }}
                /> */}
              </div>
              {homeValueError && (
                <p style={{ color: "red" }}>{homeValueError}</p>
              )}
            </div>
            <div className="Calc_input_main" style={{ padding: "0 0.5rem" }}>
              <label>Deposit:</label>
              <div style={{ position: "relative", display: "inline-block" }}>
                <span
                  style={{
                    position: "absolute",
                    left: 6,
                    top: "49%",
                    transform: "translateY(-50%)",
                    pointerEvents: "none",
                  }}>
                  $
                </span>

                <CurrencyInput
                  value={downPayment}
                  decimalsLimit={2}
                  onValueChange={setDownPayment}
                />
                {/* <input
                  style={{ padding: "0.7rem 0.5rem" }}
                  type="number"
                  value={downPayment}
                   onChange={(e) => setDownPayment(e.target.value)}
                /> */}
              </div>

              {downPaymentError && (
                <p style={{ color: "red" }}>{downPaymentError}</p>
              )}
            </div>
            <div className="Calc_input_main" style={{ margin: "0 0.5rem" }}>
              <label>Interest Rate (%):</label>
              <input
                ref={inputRef}
                type="text"
                value={rawInterestRate ? `${rawInterestRate} %` : ""}
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
              className="btn btn_bg"
              style={{
                letterSpacing: "1px",
                cursor: "pointer",
                margin: "0 0.5rem",
              }}>
              Calculate
            </button>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}>
            <h2>Results:</h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}>
              <h3 style={{ letterSpacing: "1px" }}>
                Principal and Interest Repayments: &nbsp;
                {formatPrice(monthlyPayment)} / month
                {/* {monthlyPayment} */}
              </h3>
              {/* {totalMonths} */}
              <h3 style={{ letterSpacing: "1px" }}>
                Total Loan Repayments: &nbsp; {formatPrice(totalPayment)}
                {/* {totalPayment} */}
              </h3>
            </div>
          </div>
          <div style={{ color: "red", fontSize: "14px" }}>
            <span style={{ fontWeight: "700" }}>Disclaimer: </span>
            <p style={{ letterSpacing: "1px" }}>
              The calculations and comparisons presented by this service are
              given with honest intent. We do not accept liability for any
              losses that may result from using or relying on these calculations
              or the conclusions drawn from them.
            </p>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <IoMdCloseCircle
              onClick={() => {
                closeModal();
              }}
              style={{ fontSize: "20px", cursor: "pointer" }}
            />
          </div>
          <div style={{ fontSize: "18px" }}>
            Ready to secure your dream home with a mortgage that meets your
            needs? Let's get started!
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div>
              <input
                type="text"
                placeholder="Enter Name"
                value={name}
                // className="c-txt"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // className="c-txt"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter Phone no."
                maxLength={10}
                value={number}
                onChange={(e) => {
                  if (mobileValidate(e.target.value)) {
                    setNumber(e.target.value);
                  }
                }}
                // className="c-txt"
              />
            </div>

            <div>
              <textarea
                placeholder="Brief Content"
                value={description}
                // className="c-msg-txt"
                onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
          </div>
          <div>
            <button
              className="btn"
              onClick={() => {
                LeadsApi();
              }}>
              Submit
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MortgageCalc;
