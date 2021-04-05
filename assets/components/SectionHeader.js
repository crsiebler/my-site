import React from "react";
import Typography from "@material-ui/core/Typography";
import "styles/modules/_m-sectionheader.scss";

const SectionHeader = ({ variant, text }) => (
  <Typography variant={variant} className="m-sectionheader" gutterBottom>
    {text}
  </Typography>
);

export default SectionHeader;
