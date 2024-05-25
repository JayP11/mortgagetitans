import React, { useState } from "react";
import "./Faq.css";
import images from "../../constants/images";
import { FaLaptopCode } from "react-icons/fa";
import {
  TbDeviceMobileCode,
  TbSettingsCode,
  TbAppsFilled,
} from "react-icons/tb";

const Faq = () => {
  const [faqData, setFaqData] = useState([
    {
      // id: 1,
      icon: <FaLaptopCode />,
      question: " What types of home loans do you offer?",
      answer:
        "To build accessible, responsive and secure web applications with latest technology. With bulletproof code and stunning interfaces, we provide both front-end and back-end development.",
    },
    {
      icon: <TbDeviceMobileCode />,
      question: "  How do I know how much I can borrow?",
      answer:
        "To build visually pleasing applications with attention to detail and bearing in mind every peculiarity of the operating system.We build custom android, ios and hybrid apps tailored to the clients needs.",
    },
    {
      icon: <TbSettingsCode />,
      question:
        "  What is the difference between a fixed-rate and variable-rate mortgage?",
      answer:
        "We have certain ready made softwares available with us which can be useful for other respective industries. Using digital technology, reinvent your business model and create new growth channels.",
    },
    {
      icon: <TbAppsFilled />,
      question: "   How long does it take to get approved for a home loan?",
      answer:
        "We sculpt your thoughts and turn it into reality. To speed up the digital transformation, we leverage our expertise with our cross functional experts and help you unlock innovation.",
    },
    {
      icon: <TbSettingsCode />,
      question: "  Do I need a deposit to buy a house?",
      answer:
        "We have certain ready made softwares available with us which can be useful for other respective industries. Using digital technology, reinvent your business model and create new growth channels.",
    },
    {
      icon: <TbAppsFilled />,
      question: " How much does it cost to use a mortgage broker?",
      answer:
        "We sculpt your thoughts and turn it into reality. To speed up the digital transformation, we leverage our expertise with our cross functional experts and help you unlock innovation.",
    },
    {
      icon: <TbSettingsCode />,
      question:
        "  What is the difference between pre-approval and conditional approval?",
      answer:
        "We have certain ready made softwares available with us which can be useful for other respective industries. Using digital technology, reinvent your business model and create new growth channels.",
    },
    {
      icon: <TbAppsFilled />,
      question: " Can I still get a home loan if I have bad credit?",
      answer:
        "We sculpt your thoughts and turn it into reality. To speed up the digital transformation, we leverage our expertise with our cross functional experts and help you unlock innovation.",
    },
    {
      icon: <TbSettingsCode />,
      question: " What documents do I need to apply for a home loan?",
      answer:
        "We have certain ready made softwares available with us which can be useful for other respective industries. Using digital technology, reinvent your business model and create new growth channels.",
    },
    {
      icon: <TbAppsFilled />,
      question: " Do you offer refinancing services?",
      answer:
        "We sculpt your thoughts and turn it into reality. To speed up the digital transformation, we leverage our expertise with our cross functional experts and help you unlock innovation.",
    },
  ]);

  const [expanded, setExpanded] = useState();

  const toggleAccordion = (index) => {
    setExpanded((prevExpanded) => (prevExpanded === index ? null : index));
  };

  return (
    <div className="Faq_main">
      <div>
        <h1 className="heading_components">
          Check out our FAQ's below for answers to commonly asked questions.
        </h1>
      </div>
      <div className="Faq_sections_main">
        {/* <div className="Faq_img_main">
          <img src={images.faqImg} alt="" className="Faq_img" />
        </div> */}
        <div className="faq_services_main">
          {faqData.map((item, index) => (
            <div key={item.id} className="faq_services_inner">
              <div
                onClick={() => {
                  toggleAccordion(index);
                  console.log("clicked");
                }}
                className="faq-question">
                <div
                  style={{
                    fontSize: "20px",
                    color: "var(--color_brand)",
                    display: "flex",
                  }}>
                  <TbAppsFilled />
                  {/* {item.icon} */}
                </div>

                <div>
                  <h3 className="question_h3">{item.question}</h3>
                </div>
              </div>
              <div
                className={`faq-answer ${
                  expanded === index
                    ? "visible"
                    : "hidden faq-answer_margin_not"
                }`}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
        <div>
          <b
            style={{
              letterSpacing: "1px",
              wordSpacing: "2px",
            }}>
            Have a question that's not listed here? Contact us today and we'll
            be happy to help!
          </b>
        </div>
      </div>
    </div>
  );
};

export default Faq;
