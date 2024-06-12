import React from "react";
import "./Header2.css";

const Header2 = () => {
  return (
    <div className="header2">
      <div className="h-one">
        <h1>3+</h1>
        <p>YEARS OF INDUSTRY EXPERIENCE</p>
      </div>
      <div className="h-one">
        <h1>100%</h1>
        <p>DEDICATION TO CLIENT SUCCESS</p>
      </div>
      <div className="h-one">
        <p
          style={{ fontSize: "24px", letterSpacing: "1px", lineHeight: "1.2" }}>
          PERSONALIZED MORTGAGE SOLUTIONS
        </p>
      </div>
      <div className="h-one">
        <p
          style={{ fontSize: "24px", letterSpacing: "1px", lineHeight: "1.2" }}>
          BUILDING LASTING CLIENT RELATIONSHIPS
        </p>
      </div>
    </div>
  );
};

export default Header2;
// import React, { useEffect } from "react";
// import "./Header2.css";

// const Header2 = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <div className="header2">
//       <h1>20</h1>
//       <p>YEARS OF EXPERIENCE</p>

//       <h1>98</h1>
//       <p>VOLUNTEERS PARTICIPATED</p>

//       <h1>56</h1>
//       <p>VETERANS HOME COMPLETED</p>

//       <h1>90</h1>
//       <p>CUSTOMER WORLDWIDE</p>
//     </div>
//   );
// };

// export default Header2;
