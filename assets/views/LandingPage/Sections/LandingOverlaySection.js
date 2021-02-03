import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10),
    },
  },
  marked: {
    height: 4,
    width: 150,
    display: "block",
    margin: `${theme.spacing(1)}px auto 0`,
    backgroundColor: theme.palette.secondary.main,
  },
  more: {
    marginTop: theme.spacing(2),
  },
}));

const LandingOverlaySection = () => {
  const classes = useStyles();

  return (
    <>
      <Typography align="center" variant="h2" marked="center">
        Welcome to my Adventures
        <span className={classes.marked} />
      </Typography>
      <Typography align="center" variant="h5" className={classes.h5}>
        Check out my website. Feel free to message me. I'd love to hear from
        you!
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/resume"
      >
        My Resume
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Discover more
      </Typography>
    </>
  );
};

export default LandingOverlaySection;
