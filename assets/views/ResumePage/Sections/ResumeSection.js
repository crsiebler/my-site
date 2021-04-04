import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import ResumeHeaderSection from "./ResumeHeaderSection";
import ResumeBioSection from "./ResumeBioSection";
import ResumeMainSection from "./ResumeMainSection";
import ResumeFooterSection from "./ResumeFooterSection";

const ResumeSection = () => (
  <Grid container justify="center" className="m-resume__container">
    <Paper elevation={3} className="m-resume__paper">
      <div className="m-resume__content">
        <ResumeHeaderSection />
        <Divider />
        <ResumeBioSection />
        <Divider />
        <ResumeMainSection />
        <Divider />
        <ResumeFooterSection />
      </div>
    </Paper>
  </Grid>
);

export default ResumeSection;
