import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";

import Pricing from "./Landing_page/pricing/Pricingpage.jsx";
import Signup from "./Landing_page/signup/Signup.jsx";
import Homepage from "./Landing_page/home/Homepage.jsx";
import Support from "./Landing_page/support/Sopport.jsx";
import Product from "./Landing_page/products/Product.jsx";
import About from "./Landing_page/about/About.jsx";
import Navbar from "./Landing_page/Navbar.jsx";
import Footer from "./Landing_page/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/Signup" element={<Signup />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Product" element={<Product />}></Route>
      <Route path="/Pricing" element={<Pricing />}></Route>
      <Route path="/Support" element={<Support />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);
