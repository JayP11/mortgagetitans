import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Wrapper>
      <section className="footer_main_dv">
        <div className="footer-middle">
          <div className="container">
            <div
              style={{ height: "50px", width: "290px", paddingBottom: "2rem" }}>
              <img
                src={logo}
                alt=""
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="row">
              <div className="col-md-9">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="widget">
                      <h4 class="widget-title">Quick Links</h4>
                      <ul
                        className="links link-parts"
                        style={{ padding: "0px" }}>
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/AboutUs">About us</Link>
                        </li>
                        <li>
                          <Link to="/calculator">Calculator</Link>
                        </li>
                        <li>
                          <Link to="/concern">Concern</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <ul className="contact-info" style={{ padding: "0px" }}>
                      <li className="cont_info_data">
                        <h4
                          className="widget-title"
                          style={{ marginBottom: "10px" }}>
                          Phone
                        </h4>
                        <span>
                          <a href="tel:+0410222182">+0410 222 182</a>
                        </span>
                      </li>
                      <li className="cont_info_data">
                        <h4
                          className="widget-title"
                          style={{ marginBottom: "10px" }}>
                          Whatsapp
                        </h4>
                        <span>
                          <a
                            href="http://api.whatsapp.com/send?phone=0410222182&text=Let%27s%20Get%20in%20Touch"
                            target="_blank">
                            +0410 222 182
                          </a>
                        </span>
                      </li>
                      <li className="cont_info_data">
                        <h4
                          className="widget-title"
                          style={{ marginBottom: "10px" }}>
                          Email
                        </h4>
                        <p style={{ margin: "0px" }}>
                          <Link
                            to="mailto:jash.shah@mortgagetitans.com.au"
                            style={{
                              color: "white",
                              fontSize: "16px",
                            }}>
                            jash.shah@mortgagetitans.com.au
                          </Link>
                        </p>
                      </li>
                    </ul>
                  </div>

                  {/* <div className="col-sm-4">
                    <div className="widget">
                      <h4 className="widget-title">DOWNLOAD APP</h4>
                      <ul className="download-btn">
                        <li><a href="javascript:void(0)"><img src={applogo} alt="" /></a></li>
                        <li><a href="javascript:void(0)"><img src={ioslogo} alt="" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="widget">
                      <h4 className="widget-title">SHIPPING</h4>
                      <ul className="shipping">
                        <li><a href="javascript:void(0)"><img src={shipping} alt="" /></a></li>
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div>
              <p
                style={{
                  color: "whitesmoke",
                  margin: "0px",
                  padding: "1rem 0",
                }}>
                Financial needs and requirements need to be reviewed prior to
                any tailored advice being provided or any offer or acceptance of
                a loan product.
              </p>
            </div>
            <div
              className="footer-bottom d-flex justify-content-between align-items-center flex-wrap"
              style={{
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}>
              <div
                className="col-md-8"
                style={{
                  padding: "0px",
                }}>
                <p
                  className="footer-copyright py-3 pr-4 mb-0"
                  style={{
                    color: "whitesmoke",
                    margin: "0px",
                  }}>
                  ABN 99 672 958 459 | FBAA Member M-356883 | Australian Credit
                  License number 384704 | Credit Representative number 557367
                </p>
              </div>
              <div className="col-md-8" style={{ padding: "0px" }}>
                <p
                  className="footer-copyright py-3 pr-4 mb-0"
                  style={{
                    color: "whitesmoke",
                    margin: "0px",
                  }}>
                  © 2024 Mortgage Titans, All right reserved.
                </p>
              </div>
              {/* <div class="col-md-0"></div> */}
              {/* <img src={payment} alt="payment methods" /> */}
            </div>
          </div>
        </div>
        {/* <div className="f-link-btn">
          <a
            href="http://api.whatsapp.com/send?phone=261332183439&text=Let%27s%20Get%20in%20Touch"
            target="_blank">
            <FaWhatsapp />
          </a>
        </div> */}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  ${"" /* background-color: #222529 !important; */}
  background-color: var(--color_brand) !important;
  color: #fff;
  .f-link-btn {
    position: fixed;
    bottom: 30px;
    z-index: 155555555;
    right: 30px;
  }
  section.footer_main_dv {
    position: relative;
  }

  .cont_info_data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0px;
  }

  .f-link-btn a {
    background-color: #4dc247 !important;
    color: #fff;
    height: 45px;
    display: flex;
    width: 45px;
    justify-content: center;
    align-items: center;
    font-size: 29px;
    border-radius: 100px;
    padding: 0 0 1px 0;
    cursor: pointer;
  }
  .footer-middle {
    padding: 5.8rem 0 1.2rem;
  }
  .container {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
  }
  .footer-ribbon {
    position: absolute;
    top: -110px;
    left: 1.5rem;
    min-width: 142px;
    padding: 8px 0;
    font-size: 1.3rem;
    line-height: normal;
    text-align: center;
  }
  .bg-primary {
    background-color: #fff !important;
  }
  .ls-10 {
    letter-spacing: 0.01em !important;
  }
  .text-white {
    color: #fff !important;
  }
  .footer-ribbon::before {
    display: block;
    position: absolute;
    top: 0;
    left: -15px;
    width: 0;
    height: 0;
    border-top: 17px solid transparent;
    border-right: 15px solid #504be2;
    content: "";
  }
  .widget {
    margin-bottom: 3rem;
  }
  .widget-title {
    color: #fff;
    font-size: 17px;
    letter-spacing: 0.01em;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0 0 1.7rem;
  }
  .contact-info li {
    position: relative;
    margin-bottom: 1.3rem;
    line-height: 1.4;
  }
  [class*="col-"] {
    padding-left: 10px;
    padding-right: 10px;
  }
  .col-md-4 {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
  }
  .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -10px;
    margin-left: -10px;
    overflow: hidden;
    /* justify-content: center; */
  }
  .contact-info li span {
    font-weight: 500;
    font-size: 14px;
    line-height: normal;
  }
  .contact-info li span a {
    color: #fff;
  }
  .contact-info li span.contact-info-label {
    display: block;
    font-size: 18px;
    margin-bottom: 5px;
  }
  ul.social-icon {
    display: flex;
    align-items: center;
  }
  ul.social-icon li {
    color: #fff;
    border: 1px solid;
    border-radius: 100px;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px 0 0 0;
    margin-right: 9px;
    cursor: pointer;
    transition: all 0.5s ease;
  }
  ul.social-icon li svg {
    color: #fff;
    font-size: 16px;
  }
  ul.social-icon li:hover {
    ${"" /* background: #504be2; */}
    background: var(--clr-primary-indianred);
    transition: all 0.5s ease;
  }
  ul.links.link-parts a {
    ${"" /* font-size: 12px; */}
    line-height: 24px;
    color: var(--color-lightgray);
  }
  .col-sm-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  .col-md-9 {
    -ms-flex: 0 0 75%;
    /* flex: 0 0 75%;
    max-width: 75%; */
    flex: 0 0 100%;
    max-width: 100%;
  }
  ul.download-btn {
    display: flex;
    align-items: center;
    justify-content: start;
  }
  ul.download-btn img {
    max-width: 130px;
    border-radius: 5px;
  }
  ul.download-btn li {
    margin-right: 15px;
  }
  ${"" /* .col-md-8 { */}
  ${"" /* -ms-flex: 0 0 66.666667%; */}
   ${"" /* flex: 0 0 66.666667%; */}
   ${"" /* max-width: 66.666667%; */}
 ${"" /* } */}
  .footer-bottom {
    padding: 1.5rem 0;
    border-top: 1px solid white;
    -ms-flex-align: center !important;
    align-items: center !important;
    display: flex;
  }
  .f-logo img {
    /* max-width: 70%; */
    height: 45px;
    width: 200px;
    margin: 0 10px;
  }
  p.footer-copyright {
    margin: 0;
  }
  .footer-bottom img {
    max-width: 360px;
    margin-left: auto;
  }
  @media screen and (max-width: 1199px) {
    ul.download-btn {
      flex-direction: column;
      justify-content: start !important;
      align-items: self-end !important;
    }
    ul.download-btn img {
      max-width: 180px !important;
    }
  }
  @media (min-width: 768px) {
    .container {
      padding-left: 30px;
      padding-right: 30px;
    }
  }
  @media screen and (max-width: 767px) {
    .col-md-4 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .col-md-9 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .container {
      padding-left: 30px;
      padding-right: 30px;
      ${"" /* padding: 0 15px; */}
    }
    .col-sm-4 {
      max-width: 100%;
      flex: 0 0 100%;
    }
    ul.download-btn {
      flex-direction: unset !important;
    }
    .footer-bottom {
      flex-wrap: wrap;
    }
    ul.download-btn img {
      max-width: 180px !important;
      width: 100%;
    }
    ul.shipping img {
      max-width: 100%;
    }
    .footer-bottom img {
      max-width: 360px;
      width: 100%;
    }
    p.footer-copyright {
      font-size: 14px;
      padding: 0 0 10px 0;
      display: inline-block;
    }
  }
