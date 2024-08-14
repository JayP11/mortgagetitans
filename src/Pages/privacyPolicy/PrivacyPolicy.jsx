import React from "react";
import styled from "styled-components";
import "./PrivacyPolicy.css";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <div
        style={{
          height: "90px",
        }}
      ></div>
      <Wrapper>
        <br />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            background: "var(--color_blue_shade)",
            padding: "3rem",
          }}
        >
          <div>
            <Link
              style={{
                color: "white",
                fontWeight: "700",
                fontSize: "22px",
              }}
              to="/"
            >
              Home&nbsp;/&nbsp;
            </Link>
          </div>
          <h3 className="privacy">Privacy Policy</h3>
        </div>
        <section className="sec-privacy-policy">
          <div className="con-privacy-policy">
            {/* <br />{" "} */}
            <p className="privacy-policy-subheading-txt">
              At Mortgage Titans, we are committed to protecting your privacy
              and safeguarding your personal information. This Privacy Policy
              outlines how we collect, use, and disclose your personal
              information when you visit our website or use our services.
            </p>
            {/* <br /> */}
            <div className="privacy_para_main">
              <div className="privacy_para_inner">
                <h4 className="privacy-policy-subheading">
                  Collection of Personal Information:
                </h4>
                <p className="privacy-policy-subheading-txt">
                  We may collect personal information from you when you visit
                  our website, fill out a form, or contact us by phone or email.
                  This may include your name, contact information, and other
                  details relevant to your inquiry or application.
                </p>
              </div>
              <div className="privacy_para_inner">
                <h4 className="privacy-policy-subheading">
                  Use of Personal Information:{" "}
                </h4>
                <p className="privacy-policy-subheading-txt">
                  We may use your personal information to provide you with
                  information, products, or services that you request from us.
                  We may also use your information to improve our website,
                  communicate with you about your account or inquiries, and
                  customize your experience with us.
                </p>
              </div>
              <div className="privacy_para_inner">
                <h4 className="privacy-policy-subheading">
                  Disclosure of Personal Information:{" "}
                </h4>
                <p className="privacy-policy-subheading-txt">
                  We may disclose your personal information to third-party
                  service providers who assist us in providing our services to
                  you. We may also disclose your information as required by law
                  or to protect our rights, property, or safety.{" "}
                </p>
              </div>
              <div className="privacy_para_inner">
                <h4 className="privacy-policy-subheading">
                  Security of Personal Information:{" "}
                </h4>
                <p className="privacy-policy-subheading-txt">
                  We are committed to ensuring that your personal information is
                  secure. We use reasonable measures to protect your information
                  from unauthorized access, use, or disclosure.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .sec-privacy-policy {
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 80px;
  }

  .con-privacy-policy {
    max-width: 1140px;
    margin: 0 auto;
    text-align: start;
  }

  .privacy-policy-heading {
    color: var(--clr-heading-main);
    font-weight: 600;
    text-transform: uppercase;
    font-size: 28px;
  }

  .privacy-policy-subheading-txt {
    font-size: 18px;
    letter-spacing: 1px;
    color: var(--color-gray);
  }

  .privacy-policy-subheading {
    font-size: 22px;
    font-weight: 600;
    color: #000;
    line-height: 1.6rem;
  }

  .privacy-policy-txt {
    font-size: 16px;
    line-height: 1.3;
    color: var(--color-gray);
  }

  .privacy-policy-txt-lineheight {
    line-height: 1.5;
  }

  .privacy-policy-subheading-list-flex {
    font-size: 20px;
    color: #000;
    line-height: 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style: disc;
    padding-left: 15px;
  }
  @media screen and (max-width: 1140px) {
    .con-privacy-policy {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
`;

export default PrivacyPolicy;
