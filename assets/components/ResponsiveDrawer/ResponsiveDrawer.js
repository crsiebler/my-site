import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { drawerWidth, drawerColor } from "constants/drawerConstants";

const useStyles = makeStyles(() => ({
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: drawerColor,
  },
}));

const ResponsiveDrawer = (props) => {
  const classes = useStyles();
  const { children } = props;

  return (
    <Hidden smDown implementation="css">
      <Drawer
        classes={{
          paper: classes.drawerPaper,
        }}
        variant="permanent"
        open
      >
        {children}
      </Drawer>
    </Hidden>
  );
};

export default ResponsiveDrawer;
