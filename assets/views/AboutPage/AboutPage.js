import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import PageLayout from "components/PageLayout";

const AboutPage = () => (
  <PageLayout title="About">
    <Container className="m-about">
      <Typography
        id="back-to-top-anchor"
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Learn More
      </Typography>
      <Typography variant="body1">Under Construction</Typography>
    </Container>
  </PageLayout>
);

export default AboutPage;
