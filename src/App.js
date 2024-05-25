import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./common/navbar/Navbar";
import Homepage from "./pages/homepage/Homepage";
import Footer from "./common/footer/Footer";
import AboutPage from "./pages/aboutPage/AboutPage";
import ContactUs from "./pages/contactus/ContactUs";
import ComplaintPage from "./pages/complaintPage/ComplaintPage";
import Services from "./pages/services/Services";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import MortgageCalc from "./pages/mortgageCalc/MortgageCalc";
 import Cookies from "js-cookie";
import { useEffect } from "react";

function App() {
   useEffect(() => {
     const clearCookiesForPath = (path) => {
       const allCookies = Cookies.get(); // Get all cookies
       for (let cookieName in allCookies) {
         Cookies.remove(cookieName, { path }); // Remove each cookie for the specific path
       }
     };

      clearCookiesForPath("https://mortgagetitans.com.au/");
   }, []); 
  
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/AboutPage" element={<AboutPage />}></Route>
          <Route path="/ContactUs" element={<ContactUs />}></Route>
          <Route path="/ComplaintPage" element={<ComplaintPage />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />}></Route>
          <Route path="/Calculators" element={<MortgageCalc />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
