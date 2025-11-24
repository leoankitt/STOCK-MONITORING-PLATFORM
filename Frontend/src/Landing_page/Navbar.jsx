import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="w-full h-20 bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between ml-35">
        {/* Logo */}
        <Link
          className="text-2xl font-bold text-black text-decoration-none"
          to="/"
        >
          <img className="h-13 w-40" src="images/Dream.png" alt="" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-black font-medium ml-15 mt-2">
          <li>
            <Link
              to="/Signup"
              className=" text-black transition-colors text-decoration-none"
            >
              Signup
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              className="text-black transition-colors text-decoration-none"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/Product"
              className="text-black transition-colors text-decoration-none"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/Pricing"
              className="text-black transition-colors text-decoration-none"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="/Support"
              className="text-black transition-colors text-decoration-none"
            >
              Support
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-3xl text-gray-700 focus:outline-none">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </nav>
  );
}
