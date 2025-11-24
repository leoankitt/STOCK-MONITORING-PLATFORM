import React from "react";

function Leftsection({
  image,
  title,
  description,
  Trydemo,
  Learnmore,
  google,
  appstore,
}) {
  return (
    <>
      <div className="container py-5">
        <div className="row align-items-start">
          <div className="col-12 col-md-6 mb-4 mb-md-0 mr-20">
            <img
              src={image}
              alt={title}
              className="img-fluid"
              style={{ borderRadius: "10px" }}
            />
          </div>

          <div className="col-12 col-md-4 ms-md-5 mt-5 ">
            <h1 className="fw-bold mb-3">{title}</h1>

            <p className="text-muted mb-4" style={{ lineHeight: "1.6" }}>
              {description}
            </p>

            <div>
              {" "}
              <a
                href="#"
                className="text-primary fw-semibold"
                style={{ textDecoration: "none" }}
              >
                {Trydemo}
              </a>
              <a
                href="#"
                className="text-primary fw-semibold pl-20"
                style={{ textDecoration: "none" }}
              >
                {Learnmore}
              </a>
            </div>
            <div className="d-flex align-items-center gap-3 mt-3">
              <a href="#" className="fw-semibold">
                <img
                  src={google}
                  alt=""
                  className="img-fluid"
                  style={{ height: "45px" }}
                />
              </a>

              <a href="#" className="fw-semibold ml-5">
                <img
                  src={appstore}
                  alt=""
                  className="img-fluid"
                  style={{ height: "45px" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Leftsection;
