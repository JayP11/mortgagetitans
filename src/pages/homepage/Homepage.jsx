import React, { useEffect } from "react";
import {
  HomeBio,
  HomeHero,
  ServicesHome,
  // Faq,
  // Testimonials,
 } from "../../components";
import { Helmet } from "react-helmet";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Mortgage Titans | Home</title>
      </Helmet>
      <div>
        <HomeHero />
 
        <ServicesHome />
        <HomeBio />
        {/* <Testimonials /> */}
        {/* <Faq /> */}
      </div>
    </>
  );
};

export default Homepage;
