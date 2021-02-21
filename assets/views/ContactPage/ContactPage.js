import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import PageLayout from "components/PageLayout/PageLayout";
import ContactFormSection from "./Sections/ContactFormSection";

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0, 1),
  },
}));

const ContactPage = () => {
  const classes = useStyles();

  return (
    <PageLayout title="Contact">
      <Container maxWidth={false} className={classes.content}>
        <Container maxWidth="md">
          <Typography
            id="back-to-top-anchor"
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Message Me
          </Typography>
          <ContactFormSection />
        </Container>
      </Container>
    </PageLayout>
  );
};

export default ContactPage;
