import React from "react";
import "/src/index.css";

function Stats() {
  return (
    <div className="container py-5 mt-25">
      <div className="row align-items-start gy-5">
        {/* ---------- LEFT CONTENT ---------- */}
        <div className="col-lg-5 col-md-12">
          <h1 className="fw-bold mb-4">Trust with confidence</h1>

          <div className="mb-4">
            <h4 className="fw-semibold">Customer-first always</h4>
            <p className="text-muted">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="fw-semibold">No spam or gimmicks</h4>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="fw-semibold">The Zerodha universe</h4>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="fw-semibold">Do better with money</h4>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>

        {/* ---------- RIGHT IMAGE + LINKS ---------- */}
        <div className="col-lg-6 col-md-12 ml-20">
          <img
            src="/images/ecosystem.png"
            alt="ecosystem"
            className="img-fluid rounded mb-4"
          />

          <div className="d-flex gap-4 flex-wrap ml-35">
            <a
              href="#"
              className="text-primary fw-semibold text-decoration-none hover:text-black transition-colors"
            >
              Explore our products <i className="fa-solid fa-arrow-right"></i>
            </a>

            <a
              href="#"
              className="text-primary fw-semibold text-decoration-none "
            >
              Try Kite demo <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* ---------- PRESS LOGOS ---------- */}
        <div className="col-12 d-flex justify-content-center mt-10 mb-3">
          <img
            src="/images/pressLogos.png"
            alt="press logos"
            className="img-fluid"
            style={{ maxWidth: "900px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Stats;
