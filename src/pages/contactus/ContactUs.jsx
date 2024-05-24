import React, { useEffect, useState } from "react";
import "./ContactUs.css";
import { Helmet } from "react-helmet";
import axios from "axios";
import { contactus_url } from "../../utils/constants";
import Notification from "../../utils/Notification";
import { mobileValidate } from "../../utils/helpers";
import { Link } from "react-router-dom";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [subject, setsubject] = useState("");
  const [description, setdescription] = useState("");

  const contactApi = async () => {
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
    } else if (subject == "") {
      Notification("error", "Error!", "Please enter your Subject!");
      return;
    } else if (description == "") {
      Notification("error", "Error!", "Please enter some Description!");
      return;
    } else {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("number", number);
      formData.append("subject", subject);
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
        setsubject("");
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

  return (
    <>
      <Helmet>
        <title>Mortgage Titans | Contact</title>
      </Helmet>
      <section className="contact_sec">
        <div style={{ height: "100px" }}></div>
        <div className="contact">
          <div className="c-form">
            <h1 className="contact-us-heading"> Contact Us</h1>
            <div className="c-form">
              <label className="c-lbl">Name</label>
              <input
                type="text"
                placeholder=""
                value={name}
                className="c-txt"
                onChange={(e) => setname(e.target.value)}
              />
              {/* <input type="text" className="c-txt" /> */}
              <label className="c-lbl">Number</label>
              <input
                type="text"
                placeholder=""
                name="field-name"
                value={number}
                maxLength={10}
                onChange={(e) => {
                  if (mobileValidate(e.target.value)) {
                    setnumber(e.target.value);
                  }
                }}
                className="c-txt"
              />
              {/* <input type="text" className="c-txt" /> */}
              <label className="c-lbl">Email</label>
              <input
                type="text"
                placeholder=""
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className="c-txt"
              />
              <label className="c-lbl">Subject</label>
              <input
                type="text"
                placeholder=""
                value={subject}
                onChange={(e) => setsubject(e.target.value)}
                className="c-txt"
              />
              {/* <input type="text" className="c-txt" /> */}
              <label className="c-lbl">Descreption</label>
              <textarea
                placeholder="Please leave comment here..."
                value={description}
                className="c-msg-txt"
                onChange={(e) => setdescription(e.target.value)}></textarea>
              {/* <textarea type="text" className="c-msg-txt" /> */}
              <br />
              <button
                className="btn btn_bg"
                onClick={() => {
                  contactApi();
                }}>
                Submit
              </button>
            </div>
          </div>
          <div className="c-details">
            <h1 className="quick-heading">Quick Contact</h1>
            <div className="con-info-flex">
              {/* <HiOutlineMail className="con-info-icon" /> */}
              <p className="c-ulbl mt01">Email Id :</p>
            </div>

            {/* <p className="c-dlbl">jash.shah@mortgagetitans.com.au</p> */}
            <div style={{ marginBottom: "1rem" }}>
              <Link
                className="c-dlbl"
                to="mailto:jash.shah@mortgagetitans.com.au">
                jash.shah@mortgagetitans.com.au
              </Link>
            </div>
            <div className="con-info-flex">
              {/* <AiOutlinePhone className="con-info-icon" /> */}
              <p className="c-ulbl">Phone :</p>
            </div>
            {/* <p className="c-dlbl">+0410 222 182</p> */}
            <a href="tel:+0410222182" className="c-dlbl">
              +0410 222 182
            </a>
            {/* <div className="con-info-flex">
              <GrLocation className="con-info-icon" />
              <p className="c-ulbl">Address :</p>
            </div>
            <p className="c-dlbl" style={{ marginBottom: "1.5rem" }}>
              Applified, 301 Pride Square JK Chowk Rajkot 360005
            </p>

            <iframe
              width="100%"
              height="300"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118147.80351149273!2d70.82129635!3d22.27348695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac71cdf0f%3A0x76dd15cfbe93ad3b!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1714548244437!5m2!1sen!2sin"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              allowFullScreen
            ></iframe> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
