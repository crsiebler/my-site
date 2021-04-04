import React from "react";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import PageLayout from "components/PageLayout/PageLayout";
import LandingHeroSection from "./Sections/LandingHeroSection";
import LandingSkillsSection from "./Sections/LandingSkillsSection";
import "styles/modules/_m-landing.scss";

const LandingPage = () => (
  <PageLayout title="Home">
    <Container maxWidth={false} className="m-landing">
      <LandingHeroSection />
      <Divider />
      <LandingSkillsSection />
    </Container>
  </PageLayout>
);

export default LandingPage;
