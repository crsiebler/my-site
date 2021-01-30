import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

const TemporaryDrawer = (props) => {
  const classes = useStyles();
  const { drawerOpen, toggleDrawer, children } = props;

  return (
    <Drawer open={drawerOpen} onClose={toggleDrawer}>
      <div className={classes.list}>{children}</div>
    </Drawer>
  );
};

TemporaryDrawer.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  children: PropTypes.element,
};

export default TemporaryDrawer;
