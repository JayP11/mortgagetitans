import React, { useEffect, useRef, useState } from "react";
import MortgageCalculator from "mortgage-calculator-react";
import "./MortgageCalc.css";
import Form from "../../components/Form";
import Modal from "react-modal";
import { IoMdCloseCircle } from "react-icons/io";
import { Helmet } from "react-helmet";
import Notification from "../../utils/Notification";
import { contactus_url } from "../../utils/constants";
import axios from "axios";
import { mobileValidate } from "../../utils/helpers";

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
  let subtitle;

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
      openModal();
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
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [description, setdescription] = useState("");

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
      formData.append("", homeValue);
      formData.append("name", downPayment);
      formData.append("name", rawInterestRate);
      formData.append("name", loanDuration);
      formData.append("name", monthlyPayment);
      formData.append("", totalPayment);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("number", number);
      formData.append("description", description);
      console.log("formData contact us ", formData);

      const response = await axios
        .post(contactus_url, formData, {
          headers: {
            Accept: "application/x.company.v1+json",
          },
          // "Access-Control-Allow-Origin": "*",
        })
        .catch((error) => console.error(`Error: ${error}`));
      // console.log("response contact us ", response.data);

      if (response.data.success == 1) {
        setname("");
        setemail("");
        setnumber("");
        setdescription("");
        Notification("success", "Success!", response.data.message);

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

  // const contactApi = async () => {
  //   console.log("abc");
  //   const regEx =
  //     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   const regexpMobile = /^[0-9\b]+$/;

  //   if (name == "") {
  //     Notification("error", "Error!", "Please enter your Name!");
  //     return;
  //   } else if (email == "") {
  //     Notification("error", "Error!", "Please enter your Email Address!");
  //     return;
  //   } else if (regEx.test(email) == false) {
  //     Notification("error", "Error!", "Please enter valid email id!");
  //     return;
  //   } else if (number === "") {
  //     alert("Enter the Mobile number....!");
  //     return;
  //   } else if (number.length < 10 || number.length > 10) {
  //     // alert("Enter valid mobile number...");
  //     Notification("error", "Error!", "Enter valid mobile number...");
  //     return;
  //   } else if (subject == "") {
  //     Notification("error", "Error!", "Please enter your Subject!");
  //     return;
  //   } else if (description == "") {
  //     Notification("error", "Error!", "Please enter some Description!");
  //     return;
  //   } else {
  //     const formData = new FormData();
  //     formData.append("name", name);
  //     formData.append("email", email);
  //     formData.append("number", number);
  //     formData.append("subject", subject);
  //     formData.append("description", description);
  //     console.log("formData contact us ", formData);

  //     const response = await axios
  //       .post(contactus_url, formData, {
  //         headers: {
  //           Accept: "application/x.company.v1+json",
  //         },
  //         // "Access-Control-Allow-Origin": "*",
  //       })
  //       .catch((error) => console.error(`Error: ${error}`));
  //     // console.log("response contact us ", response.data);

  //     if (response.data.success == 1) {
  //       setname("");
  //       setemail("");
  //       setnumber("");
  //       setsubject("");
  //       setdescription("");
  //       Notification("success", "Success!", response.data.message);

  //       // Notification(
  //       //   "success",
  //       //   "Success!",
  //       //   "Form has been successfully submitted"
  //       // );
  //       return;
  //     } else {
  //       Notification("error", "Error!", response.data.message);
  //       return;
  //     }
  //   }
  // };

  useEffect(() => {
    if (inputRef.current) {
      const length = rawInterestRate.length;
      inputRef.current.selectionStart = length;
      inputRef.current.selectionEnd = length;
    }
  }, [rawInterestRate]);

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
                <input
                  style={{ padding: "0.7rem 0.5rem" }}
                  type="number"
                  value={homeValue}
                  onChange={(e) => setHomeValue(e.target.value)}
                />
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
                <input
                  style={{ padding: "0.7rem 0.5rem" }}
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(e.target.value)}
                />
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
              style={{ cursor: "pointer", margin: "0 0.5rem" }}>
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
                Principal and Interest Repayments: ${monthlyPayment}
              </h3>
              <h3 style={{ letterSpacing: "1px" }}>
                Total Loan Repayments: ${totalPayment}
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
        style={customStyles}
        contentLabel="Example Modal">
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
                onChange={(e) => setname(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
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
                    setnumber(e.target.value);
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
                onChange={(e) => setdescription(e.target.value)}></textarea>
            </div>
          </div>
          <div>
            <button className="btn">Submit</button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MortgageCalc;
