import React from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import SendIcon from "@material-ui/icons/Send";
import ClearIcon from "@material-ui/icons/Clear";
import SubjectIcon from "@material-ui/icons/Subject";
import validateContactForm from "utils/validateContactForm";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  textField: {
    width: "100%",
  },
  button: {
    minWidth: "100px",
  },
  formControl: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const formData = {
  name: "",
  subject: "",
  email: "",
  phone: "",
  message: "",
};

const formErrors = {
  name: { error: false, text: "" },
  subject: { error: false, text: "" },
  email: { error: false, text: "" },
  phone: { error: false, text: "" },
  message: { error: false, text: "" },
};

const FormSection = () => {
  const classes = useStyles();
  const [payload, setPayload] = React.useState(formData);
  const [errors, setErrors] = React.useState(formErrors);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPayload({ ...payload, [id]: value });
    setErrors({ ...errors, [id]: validateContactForm(id, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).some((k) => errors[k].error)) {
      console.log("form contains errors");
    } else {
      axios
        .post("/api/contact", payload)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleClear = (e) => {
    e.preventDefault();
    setPayload(formData);
    setErrors(formErrors);
  };

  return (
    <form autoComplete="on" method="post" onSubmit={handleSubmit}>
      <div className={classes.root}>
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
          <Grid container item xs={12} spacing={2}>
            <div className={classes.formControl}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.button}
                endIcon={<SendIcon />}
              >
                Send
              </Button>
              <Button
                variant="contained"
                type="reset"
                className={classes.button}
                endIcon={<ClearIcon />}
                onClick={handleClear}
              >
                Clear
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </form>
  );
};

export default FormSection;
