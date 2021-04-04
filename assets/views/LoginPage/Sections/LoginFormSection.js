import React from "react";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";
import { useOktaAuth } from "@okta/okta-react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { formAlert } from "constants/contactConstants";

const initError = {
  thrown: false,
  text: "",
};

const LoginFormSection = () => {
  const { oktaAuth } = useOktaAuth();
  const [sessionToken, setSessionToken] = React.useState();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(initError);
  const [alert, setAlert] = React.useState(formAlert);
  const [captcha, setCaptcha] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captcha) {
      setAlert({
        open: true,
        severity: "warning",
        message: "Must Complete Captcha",
      });
    } else {
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
          setAlert({
            open: true,
            severity: "error",
            message: "Error Signing On",
          });
        });
    }
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

  const handleVerify = () => {
    setCaptcha(true);
  };

  const handleClose = () => {
    setAlert({ ...alert, open: false });
  };

  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LfKPUgaAAAAAGzSJmKt8PKVnpFi4Q0J06wtHUYB">
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={alert.open}
        onClose={handleClose}
        autoHideDuration={5000}
      >
        <Alert onClose={handleClose} severity={alert.severity}>
          {alert.message}
        </Alert>
      </Snackbar>
      <Container component="form" onSubmit={handleSubmit} maxWidth="sm">
        <Typography
          id="back-to-top-anchor"
          variant="h2"
          component="h1"
          color="textPrimary"
          gutterBottom
        >
          Login
        </Typography>
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
              className="m-login__input"
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
              className="m-login__input"
            />
          </Grid>
          <Grid item xs={12}>
            <GoogleReCaptcha onVerify={handleVerify} />
          </Grid>
          <Grid item xs={12}>
            <Button
              id="submit"
              type="submit"
              variant="contained"
              color="primary"
              className="m-login__button"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Container>
    </GoogleReCaptchaProvider>
  );
};

export default LoginFormSection;
