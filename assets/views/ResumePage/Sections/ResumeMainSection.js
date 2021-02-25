import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import ResumeExperienceSection from "./ResumeExperienceSection";
import ResumeSkillSection from "./ResumeSkillSection";

const useStyles = makeStyles((theme) => ({
  main: {
    padding: theme.spacing(1, 0),
  },
}));

const ResumeMainSection = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.main}
      justify="space-between"
      alignItems="stretch"
      spacing={3}
    >
      <ResumeExperienceSection />
      <ResumeSkillSection />
    </Grid>
  );
};

export default ResumeMainSection;
