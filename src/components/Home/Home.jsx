import React, { useEffect } from "react";
import Header from "../Header/Header";
import About from "../About/About";
import Header2 from "../Header2/Header2";
import Services from "../Services/Services";
import Help from "../Help/Help";
import Choose from "../Choose/Choose";
import Quote from "../Quote/Quote";
import Choose2 from "../Choose2/Choose2";
// import Team from "../Team/Team";
import Details from "../Details/Details";
// import Testimonials from "../Testimonials/Testimonials";
import Contact from "../ContactUs/ContactUs";
import Featured from "../Featured/Featured";
import { Helmet } from "react-helmet";
import HomeHero from "../homeHero/HomeHero";
import BankLogos from "../BankLogos/BankLogos"; 

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Mortgage Titans | Home</title>
      </Helmet>
      <div style={{ height: "90px" }}></div>
      <HomeHero />
       {/* <Header /> */}
      {/* <div id="about"> <About /> </div> */}
      <Header2 />
      <Services />
      <Help />
      <Choose />
      {/* <Quote /> */}
      <Choose2 />
      <BankLogos />

      {/* <Team /> */}
      <Details />
      {/* <Testimonials /> */}
      <div id="contact_home">{/* <Contact /> */}</div>
      <Featured />
    </>
  );
};

export default Home;
