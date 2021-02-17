import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Hidden from "@material-ui/core/Hidden";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Cory Siebler
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

const StickyFooter = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Hidden smDown>
          <Typography variant="body1">
            "Only the mediocre are always at their best" - Jean Giraudoux
          </Typography>
        </Hidden>
        <Copyright />
      </Container>
    </footer>
  );
};

export default StickyFooter;
