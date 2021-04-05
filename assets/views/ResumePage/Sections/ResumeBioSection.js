import React from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import avatar from "images/resume-avatar.jpg";

const ResumeBioSection = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className="m-resume__bio"
      spacing={matches ? 0 : 1}
    >
      <Grid item md={4} xs={12}>
        <Avatar alt="Cory Siebler" src={avatar} className="m-resume__avatar" />
      </Grid>
      <Grid item md={8} xs={12}>
        <Typography variant="body1">
          Software engineer with a wide array of talents and expertise including
          web development, database administration, mobile application
          development, information technology, and project management. Looking
          for a senior software engineering position where I am building new and
          innovative applications.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ResumeBioSection;
