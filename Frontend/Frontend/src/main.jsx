import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./Landing_page/home/Homepage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>
);
