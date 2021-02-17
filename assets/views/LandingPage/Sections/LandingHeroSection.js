import React from "react";
import Image from "material-ui-image";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import pdf from "docs/Resume_CorySiebler.pdf";
import portrait from "images/portrait.jpg";

const useStyles = makeStyles((theme) => ({
  content: {
    paddingBottom: theme.spacing(1),
  },
  profileImage: {
    borderRadius: "30px",
  },
}));

const LandingHeroSection = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.content}>
      <Grid
        container
        spacing={2}
        justify="center"
        justify="center"
        alignItems="flex-start"
      >
        <Grid item xs={12} sm={8}>
          <Typography
            id="back-to-top-anchor"
            variant="h2"
            align="center"
            color="textPrimary"
          >
            Cory Siebler
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            gutterBottom
          >
            Senior Software Engineer
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="textPrimary"
            gutterBottom
            paragraph
          >
            I am a full-stack developer specializing in web development with
            PHP, React, and Python. Want to know more about me? Browse{" "}
            <Link href="/portfolio">my portfolio</Link> and{" "}
            <Link href="/resume">my resume</Link>.
          </Typography>
          <Grid container spacing={1} justify="center">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                component="a"
                href={pdf}
                target="_blank"
                endIcon={<PictureAsPdfIcon />}
              >
                Download Resume
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                component="a"
                href="/portfolio"
              >
                See Portfolio
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
