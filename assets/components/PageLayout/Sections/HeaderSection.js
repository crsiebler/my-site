import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = (props) => {
  const { title, onMenuClick } = props;
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar id="back-to-top-anchor">
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
          onClick={onMenuClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <IconButton
          aria-label="landing page"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
          href="/"
        >
          <HomeIcon />
        </IconButton>
        <IconButton
          aria-label="contact me"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
          href="/contact"
        >
          <EmailIcon />
        </IconButton>
        <IconButton
          aria-label="GitHub"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
          href="https://github.com/crsiebler"
          target="_blank"
        >
          <GitHubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
