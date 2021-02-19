import React from "react";
import Image from "material-ui-image";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import pdf from "docs/Resume_CorySiebler.pdf";
import portrait from "images/portrait.jpg";

const useStyles = makeStyles((theme) => ({
  content: {
    paddingBottom: theme.spacing(2),
  },
  profileImage: {
    borderRadius: "30px",
  },
}));

const LandingHeroSection = () => {
  const classes = useStyles();

  return (
    <Container className={classes.content}>
      <Grid container spacing={2} justify="space-around" alignItems="stretch">
        <Grid item xs={12} sm={8}>
          <Typography
            id="back-to-top-anchor"
            variant="h2"
            component="h1"
            color="textPrimary"
          >
            Cory Siebler
          </Typography>
          <Typography variant="h5" color="textSecondary" gutterBottom>
            Senior Software Engineer
          </Typography>
          <Typography
            variant="body1"
            color="textPrimary"
            gutterBottom
            paragraph
          >
            I am a full-stack developer specializing in web development with
            PHP, React, and Python. Want to see more of my work? Check out my{" "}
            <Link href="https://github.com/crsiebler" target="_blank">
              GitHub
            </Link>{" "}
            account.
          </Typography>
          <Grid container spacing={1} justify="flex-start">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                component="a"
                href={pdf}
                target="_blank"
                endIcon={<PictureAsPdfIcon />}
              >
                <Hidden xsDown>Download </Hidden>Resume
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                component="a"
                href="/portfolio"
              >
                <Hidden xsDown>See </Hidden>Portfolio
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Image src={portrait} className={classes.profileImage} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingHeroSection;
