import React, { useEffect } from "react";
import MortgageCalculator from "mortgage-calculator-react";
import "./MortgageCalc.css";
import Form from "../../components/Form";

const MortgageCalc = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div style={{ height: "90px" }}></div>
      {/* <div style={{ padding: "2rem" }}>
        <MortgageCalculator
          price={100000}
          downPayment={0}
          interestRate={1}
          additionalPrincipalPayment={0}
          taxRate={0}
          insuranceRate={0}
          months={240}
          mortgageInsuranceEnabled={true}
        />
      </div> */}
      <div className="MortgageCalc_main">
        <Form />
      </div>
    </>
  );
};

export default MortgageCalc;
