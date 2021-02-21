import React from "react";
import { useOktaAuth } from "@okta/okta-react";
import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "100%",
  },
  button: {
    width: "100%",
  },
}));

const initError = {
  thrown: false,
  text: "",
};

const LoginFormSection = () => {
  const classes = useStyles();
  const { oktaAuth } = useOktaAuth();
  const [sessionToken, setSessionToken] = React.useState();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(initError);

  const handleSubmit = (e) => {
    e.preventDefault();
    oktaAuth
      .signInWithCredentials({ username, password })
      .then((res) => {
        const sessionToken = res.sessionToken;
        setSessionToken(sessionToken);
        // sessionToken is a one-use token, so make sure this is only called once
        oktaAuth.signInWithRedirect({ sessionToken });
      })
      .catch((err) => {
        setError({ thrown: true, text: err.errorSummary });
      });
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setError(initError);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError(initError);
  };

  if (sessionToken) {
    // Hide form while sessionToken is converted into id/access tokens
    return null;
  }

  return (
    <Container maxWidth="sm">
      <Typography
        id="back-to-top-anchor"
        variant="h2"
        component="h1"
        color="textPrimary"
        gutterBottom
      >
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              id="username"
              type="text"
              label="Username"
              value={username}
              error={error.thrown}
              onChange={handleUsernameChange}
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              type="password"
              value={password}
              label="Password"
              variant="outlined"
              error={error.thrown}
              helperText={error.text}
              onChange={handlePasswordChange}
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              id="submit"
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default LoginFormSection;
