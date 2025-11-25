import React from "react";

function Hero() {
  return (
    <div className="container mt-5 mb-5">
      {/* Header Section */}
      <div className="text-center mb-4">
        <img src="images/Support-portal.png" alt="Support Portal" />

        <h1 className="fw-bold" style={{ fontSize: "2.2rem" }}>
          Introducing Zerodha’s New Support Portal
        </h1>

        <p className="text-muted mt-2" style={{ fontSize: "0.95rem" }}>
          March 20, 2018
        </p>
      </div>

      {/* Content Section */}
      <div className="mx-auto" style={{ maxWidth: "800px" }}>
        <h4 className="fw-semibold mb-3">Traders,</h4>

        <p
          className="text-secondary"
          style={{ fontSize: "1rem", lineHeight: "1.7" }}
        >
          As you know, we have grown exponentially over the last 2 years, and
          have still strived to provide the best possible support experience.
          We’ve observed that when it comes to the large volumes of support
          queries we receive every day:
        </p>

        <ol
          className="text-secondary"
          style={{ fontSize: "1rem", lineHeight: "1.7" }}
        >
          <li className="mb-2">
            Most support queries are repetitive in nature and in fact have
            answers already available.
          </li>
          <li className="mb-2">
            These answers are spread out across Z-Connect, Varsity, or
            TradingQ&A, making it not very straightforward for clients to find.
          </li>
          <li className="mb-2">
            Often, queries pertaining to specific aspects of an account (for
            example, a particular order) do not come with the necessary
            information (eg: order ID) for our support team to process. This
            results in a lot of back and forth e-mails significantly delaying
            query resolution.
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Hero;
