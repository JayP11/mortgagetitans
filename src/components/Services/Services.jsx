// import React from "react";
// import "./Services.css";
// import { serviceData } from "../../data";

// const Services = () => {
//   return (
//     <>
//       <div className="services">
//         <h3>WHAT WE OFFER ____</h3>
//         <h2 style={{ margin: "0px", fontWeight: "800" }}>Our Core Service</h2>
//         <p
//           style={{
//             color: "gray",
//             letterSpacing: "1px",
//             lineHeight: "2",
//             fontWeight: "500",
//           }}>
//           Experinces started sit amet consectetur adipiscing elit sed do eiusmod
//           tempor <br />
//           incididunt ut labore et dolore adipiscing elit sed do eiusr adipiscing
//           elitatur liqua
//         </p>
//         <div className="services-main" style={{ paddingTop: "2rem" }}>
//           {serviceData.map((data) => {
//             return (
//               <div
//                 className="card-s"
//                 key={data.id}
//                 style={{
//                   boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
//                   // height: "30rem",
//                 }}>
//                 <img src={data.img} alt={data.id} className="services_image" />
//                 <div
//                   style={{
//                     padding: "1.5rem",
//                     paddingTop: "2rem",
//                     position: "relative",
//                     display: "flex",
//                     flexDirection: "column",
//                     gap: "10px",
//                   }}>
//                   <div className="webinar_card_icon_main">
//                     <img
//                       src={data?.icon ? data.icon : ""}
//                       alt="mains_icon"
//                       className="batches_card_icon_inner webinar_card_icon"
//                     />
//                   </div>
//                   <h4 style={{ fontSize: "20px", fontWeight: "700" }}>
//                     {data.service}
//                   </h4>
//                   <p
//                     style={{
//                       letterSpacing: "1px",
//                       color: "gray",
//                       fontSize: "16px",
//                     }}>
//                     {data.detail}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Services;

import React from "react";
import "./Services.css";
import { chooseData, serviceData } from "../../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:false,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="services">
        <h3>WHAT WE OFFER __</h3>
        <h2
          className="homehero_welcome"
          style={{ margin: "0px", textAlign: "center", color: "#033872" }}>
          Our Core Service
        </h2>
        <div style={{marginTop:"1rem"}} className="underline"></div>

        <p
          style={{
            color: "gray",
            letterSpacing: "1px",
            lineHeight: "2",
            fontWeight: "500",
          }}>
          We look forward to helping you achieve your financial goals!
        </p>
        <div className="services-main" style={{ paddingTop: "2rem" }}>
          <Slider {...settings}>
            {serviceData.map((data) => (
              <div
                className="card-s"
                key={data.id}
                style={{
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                }}>
                <img src={data.img} alt={data.id} className="services_image" />
                <div
                  style={{ padding: "1.5rem", position: "relative" }}
                  className="service_card_content">
                  <div className="webinar_card_icon_main">
                    <img
                      src={data?.icon ? data.icon : ""}
                      alt="mains_icon"
                      className="batches_card_icon_inner webinar_card_icon"
                    />
                  </div>
                  <h4 style={{ fontSize: "20px", fontWeight: "700" }}>
                    {data.service}
                  </h4>
                  <p
                    style={{
                      letterSpacing: "1px",
                      color: "gray",
                      fontSize: "16px",
                    }}>
                    {data.detail}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Services;
