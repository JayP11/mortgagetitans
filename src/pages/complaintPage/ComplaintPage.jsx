import React, { useState, useEffect } from "react";
import "./ComplaintPage.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import { concern_api } from "../../utils/constants";
import { mobileValidate } from "../../utils/helpers";
import Notification from "../../utils/Notification";

const ComplaintPage = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [subject, setsubject] = useState("");
  const [description, setdescription] = useState("");
  const [selectedOption, setSelectedOption] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const data = [
    {
      id: 1,
      name: "Concern",
    },
    {
      id: 2,
      name: "Complaint",
    },
  ];

  const complaintApi = async () => {
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
    } else if (selectedOption == "") {
      Notification(
        "error",
        "Error!",
        "Please select the option for concern/complaint !"
      );
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
      formData.append("complaint", selectedOption);
      formData.append("details", description);
      console.log("formData contact us ", formData);
      const response = await axios
        .post(concern_api, formData, {
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
        // Notification("error", "Error!", "please enter valid data!");
        return;
      }
    }
  };
  return (
    <>
      <Helmet>
        <title>Mortgage Titans | Complaint / Concern</title>
      </Helmet>
      <section className="complaint_sec">
        <div
          style={{
            height: "90px",
          }}></div>
        <br />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            background: "var(--color_blue_shade)",
            padding: "4rem",
          }}>
          <div>
            <Link
              style={{
                color: "white",
                fontWeight: "700",
                fontSize: "22px",
              }}
              to="/">
              Home&nbsp;/&nbsp;
            </Link>
          </div>
          <h2> Concern</h2>
        </div>
        <div className="complaint">
          {/* <div className="c-form"> */}
          <div className="c-form complaint_form_border">
            <label className="c-label">Name</label>
            <input
              type="text"
              placeholder=""
              value={name}
              className="c-txt"
              onChange={(e) => setname(e.target.value)}
            />{" "}
            <label className="c-label">Contact Number</label>
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
            <label className="c-label">Email</label>
            <input
              type="text"
              placeholder=""
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="c-txt"
            />
            <label className="c-label">Complaint/Concern</label>
            <select
              name="Complain"
              id="lang"
              label="4"
              onChange={(e) => setSelectedOption(e.target.value)}>
              {data && data.length <= 0 ? (
                <></>
              ) : (
                <>
                  <option value="" disabled="disabled" selected>
                    Select Complain / Concern
                  </option>
                  {data.map((item, index) => {
                    return (
                      <>
                        <option value={item.id}>{item.name}</option>
                      </>
                    );
                  })}
                </>
              )}
            </select>
            <label className="c-label">Subject</label>
            <input
              type="text"
              placeholder=""
              value={subject}
              onChange={(e) => setsubject(e.target.value)}
              className="c-txt"
            />
            <label className="c-label">Details</label>
            <textarea
              placeholder="Please leave comment here..."
              value={description}
              className="c-msg-txt"
              onChange={(e) => setdescription(e.target.value)}></textarea>{" "}
            <br />
            <button
              className="btn btn_bg"
              onClick={() => {
                complaintApi();
              }}>
              Submit
            </button>{" "}
          </div>
          {/* </div> */}
        </div>
      </section>
    </>
  );
};

export default ComplaintPage;
