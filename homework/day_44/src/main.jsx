import React from "react";
import ReactDOM from "react-dom/client";
import Provider from "./core/Provider.jsx";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <Auth0Provider
      domain={domain ? domain : "dev-2iuagkslzcjuka7d.us.auth0.com"}
      clientId={clientId ? clientId : "cFc4IwkE00cZ7tFB0mRGTAaSjBCHoSJX"}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </Provider>
);
