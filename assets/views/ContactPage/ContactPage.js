import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import PageLayout from "components/PageLayout";
import ContactFormSection from "./Sections/ContactFormSection";
import "styles/modules/_m-contact.scss";

const ContactPage = () => (
  <PageLayout title="Contact">
    <Container maxWidth={false} className="m-contact">
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
  </PageLayout>
);

export default ContactPage;
