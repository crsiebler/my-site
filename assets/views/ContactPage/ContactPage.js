import React from "react";
import Typography from "@material-ui/core/Typography";
import PageLayout from "components/PageLayout/PageLayout";
import FormSection from "./Sections/FormSection";

const ContactPage = () => {
  return (
    <PageLayout title="Contact">
      <div>
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
      </div>
    </PageLayout>
  );
};

export default ContactPage;
