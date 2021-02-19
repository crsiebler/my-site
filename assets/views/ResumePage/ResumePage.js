import React from "react";
import Helmet from "react-helmet";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import PictureAsPdf from "@material-ui/icons/PictureAsPdf";
import PageLayout from "components/PageLayout/PageLayout";
import pdf from "docs/Resume_CorySiebler.pdf";

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
      <Helmet>
        <title>Resume | Cory Siebler</title>
      </Helmet>
      <Container maxWidth={false} className={classes.content}>
        <Typography
          id="back-to-top-anchor"
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          My Experience
        </Typography>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              component="a"
              href={pdf}
              target="_blank"
              endIcon={<PictureAsPdf />}
            >
              Download Resume
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
      </Container>
    </PageLayout>
  );
};

export default ResumePage;
