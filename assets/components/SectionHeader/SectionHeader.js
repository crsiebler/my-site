import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { drawerColor } from "constants/drawerConstants";

const useStyles = makeStyles(() => ({
  content: {
    borderLeft: `5px solid ${drawerColor}`,
    paddingLeft: "1rem",
  },
}));

const SectionHeader = (props) => {
  const classes = useStyles();
  const { variant, text } = props;

  return (
    <Typography variant={variant} className={classes.content}>
      {text}
    </Typography>
  );
};

export default SectionHeader;
