import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import PictureAsPdf from "@material-ui/icons/PictureAsPdf";
import pdf from "docs/Resume_CorySiebler.pdf";

const ResumeHeroSeciton = () => (
  <Container maxWidth="md" className="m-resume__hero">
    <Typography
      id="back-to-top-anchor"
      component="h1"
      variant="h2"
      align="center"
      color="textPrimary"
      gutterBottom
    >
      My Experience
    </Typography>
    <Grid container spacing={2} justify="center">
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          type="a"
          href={pdf}
          target="_blank"
          endIcon={<PictureAsPdf />}
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
  </Container>
);

export default ResumeHeroSeciton;
