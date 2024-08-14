import React, { useState, useEffect } from "react";
import "./ContactUs.css";
import { FaPlus } from "react-icons/fa6";
import { BiPhoneCall } from "react-icons/bi";
import axios from "axios";
import { contactus_url } from "../../utils/constants";
import { mobileValidate } from "../../utils/helpers";
import Notification from "../../utils/Notification";

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
    // const regexpMobile = /^[0-9\b]+$/;

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
      console.log("formData contact  ", formData);

      const response = await axios
        .post(contactus_url, formData, {
          headers: {
            Accept: "application/x.company.v1+json",
          },
        })
        .catch((error) => console.error(`Error: ${error}`));

      if (response.data.success == 1) {
        setname("");
        setemail("");
        setnumber("");
        setsubject("");
        setdescription("");
        Notification("success", "Success!", response.data.message);

        return;
      } else {
        Notification("error", "Error!", response.data.message);
        return;
      }
    }
  };
  return (
    <div className="contact-us">
      <div className="contact-left">
        <img
          src="https://themes.hibootstrap.com/levix/wp-content/uploads/2021/09/contact-img.jpg"
          alt="contact"
        />
      </div>
      <div className="contact-right">
        <div className="c-form">
          <h2>Contact With Us</h2>
          <form className="contact-form">
            <label className="c-lbl">Name</label>
            <input
              type="text"
              placeholder=""
              value={name}
              className="c-txt"
              onChange={(e) => setname(e.target.value)}
            />
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
            <label className="c-lbl">Description</label>
            <input
              type="text"
              placeholder=""
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              className="c-txt"
            />

            <br />
            <div className="contact-end">
              <button className="message" onClick={contactApi}>
                <FaPlus />
                Send Message
              </button>
              <div className="emergency">
                <BiPhoneCall size={40} />
                <div style={{ width: "5rem", paddingRight: "3rem" }}>
                  <p>Contact</p>
                  <p>+0410 222 182</p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
