import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Routes from "./Routes";
import "styles/main.scss";

ReactDOM.render(
  <>
    <CssBaseline />
    <Routes />
  </>,
  document.getElementById("root")
);
