import React from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { OktaAuth } from "@okta/okta-auth-js";
import { LoginCallback, SecureRoute, Security } from "@okta/okta-react";
import { oktaAuthConfig } from "constants/oktaConstants";
import AboutPage from "views/AboutPage";
import ContactPage from "views/ContactPage";
import LandingPage from "views/LandingPage";
import PortfolioPage from "views/PortfolioPage";
import ResumePage from "views/ResumePage";
import LoginPage from "views/LoginPage";

const oktaAuth = new OktaAuth(oktaAuthConfig);

const Routes = () => {
  const history = useHistory();

  const customAuthHandler = () => {
    history.push("/login");
  };

  return (
    <Security oktaAuth={oktaAuth} onAuthRequired={customAuthHandler}>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login/callback" component={LoginCallback} />
        <Route path="/login" component={LoginPage} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/resume" component={ResumePage} />
        <Route path="/contact" component={ContactPage} />
        <Redirect path="/about" to="/" />
        <SecureRoute path="/admin" component={LandingPage} />
        <Redirect to="/" />
      </Switch>
    </Security>
  );
};

export default Routes;
