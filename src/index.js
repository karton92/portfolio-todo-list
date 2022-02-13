import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import AppProvider from "./context/AppContext";

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById("root")
);
