import React from "react";
import Typography from "@material-ui/core/Typography";
import PageLayout from "components/PageLayout/PageLayout";

const AboutPage = () => {
  return (
    <PageLayout title="About">
      <div>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Learn More
        </Typography>
      </div>
    </PageLayout>
  );
};

export default AboutPage;
