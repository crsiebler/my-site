import React from "react";
import Typography from "@material-ui/core/Typography";
import PageLayout from "components/PageLayout/PageLayout";

const ResumePage = () => {
  return (
    <PageLayout title="Resume">
      <div>
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
