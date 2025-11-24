import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-14 mt-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Dream</h2>
          <p className="text-gray-400 leading-relaxed">
            Real‑time stock tracking, smart alerts, and powerful analytics to
            help you stay ahead in the market.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Watchlist
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Alerts
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3">
            <li>Email: support@Dream.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: Mumbai, India</li>
          </ul>

          <div className="flex gap-4 mt-4 text-xl">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Dream. All rights reserved.
      </div>
    </footer>
  );
}
