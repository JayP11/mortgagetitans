import React, { useState } from "react";
import "./Choose2.css";
import axios from "axios";
import { contactus_url } from "../../utils/constants";
import Notification from "../../utils/notification";
import { mobileValidate } from "../../utils/helpers";

const Choose2 = () => {
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
    } else if (number === "") {
      alert("Enter the Mobile number....!");
      return;
    } else if (email == "") {
      Notification("error", "Error!", "Please enter your Email Address!");
      return;
    } else if (number === "") {
      alert("Enter the Mobile number....!");
      return;
    } else if (number.length < 10 || number.length > 10) {
      Notification("error", "Error!", "Enter valid mobile number...");
      return;
    } else if (regEx.test(email) == false) {
      Notification("error", "Error!", "Please enter valid email id!");
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
    <div className="choose2">
      <div className="choose2_inner">
        <h3>Get in Touch __</h3>
        {/* <h2 style={{ margin: "0px" }}>Among Them We're</h2> */}
        <p
          style={{
            fontSize: "26px",
            fontWeight: "600",
            color: "white",
            padding: "0 1rem",
          }}>
          Whatever your question, we’d love to hear from you.
        </p>
        {/* <form className="choose-form">
          <div className="form-section">
            <input type="text" placeholder="John" />
            <input type="text" placeholder="10" />
          <button className="search">Search Your Result</button>
          </div>
        </form> */}
        <section className="contact_sec">
          <div
            className="contact"
            style={{ padding: "0 2rem", margin: "0 2rem" }}>
            <div
              className="c-form cform_contact_form"
              style={{ marginTop: "0px" }}>
              <label className="c-lbl">Name</label>
              <input
                type="text"
                placeholder=""
                value={name}
                className="c-txt input_transparent"
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
                className="c-txt input_transparent"
              />

              <label className="c-lbl">Email</label>
              <input
                type="text"
                placeholder=""
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className="c-txt input_transparent"
              />
              <label className="c-lbl">Subject</label>
              <input
                type="text"
                placeholder=""
                value={subject}
                onChange={(e) => setsubject(e.target.value)}
                className="c-txt input_transparent"
              />

              <label className="c-lbl">Description</label>
              <textarea
                style={{}}
                placeholder="Please leave comment here..."
                value={description}
                className="c-msg-txt  textarea_transparent"
                onChange={(e) => setdescription(e.target.value)}></textarea>
              <br />
              <button
                className="submit"
                onClick={() => {
                  contactApi();
                }}>
                Submit
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Choose2;
