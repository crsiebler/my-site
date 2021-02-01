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

const ResumePage = () => {
  const classes = useStyles();

  return (
    <PageLayout title="Resume">
      <div className={classes.content}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          My Experience
        </Typography>
      </div>
    </PageLayout>
  );
};

export default ResumePage;
