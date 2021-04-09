import React from "react";
import MuiBackdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

const Backdrop = () => {
  return (
    <MuiBackdrop className="m-backdrop" open={true}>
      <CircularProgress color="inherit" />
    </MuiBackdrop>
  );
};

export default Backdrop;
