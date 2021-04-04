import React from "react";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import SectionHeader from "components/SectionHeader/SectionHeader";
import LandingSkillsGridSection from "./LandingSkillsGridSection";

const LandingSkillsSection = () => (
  <Container className="m-landing__skills">
    <SectionHeader variant="h5" text="My Skills" />
    <Typography variant="body1" gutterBottom>
      I have {new Date().getFullYear() - 2012} years professional experience in
      the software industry. From database management to front-end libraries, I
      contribute to all aspects of the software architecture. I enjoy
      discovering new technology and I am always open to exploring the latest
      trends in engineering. See what I'm learning on{" "}
      <Link href="https://app.pluralsight.com/profile/csiebler" target="_blank">
        Pluralsight
      </Link>
      .
    </Typography>
    <LandingSkillsGridSection />
  </Container>
);

export default LandingSkillsSection;
