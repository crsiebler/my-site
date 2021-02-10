import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PageLayout from "components/PageLayout/PageLayout";

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

const AboutPage = () => {
  const classes = useStyles();

  return (
    <PageLayout title="About">
      <div className={classes.content}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Learn More
        </Typography>
        <Typography variant="body1">Under Construction</Typography>
      </div>
    </PageLayout>
  );
};

export default AboutPage;
