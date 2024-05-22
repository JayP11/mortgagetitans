// import React, { useState } from "react";
// import { FaDollarSign } from "react-icons/fa";
// import FormInputGroup from "./FormInputGroup";

// function Form() {

//   const [homeValue, setHomeValue] = useState("");
//   const [downPayment, setDownPayment] = useState("");
//   const [loanAmount, setLoanAmount] = useState("");
//   const [interestRate, setInterestRate] = useState("");
//   const [loanDuration, setLoanDuration] = useState("");
//   const [monthlyPayment, setMonthlyPayment] = useState(0);
//   const [totalPayment, setTotalPayment] = useState(0);

//   function calculateLoanAmount() {
//     setLoanAmount(homeValue - downPayment);
//     return loanAmount;
//   }

//   function calculateMonthlyPayment() {
//     // Percentage conversion
//     function percentageToDecimal(percent) {
//       return percent / 12 / 100;
//     }

//     // years to month conversion
//     function yearsToMonths(year) {
//       return year * 12;
//     }

//     setMonthlyPayment(
//       (percentageToDecimal(interestRate) * loanAmount) /
//         (1 -
//           Math.pow(
//             1 + percentageToDecimal(interestRate),
//             -yearsToMonths(loanDuration)
//           ))
//     );

//     return monthlyPayment;
//   }

//   return (
//     <form onSubmit={(e) => e.preventDefault()}>
//       <FormInputGroup
//         text="Home Value "
//         icon={<FaDollarSign />}
//         placeholder={"Enter the value of the home"}
//         value={homeValue}
//         onInput={(e) => setHomeValue(e.target.value)}
//         onkeyup={calculateLoanAmount}
//       />
//       <FormInputGroup
//         text="Down payment"
//         icon={<FaDollarSign />}
//         placeholder={"Enter your funds"}
//         value={downPayment}
//         onInput={(e) => setDownPayment(e.target.value)}
//         onkeyup={calculateLoanAmount}
//       />
//       <FormInputGroup
//         text="Loan amount"
//         icon={<FaDollarSign />}
//         placeholder={"Enter your funds"}
//         readOnly={true}
//         value={loanAmount}
//       />
//       <FormInputGroup
//         text="Interest Rate %"
//         placeholder={"Enter your interest rate"}
//         value={interestRate}
//         onInput={(e) => setInterestRate(e.target.value)}
//       />
//       <FormInputGroup
//         text="Loan Duration (years)"
//         placeholder={"Enter the duration of your loan in years"}
//         value={loanDuration}
//         onInput={(e) => setLoanDuration(e.target.value)}
//       />
//       <h4 className="alert alert-info fw-bold">
//         Monthly payment: <FaDollarSign />
//         {parseFloat(monthlyPayment.toFixed(2))}
//       </h4>

//       <button
//         type="submit"
//         onClick={calculateMonthlyPayment}
//         className="btn btn-primary btn-lg w-100 center "
//       >
//         Calculate
//       </button>
//     </form>
//   );
// }

// export default Form;

import React, { useState } from "react";

function MortgageCalculator() {
  const [homeValue, setHomeValue] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanDuration, setLoanDuration] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [error, setError] = useState("");

  const [homeValueError, setHomeValueError] = useState("");
  const [downPaymentError, setDownPaymentError] = useState("");
  const [interestRateError, setInterestRateError] = useState("");
  const [loanDurationError, setLoanDurationError] = useState("");

  const calculateMortgage = () => {
    const home = parseFloat(homeValue);
    const down = parseFloat(downPayment);
    const rate = parseFloat(interestRate);
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
    setMonthlyPayment(monthlyPayment.toFixed(2));
    setTotalPayment(totalPayment.toFixed(2));
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

    if (!interestRate) {
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

  const clearErrors = () => {
    setHomeValueError("");
    setDownPaymentError("");
    setInterestRateError("");
    setLoanDurationError("");
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    calculateMortgage();
    validateFields();
    // clearErrors();
  };

  return (
    <div className="Form_main">
      <h2>Mortgage Repayment Calculator</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
        onSubmit={handleCalculate}>
        <div className="Calc_input_main">
          <label>Home Value:</label>
          <input
            type="number"
            value={homeValue}
            onChange={(e) => setHomeValue(e.target.value)}
          />
          {homeValueError && <p style={{ color: "red" }}>{homeValueError}</p>}
        </div>
        <div className="Calc_input_main">
          <label>Deposit:</label>
          <input
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(e.target.value)}
          />
          {downPaymentError && (
            <p style={{ color: "red" }}>{downPaymentError}</p>
          )}
        </div>
        <div className="Calc_input_main">
          <label>Interest Rate (%):</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
          {interestRateError && (
            <p style={{ color: "red" }}>{interestRateError}</p>
          )}
        </div>
        <div className="Calc_input_main">
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
          style={{ cursor: "pointer" }}>
          Calculate
        </button>
      </div>

      <div>
        <h3>Results:</h3>
        <div>
          <p>Monthly Payment: ${monthlyPayment}</p>
        </div>
        <p>Total Payment: ${totalPayment}</p>
      </div>
    </div>
  );
}

export default MortgageCalculator;
