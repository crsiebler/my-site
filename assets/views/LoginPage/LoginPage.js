import React from "react";
import { Redirect } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import PageLayout from "components/PageLayout/PageLayout";
import LoginFormSection from "./Sections/LoginFormSection";

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0, 1),
  },
}));

const LoginPage = () => {
  const { authState } = useOktaAuth();
  const classes = useStyles();

  if (authState.isPending) {
    return <div>Loading...</div>;
  }
  return authState.isAuthenticated ? (
    <Redirect to={{ pathname: "/" }} />
  ) : (
    <PageLayout title="Login">
      <Container maxWidth={false} className={classes.content}>
        <LoginFormSection />
      </Container>
    </PageLayout>
  );
};

export default LoginPage;
