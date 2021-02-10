import React from "react";
import PropTypes from "prop-types";
import Drawer from "@material-ui/core/Drawer";

const TemporaryDrawer = (props) => {
  const { drawerOpen, toggleDrawer, children } = props;

  return (
    <Drawer open={drawerOpen} onClose={toggleDrawer}>
      {children}
    </Drawer>
  );
};

TemporaryDrawer.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  children: PropTypes.element,
};

export default TemporaryDrawer;
