import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./common/navbar/Navbar";
import Homepage from "./pages/homepage/Homepage";
import Footer from "./common/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter basename="mortgagetitans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
