import React from "react";

function Hero() {
  return (
    <div
      className="container text-center py-5 mt-30"
      style={{ maxWidth: "600px" }}
    >
      <div className="row">
        <h1 className="fw-bold mb-3" style={{ fontSize: "2.5rem" }}>
          Dream Products
        </h1>

        <p className="text-muted mb-2" style={{ fontSize: "1.1rem" }}>
          Sleek, modern, and intuitive trading platforms
        </p>

        <p
          className="text-primary fw-semibold pb-10"
          style={{ cursor: "pointer" }}
        >
          Check out our investment offerings →
        </p>
      </div>
    </div>
  );
}

export default Hero;
