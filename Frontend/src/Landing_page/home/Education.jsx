import React from "react";

export default function Education() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="flex justify-center mr-35">
          <img
            src="/images/education.svg"
            alt="Education Illustration"
            className="w-full max-w-md drop-shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            Free and Open Market Education
          </h1>

          <p className="text-gray-600 text-lg">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a
            href=""
            className="inline-flex items-center gap-2 text-blue-600 text-decoration-none hover:text-yellow-800 font-medium transition-all"
          >
            Varsity
            <i className="fa-solid fa-arrow-right"></i>
          </a>

          <p className="text-gray-600 text-lg">
            TradingQ&A, the most active trading and investment community in
            India for all your market-related queries.
          </p>

          <a
            href=""
            className=" inline-flex items-center gap-2 text-blue-600 hover:text-black text-decoration-none font-medium transition-all"
          >
            TradingQ&A
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
