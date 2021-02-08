import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import PageLayout from "components/PageLayout/PageLayout";
import pdf from "docs/Resume_CorySiebler.pdf";

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroContent: {
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
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                component="a"
                href={pdf}
                target="_blank"
              >
                Download Resume (PDF)
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                component="a"
                href="/portfolio"
              >
                See Portfolio
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </PageLayout>
  );
};

export default ResumePage;
