import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Calculator from "./Pages/Calculator/Calculator";
import Concern from "./Pages/Concern/Concern";
import Contact from "./Pages/Contact/Contact";
import AboutUs from "./Pages/AboutUs/AboutUs";
import PrivacyPolicy from "./Pages/privacyPolicy/PrivacyPolicy";

function App() {
  return (
    <BrowserRouter basename="test">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/concern" element={<Concern />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
