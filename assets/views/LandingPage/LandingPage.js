import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import PageLayout from "components/PageLayout/PageLayout";
import LandingHeroSection from "./Sections/LandingHeroSection";
import LandingSkillsSection from "./Sections/LandingSkillsSection";

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0, 1),
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <PageLayout title="Home">
      <Container maxWidth="lg" className={classes.content}>
        <LandingHeroSection backgroundClassName={classes.background} />
        <Divider />
        <LandingSkillsSection />
      </Container>
    </PageLayout>
  );
};

export default LandingPage;
