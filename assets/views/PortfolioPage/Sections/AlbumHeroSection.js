import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  content: {
    paddingBottom: theme.spacing(2),
  },
}));

const AlbumHeroSection = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.content}>
      <Typography
        id="back-to-top-anchor"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Notable Projects
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        A compilation of various projects containing contributions from me. From
        technical support to project management, I have a wide array of
        experience. Currently, my professional career focuses on web design and
        full-stack development using the latest technologies.
      </Typography>
      <Grid container spacing={2} justify="center">
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            component="a"
            href="/contact"
          >
            Contact Me
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="primary"
            component="a"
            href="/resume"
          >
            See Resume
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AlbumHeroSection;
