import React from "react";

function Hero() {
  return (
    <>
      <div className="container h-screen flex flex-col justify-center items-center text-center mb-30 pt-40 mt-30">
        <div className="row">
          <img src="/images/homeHero.png" alt="" className="pt-5 mb-5 " />
          <h1 className="text-4xl font-bold mt-5">Invest in everything</h1>
          <p className="text-gray-600 mt-4">
            Online platform to invest in stocks, derivatives, mutual funds, and
            more
          </p>
          <div className="flex justify-center mt-5">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded shadow-md">
              Signup now
            </button>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}

export default Hero;
