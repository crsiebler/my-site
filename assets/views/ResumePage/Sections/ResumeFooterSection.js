import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

const ResumeFooterSection = () => (
  <Grid
    container
    justify="center"
    alignItems="center"
    className="m-resume__footer"
    spacing={1}
  >
    <Grid item xs={12} md={4} className="m-resume__footer__grid">
      <Link
        component="a"
        href="https://github.com/crsiebler"
        target="_blank"
        variant="body2"
        className="m-resume__footer__link"
      >
        <GitHubIcon />
        <Typography variant="caption" className="m-resume__footer__link__text">
          github.com/crsiebler
        </Typography>
      </Link>
    </Grid>
    <Grid item xs={12} md={4} className="m-resume__footer__grid">
      <Link
        component="a"
        href="https://linkedin.com/in/cory-siebler"
        target="_blank"
        variant="body2"
        className="m-resume__footer__link"
      >
        <LinkedInIcon />
        <Typography variant="caption" className="m-resume__footer__link__text">
          linkedin.com/in/cory-siebler
        </Typography>
      </Link>
    </Grid>
    <Grid item xs={12} md={4} className="m-resume__footer__grid">
      <Link
        component="a"
        href="https://twitter.com/CorySiebler"
        target="_blank"
        variant="body2"
        className="m-resume__footer__link"
      >
        <TwitterIcon />
        <Typography variant="caption" className="m-resume__footer__link__text">
          @CorySiebler
        </Typography>
      </Link>
    </Grid>
  </Grid>
);

export default ResumeFooterSection;