`;

export default Footer;

// import React from "react";
// import "./Footer.css";
// import { BiPhoneCall } from "react-icons/bi";
// import { FaWhatsapp } from "react-icons/fa";
// import { MdMailOutline } from "react-icons/md";
// import logo from "../../assets/logo.png";

// const Footer = () => {
//   const scrollToAbout = () => {
//     const aboutSection = document.getElementById("about");
//     aboutSection.scrollIntoView({ behavior: "smooth" });
//   };

//   const scrollToContact = () => {
//     const contactSection = document.getElementById("contact");
//     contactSection.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <footer>
//       <div className="footer">
//         <div className="footer-left">
//           <img src={logo} alt="logo" />
//         </div>
//         <div className="footer-right">
//           <ul>
//             <h2>Quick Links</h2>
//             <li>
//               <a href="/">Home</a>
//             </li>
//             <li>
//               <a href="/" onClick={scrollToAbout}>
//                 About Us
//               </a>
//             </li>
//             <li>
//               <a href="/calculator">Calculators</a>
//             </li>
//             <li>
//               <a href="/concern">Concern</a>
//             </li>
//             <li>
//               <a href="/" onClick={scrollToContact}>
//                 Contact
//               </a>
//             </li>
//           </ul>

//           <ul>
//             <h2>Address</h2>
//             <li>
//               <BiPhoneCall size={25} />
//               +0410 222 182
//             </li>
//             <li>
//               <FaWhatsapp size={25} />
//               +0410 222 182
//             </li>
//             <li className="location">
//               <MdMailOutline size={25} />
//               jash.shah@mortgagetitans.com.au
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className="copyright">
//         Financial needs and requirements need to be reviewed prior to any
//         tailored advice being provided or any offer or acceptance of a loan
//         product.
//       </div>
//       <hr />
//       <div className="copy-right">
//         ABN 99 672 958 459 | FBAA Member M-356883 | Australian Credit License
//         number 384704 | Credit Representative number 557367 © 2024 Mortgage
//         Titans, All right reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;
