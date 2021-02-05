import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import AboutPage from "views/AboutPage/AboutPage";
import ContactPage from "views/ContactPage/ContactPage";
import LandingPage from "views/LandingPage/LandingPage";
import PortfolioPage from "views/PortfolioPage/PortfolioPage";
import ResumePage from "views/ResumePage/ResumePage";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/portfolio" component={PortfolioPage} />
        <Route exact path="/resume" component={ResumePage} />
        <Route exact path="/contact" component={ContactPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
