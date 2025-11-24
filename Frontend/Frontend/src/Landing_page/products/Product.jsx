import React from "react";
import Hero from "./Hero";
import Leftsection from "./Leftsection";
import Rightsection from "./Rightsection";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Product() {
  return (
    <>
      <Navbar />
      <Hero />
      <Leftsection />
      <Rightsection />
      <Footer />
    </>
  );
}

export default Product;
