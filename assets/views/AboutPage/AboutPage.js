import React from "react";
import Helmet from "react-helmet";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PageLayout from "components/PageLayout/PageLayout";

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0, 1),
  },
}));

const AboutPage = () => {
  const classes = useStyles();

  return (
    <PageLayout title="About">
      <Container className={classes.content}>
        <Typography
          id="back-to-top-anchor"
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Learn More
        </Typography>
        <Typography variant="body1">Under Construction</Typography>
      </Container>
    </PageLayout>
  );
};

export default AboutPage;
