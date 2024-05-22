import React, { useEffect } from "react";
import { AboutHero } from "../../components";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Mortgage Titans | About</title>
      </Helmet>
      <div id="About">
        <div style={{ height: "90px" }}></div>
        <AboutHero />
      </div>
    </>
  );
};

export default AboutPage;
