import React from "react";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import ResumeHeaderSection from "./ResumeHeaderSection";
import ResumeBioSection from "./ResumeBioSection";
import ResumeMainSection from "./ResumeMainSection";
import ResumeFooterSection from "./ResumeFooterSection";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1),
  },
  paper: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "80%",
    },
  },
  resume: {
    margin: "0.5rem 1.5rem",
    height: "calc(100% - 1rem)",
  },
}));

const ResumeSection = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.container}>
      <Paper elevation={3} className={classes.paper}>
        <div className={classes.resume}>
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
};

export default ResumeSection;
