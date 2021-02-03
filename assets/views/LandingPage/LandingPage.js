import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PageLayout from "components/PageLayout/PageLayout";
import LandingHeroSection from "./Sections/LandingHeroSection";
import LandingOverlaySection from "./Sections/LandingOverlaySection";

const backgroundImage = "build/images/splash-arizona-sunset.jpg";

const useStyles = makeStyles(() => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center",
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <PageLayout title="Home">
      <LandingHeroSection backgroundClassName={classes.background}>
        <img
          style={{ display: "none" }}
          src={backgroundImage}
          alt="desert sunset"
        />
        <LandingOverlaySection />
      </LandingHeroSection>
    </PageLayout>
  );
};

export default LandingPage;
