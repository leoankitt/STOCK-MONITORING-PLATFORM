import React from "react";

function Team() {
  return (
    <>
      <div className="container py-5 mt-20">
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <img
              src="/images/nithinKamath.jpg"
              alt="CEO"
              className="img-fluid rounded-circle shadow"
              style={{
                width: "220px",
                height: "220px",
                objectFit: "cover",
              }}
            />
            <h3 className="mt-3 mb-1 fw-bold mr-38">Ankit Singh</h3>
            <p className="text-muted mr-38">Founder, CEO</p>
          </div>

          {/* Right side text */}
          <div className="col-md-8">
            <h1 className="fw-bold mb-3">People</h1>

            <p>
              Ankit bootstrapped and founded Dream in 2025 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Dream has changed the landscape of the Indian broking industry.
            </p>

            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>

            <p className="mb-1">Playing basketball is his zen.</p>

            <p className="mt-3 fw-semibold">
              Connect on
              <span className="ms-2 text-primary">Homepage</span> /
              <span className="ms-2 text-primary">TradingQnA</span> /
              <span className="ms-2 text-primary">Twitter</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
