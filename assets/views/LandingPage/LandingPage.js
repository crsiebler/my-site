import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import PageLayout from "components/PageLayout/PageLayout";
import LandingHeroSection from "./Sections/LandingHeroSection";

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
      <div className={classes.content}>
        <LandingHeroSection backgroundClassName={classes.background} />
        <Divider />
      </div>
    </PageLayout>
  );
};

export default LandingPage;
