import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import PageLayout from "components/PageLayout/PageLayout";
import FormSection from "./Sections/FormSection";

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

const ContactPage = () => {
  const classes = useStyles();

  return (
    <PageLayout title="Contact">
      <div className={classes.content}>
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Message Me
          </Typography>
          <FormSection />
        </Container>
      </div>
    </PageLayout>
  );
};

export default ContactPage;
