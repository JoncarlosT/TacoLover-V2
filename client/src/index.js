import React from "react";
import ReactDOM from "react-dom";

//IMPORT APP
import App from "./App";

//IMPORT GLOBAL THEME
import { GlobalStyle } from "./GlobalProvider";

ReactDOM.render(
  <>
    <App />
    <GlobalStyle />
  </>,
  document.getElementById("root")
);
