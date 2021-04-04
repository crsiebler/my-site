import React from "react";
import { Redirect } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import Container from "@material-ui/core/Container";
import PageLayout from "components/PageLayout/PageLayout";
import LoginFormSection from "./Sections/LoginFormSection";
import "styles/modules/_m-login.scss";

const LoginPage = () => {
  const { authState } = useOktaAuth();

  if (authState.isPending) {
    return <div>Loading...</div>;
  }
  return authState.isAuthenticated ? (
    <Redirect to={{ pathname: "/" }} />
  ) : (
    <PageLayout title="Login">
      <Container maxWidth={false} className="m-login">
        <LoginFormSection />
      </Container>
    </PageLayout>
  );
};

export default LoginPage;
