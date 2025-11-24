import React from "react";

function Universe() {
  const items = [
    {
      img: "/images/zerodhaFundhouse.png",
      text: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
    },
    {
      img: "/images/sensibullLogo.svg",
      text: "Options trading platform that lets you create strategies, analyze positions, and examine data like OI, FII/DII and more.",
    },
    {
      img: "/images/tijori.svg",
      text: "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
    },
    {
      img: "/images/streakLogo.png",
      text: "Systematic trading platform that allows you to create and backtest strategies without coding.",
    },
    {
      img: "/images/smallcaseLogo.png",
      text: "Thematic investing platform that helps you invest in diversified baskets of stocks or ETFs.",
    },
    {
      img: "/images/dittoLogo.png",
      text: "Personalized advice on life and health insurance. No spam and no mis-selling.",
    },
  ];

  return (
    <div className="container my-5">
      <div className="row text-center mb-4">
        <h1 className="fw-bold">The Zerodha Universe</h1>
        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row g-4 justify-content-center">
        {items.map((item) => (
          <div className="col-md-5 col-10">
            <div className="p-4 shadow-sm rounded-4 border bg-white h-100">
              <img
                src={item.img}
                alt=""
                className="img-fluid mb-3"
                style={{ maxHeight: 60, objectFit: "contain" }}
              />
              <p className="text-muted">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <button className="bg-primary text-white px-5 py-3 fw-semibold rounded-4 shadow">
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
