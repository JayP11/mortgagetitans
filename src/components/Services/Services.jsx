// import React, { useEffect } from "react";
// import "./Services.css";
// import { serviceData } from "../../data";
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";

// const Services = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <>
//       <div className="services">
//         <h3>WHAT WE OFFER</h3>
//         <h2>Our Core Service</h2>
//         <p>
//           Experinces started sit amet consectetur adipiscing elit sed do eiusmod
//           tempor <br />
//           incididunt ut labore et dolore adipiscing elit sed do eiusr adipiscing
//           elitatur liqua
//         </p>
//         <div className="services-main">
//           {serviceData.map((data) => {
//             return (
//               <div className="card-s" key={data.id}>
//                 <img src={data.img} alt={data.id} />
//                 <h4>{data.service}</h4>
//                 <p>{data.detail}</p>
//                 <h5>
//                   <MdKeyboardDoubleArrowRight size={22} color="#003872" />
//                   {data.info1}
//                 </h5>
//                 <h5>
//                   <MdKeyboardDoubleArrowRight size={22} color="#003872" />
//                   {data.info2}
//                 </h5>
//                 <h5>
//                   <MdKeyboardDoubleArrowRight size={22} color="#003872" />
//                   {data.info3}
//                 </h5>
//                 <h5>
//                   <MdKeyboardDoubleArrowRight size={22} color="#003872" />
//                   {data.info4}
//                 </h5>
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
import { serviceData } from "../../data";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Services = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <>
      <div className="services">
        <h3>WHAT WE OFFER ____</h3>
        <h2 style={{ margin: "0px", fontWeight: "800" }}>Our Core Service</h2>
        <p
          style={{
            color: "gray",
            letterSpacing: "1px",
            lineHeight: "2",
            fontWeight: "500",
          }}>
          Experinces started sit amet consectetur adipiscing elit sed do eiusmod
          tempor <br />
          incididunt ut labore et dolore adipiscing elit sed do eiusr adipiscing
          elitatur liqua
        </p>
        <div className="services-main" style={{ paddingTop: "2rem" }}>
          {serviceData.map((data) => {
            return (
              <div
                className="card-s"
                key={data.id}
                style={{
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  // height: "30rem",
                }}>
                <img src={data.img} alt={data.id} className="services_image" />
                <div style={{ padding: "1.5rem",paddingTop:"2rem", position: "relative",display:"flex",flexDirection:"column",gap:"10px" }}>
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
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
