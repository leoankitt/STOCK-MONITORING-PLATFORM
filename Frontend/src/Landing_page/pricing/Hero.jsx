import React from "react";
import OpenAccount from "../OpenAccount.jsx";

function Hero() {
  return (
    <>
      <div className="container py-5 mt-30">
        <div className="text-center mb-5">
          <h1 className="fw-bold">Charges</h1>
          <p className="text-muted fs-5">List of all charges and taxes</p>
        </div>

        <div className="row justify-content-center g-4 pt-20">
          {/* Card 1 */}
          <div className="col-md-8 d-flex gap-4 p-4 shadow rounded-4 align-items-start">
            <img
              src="images/pricingEquity.svg"
              alt="Equity"
              width={60}
              height={60}
            />
            <div>
              <h3 className="fw-semibold">Free equity delivery</h3>
              <p className="text-muted mt-2">
                All equity delivery investments (NSE, BSE) are absolutely free —
                ₹0 brokerage.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-8 d-flex gap-4 p-4 shadow rounded-4 align-items-start">
            <img
              src="images/intradayTrades.svg"
              alt="Intraday"
              width={60}
              height={60}
            />
            <div>
              <h3 className="fw-semibold">Intraday and F&O trades</h3>
              <p className="text-muted mt-2">
                Flat ₹20 or 0.03% (whichever is lower) per executed order on
                intraday trades across equity, currency, and commodity. Flat ₹20
                on all option trades.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-8 d-flex gap-4 p-4 shadow rounded-4 align-items-start">
            <img
              src="images/pricingEquity.svg"
              alt="MF"
              width={60}
              height={60}
            />
            <div>
              <h3 className="fw-semibold">Free direct MF</h3>
              <p className="text-muted mt-2">
                All direct mutual fund investments are absolutely free — ₹0
                commissions & DP charges.
              </p>
            </div>
          </div>
        </div>
      </div>
      <OpenAccount />
    </>
  );
}

export default Hero;
