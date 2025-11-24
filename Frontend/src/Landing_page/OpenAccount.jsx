import React from "react";

export default function OpenAccount() {
  return (
    <div className="w-full bg-white-50 py-20 px-4">
      <div className="container mx-auto text-center max-w-2xl space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Open a Dream account
        </h1>

        <p className="text-gray-600 text-lg md:text-xl">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades
        </p>

        <button
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-8 py-3 rounded-xl shadow-md transition-all"
          style={{ borderRadius: 5 }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}
