import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import PageLayout from "components/PageLayout/PageLayout";
import FormSection from "./Sections/FormSection";

const ContactPage = () => {
  return (
    <PageLayout title="Contact">
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
    </PageLayout>
  );
};

export default ContactPage;
