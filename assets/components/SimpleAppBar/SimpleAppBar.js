import React from "react";
import PropTypes, { object } from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const SimpleAppBar = (props) => {
  const classes = useStyles();
  const { title, onMenuClick, menuItems } = props;

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
        {menuItems.map((item, index) => (
          <IconButton
            aria-label={item.ariaLabel}
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            href={item.href}
            target={item.target ? item.target : "_self"}
            key={index}
          >
            {item.icon}
          </IconButton>
        ))}
      </Toolbar>
    </AppBar>
  );
};

SimpleAppBar.propTypes = {
  title: PropTypes.string.isRequired,
  onMenuClick: PropTypes.func,
  menuItems: PropTypes.arrayOf(object),
};

export default SimpleAppBar;
