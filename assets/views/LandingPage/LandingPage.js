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
      <main>
        <LandingHeroSection backgroundClassName={classes.background}>
          <img
            style={{ display: "none" }}
            src={backgroundImage}
            alt="increase priority"
          />
          <LandingOverlaySection />
        </LandingHeroSection>
      </main>
    </PageLayout>
  );
};

export default LandingPage;
