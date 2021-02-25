import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(1),
  },
  grid: {
    textAlign: "center",
  },
  link: {
    display: "inline-flex",
    verticalAlign: "middle",
  },
  linkText: {
    paddingLeft: theme.spacing(1),
    margin: "auto",
  },
}));

const ResumeFooterSection = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.footer}
      spacing={1}
    >
      <Grid item xs={12} md={4} className={classes.grid}>
        <Link
          component="a"
          href="https://github.com/crsiebler"
          target="_blank"
          variant="body2"
          className={classes.link}
        >
          <GitHubIcon />
          <Typography variant="caption" className={classes.linkText}>
            github.com/crsiebler
          </Typography>
        </Link>
      </Grid>
      <Grid item xs={12} md={4} className={classes.grid}>
        <Link
          component="a"
          href="https://linkedin.com/in/cory-siebler"
          target="_blank"
          variant="body2"
          className={classes.link}
        >
          <LinkedInIcon />
          <Typography variant="caption" className={classes.linkText}>
            linkedin.com/in/cory-siebler
          </Typography>
        </Link>
      </Grid>
      <Grid item xs={12} md={4} className={classes.grid}>
        <Link
          component="a"
          href="https://twitter.com/CorySiebler"
          target="_blank"
          variant="body2"
          className={classes.link}
        >
          <TwitterIcon />
          <Typography variant="caption" className={classes.linkText}>
            @CorySiebler
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
};

export default ResumeFooterSection;
