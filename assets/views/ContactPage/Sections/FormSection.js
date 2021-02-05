import React from "react";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import Snackbar from "@material-ui/core/Snackbar";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import AccountCircle from "@material-ui/icons/AccountCircle";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import SendIcon from "@material-ui/icons/Send";
import SubjectIcon from "@material-ui/icons/Subject";
import { postContact } from "api/contactApi";
import { formData, formErrors, formAlert } from "constants/contactConstants";
import validateContactForm from "utils/validateContactForm";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  textField: {
    width: "100%",
  },
  button: {
    width: "100%",
  },
}));

const FormSection = () => {
  const classes = useStyles();
  const [payload, setPayload] = React.useState(formData);
  const [errors, setErrors] = React.useState(formErrors);
  const [alert, setAlert] = React.useState(formAlert);
  const [captcha, setCaptcha] = React.useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPayload({ ...payload, [id]: value });
    setErrors({ ...errors, [id]: validateContactForm(id, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captcha) {
      setAlert({
        open: true,
        severity: "warning",
        message: "Must Complete Captcha",
      });
    } else if (Object.keys(errors).some((k) => errors[k].error)) {
      setAlert({
        open: true,
        severity: "warning",
        message: "Form contains errors",
      });
    } else {
      postContact(payload)
        .then(() => {
          setAlert({
            open: true,
            severity: "success",
            message: "Email sent successfully",
          });
          setPayload(formData);
          setErrors(formErrors);
        })
        .catch(() => {
          setAlert({
            open: true,
            severity: "error",
            message: "Error sending Email",
          });
        });
    }
  };

  const handleVerify = () => {
    setCaptcha(true);
  };

  const handleClose = () => {
    setAlert({ ...alert, open: false });
  };

  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LfKPUgaAAAAAGzSJmKt8PKVnpFi4Q0J06wtHUYB">
      <form autoComplete="on" method="post" onSubmit={handleSubmit}>
        <div className={classes.root}>
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
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                id="name"
                label="Name"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                className={classes.textField}
                value={payload.name}
                error={errors.name.error}
                helperText={errors.name.text}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="subject"
                label="Subject"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SubjectIcon />
                    </InputAdornment>
                  ),
                }}
                className={classes.textField}
                value={payload.subject}
                error={errors.subject.error}
                helperText={errors.subject.text}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                id="email"
                label="Email"
                variant="outlined"
                type="email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
                className={classes.textField}
                value={payload.email}
                error={errors.email.error}
                helperText={errors.email.text}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="phone"
                label="Phone"
                variant="outlined"
                type="tel"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon />
                    </InputAdornment>
                  ),
                }}
                className={classes.textField}
                value={payload.phone}
                error={errors.phone.error}
                helperText={errors.phone.text}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="message"
                label="Message"
                variant="outlined"
                className={classes.textField}
                multiline
                rows={10}
                value={payload.message}
                error={errors.message.error}
                helperText={errors.message.text}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <GoogleReCaptcha onVerify={handleVerify} />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.button}
                endIcon={<SendIcon />}
              >
                Send your message
              </Button>
            </Grid>
          </Grid>
        </div>
      </form>
    </GoogleReCaptchaProvider>
  );
};

export default FormSection;
