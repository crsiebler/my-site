import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

const AlbumHeroSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          id="back-to-top-anchor"
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Notable Projects
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          A compilation of various projects containing contributions from me.
          From technical support to project management, I have a wide array of
          experience. Currently, my professional career focuses on web design
          and full-stack development using the latest technologies.
        </Typography>
        <div className={classes.heroButtons}>
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
        </div>
      </Container>
    </div>
  );
};

export default AlbumHeroSection;
