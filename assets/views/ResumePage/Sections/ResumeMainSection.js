import React from "react";
import Grid from "@material-ui/core/Grid";
import ResumeExperienceSection from "./ResumeExperienceSection";
import ResumeSkillSection from "./ResumeSkillSection";

const ResumeMainSection = () => (
  <Grid
    container
    className="m-resume__main"
    justify="space-between"
    alignItems="stretch"
    spacing={3}
  >
    <ResumeExperienceSection />
    <ResumeSkillSection />
  </Grid>
);

export default ResumeMainSection;
