import React from "react";
import PropTypes, { object } from "prop-types";
import Hidden from "@material-ui/core/Hidden";
import SimpleAppBar from "components/SimpleAppBar";

const ResponsiveAppBar = ({
  title,
  onMenuClick,
  menuItems,
  menuOpen,
  children,
}) => (
  <Hidden mdUp>
    <SimpleAppBar
      title={title}
      onMenuClick={onMenuClick}
      menuItems={menuItems}
      menuOpen={menuOpen}
    >
      {children}
    </SimpleAppBar>
  </Hidden>
);

ResponsiveAppBar.propTypes = {
  title: PropTypes.string.isRequired,
  onMenuClick: PropTypes.func,
  menuItems: PropTypes.arrayOf(object),
};

ResponsiveAppBar.defaultProps = {
  onMenuClick: () => {},
  menuItems: [],
};

export default ResponsiveAppBar;
