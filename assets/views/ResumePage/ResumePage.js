import React from "react";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import PageLayout from "components/PageLayout";
import ResumeSection from "./Sections/ResumeSection";
import ResumeHeroSeciton from "./Sections/ResumeHeroSection";
import "styles/modules/_m-resume.scss";

const ResumePage = () => (
  <PageLayout title="Resume">
    <Container maxWidth={false} className="m-resume">
      <ResumeHeroSeciton />
      <Divider />
      <ResumeSection />
    </Container>
  </PageLayout>
);

export default ResumePage;
