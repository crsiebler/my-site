import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const SimpleAppBar = ({ title, onMenuClick, menuOpen, children }) => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={onMenuClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">{title}</Typography>
      </Toolbar>
      {menuOpen && children}
    </AppBar>
  </div>
);

SimpleAppBar.propTypes = {
  title: PropTypes.string.isRequired,
  onMenuClick: PropTypes.func,
  menuOpen: PropTypes.bool,
};

SimpleAppBar.defaultProps = {
  onMenuClick: () => {},
  menuOpen: false,
};

export default SimpleAppBar;
