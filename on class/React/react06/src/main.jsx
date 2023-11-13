import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root"), {
  identifierPrefix: ":apeiron:",
}).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
