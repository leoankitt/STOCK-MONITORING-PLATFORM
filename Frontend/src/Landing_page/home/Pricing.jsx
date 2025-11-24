import React from "react";

function Pricing() {
  return (
    <div className="container py-5">
      <div className="row align-items-center gy-4">
        {/* Left Section */}
        <div className="col-lg-4 col-md-12">
          <h4 className="fw-bold mb-3">Unbeatable pricing</h4>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <a
            className="text-primary fw-semibold text-decoration-none d-inline-flex align-items-center gap-2"
            href="#"
          >
            See pricing
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        {/* Pricing Items */}
        <div className="col-lg-2 col-6 text-center ml-30">
          <img src="/images/pricingMF.svg" className="img-fluid mb-2" alt="" />
          <p className="small fw-semibold">Free account opening</p>
        </div>

        <div className="col-lg-2 col-6 text-center">
          <img src="/images/pricingMF.svg" className="img-fluid mb-2" alt="" />
          <p className="small fw-semibold">
            Free equity delivery and direct mutual funds
          </p>
        </div>

        <div className="col-lg-2 col-6 text-center">
          <img
            src="/images/intradayTrades.svg"
            className="img-fluid mb-2"
            alt=""
          />
          <p className="small fw-semibold">Intraday and F&O</p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
