import React from "react";

function Rightsection({ image, title, description, Learnmore }) {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* LEFT TEXT SECTION */}
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <h1 className="fw-bold mb-3">{title}</h1>

          <p className="text-muted mb-4" style={{ lineHeight: "1.6" }}>
            {description}
          </p>

          <a
            href="#"
            className="text-primary fw-semibold"
            style={{ textDecoration: "none" }}
          >
            {Learnmore}
          </a>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="col-12 col-md-7 offset-md-1 text-center">
          <img src={image} alt={title} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default Rightsection;
