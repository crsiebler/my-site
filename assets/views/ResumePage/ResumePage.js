import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import PageLayout from "components/PageLayout/PageLayout";
import ResumeSection from "./Sections/ResumeSection";
import ResumeHeroSeciton from "./Sections/ResumeHeroSection";

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0, 1),
  },
}));

const ResumePage = () => {
  const classes = useStyles();

  return (
    <PageLayout title="Resume">
      <Container maxWidth={false} className={classes.content}>
        <ResumeHeroSeciton />
        <Divider />
        <ResumeSection />
      </Container>
    </PageLayout>
  );
};

export default ResumePage;
