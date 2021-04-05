import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import "styles/modules/_m-drawer.scss";

const ResponsiveDrawer = ({ children }) => (
  <Hidden smDown implementation="css">
    <Drawer classes={{ paper: "m-drawer" }} variant="permanent" open>
      {children}
    </Drawer>
  </Hidden>
);

export default ResponsiveDrawer;
