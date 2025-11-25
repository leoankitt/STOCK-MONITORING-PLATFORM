import React from "react";

function Brockrage() {
  return (
    <div className="container my-5">
      <hr className="pb-20" />
      <h1 className="fw-bold mb-4">Charges Explained</h1>

      {/* STT / CTT */}
      <section className="mb-5">
        <h4 className="fw-semibold mb-3">
          Securities / Commodities Transaction Tax
        </h4>

        <p className="text-secondary fs-6 mb-3">
          Tax by the government when transacting on the exchanges. Charged on
          both buy and sell sides for equity delivery, and only on the selling
          side for intraday or F&O trades.
        </p>

        <p className="text-secondary fs-6">
          When trading at Zerodha, STT/CTT can be significantly higher than the
          brokerage. It's important to keep track.
        </p>
      </section>

      {/* Transaction Charges */}
      <section>
        <h4 className="fw-semibold mb-3">Transaction / Turnover Charges</h4>

        <p className="text-secondary fs-6 mb-3">
          Charged by exchanges (NSE, BSE, MCX) based on the value of your
          transactions.
        </p>

        <p className="text-secondary fs-6 mb-2">
          BSE revised transaction charges in XC, XD, XT, Z, and ZP groups to
          ₹10,000 per crore from 01.01.2016. (XC and XD merged into X from
          01.12.2017)
        </p>

        <p className="text-secondary fs-6 mb-2">
          BSE revised charges in SS and ST groups to ₹1,00,000 per crore of
          gross turnover.
        </p>

        <p className="text-secondary fs-6">
          For group A, B, and other non-exclusive scrips (E, F, FC, G, GC, W,
          T), BSE revised charges to ₹375 per crore on a flat basis from
          01.12.2022.
        </p>
      </section>
    </div>
  );
}

export default Brockrage;
