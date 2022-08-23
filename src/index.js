import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { GithubProvider } from "./components/search-github-users/context/context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-zajni0a7.us.auth0.com"
      clientId="Ukok2H03GJkrV0przr1fm483ZNHIENb3"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>
);
