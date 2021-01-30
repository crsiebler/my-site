import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import "styles/main.scss";

import AboutPage from "views/AboutPage/AboutPage";
import ContactPage from "views/ContactPage/ContactPage";
import LandingPage from "views/LandingPage/LandingPage";
import PortfolioPage from "views/PortfolioPage/PortfolioPage";
import ResumePage from "views/ResumePage/ResumePage";

ReactDOM.render(
  <>
    <CssBaseline />
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/portfolio" component={PortfolioPage} />
        <Route exact path="/resume" component={ResumePage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
    </Router>
  </>,
  document.getElementById("root")
);
