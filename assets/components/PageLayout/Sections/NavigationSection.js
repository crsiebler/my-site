import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import WorkIcon from "@material-ui/icons/Work";
import InfoIcon from "@material-ui/icons/Info";
import SendIcon from "@material-ui/icons/Send";
import { iconColorPrimary } from "constants/navigationConstants";

const useStyles = makeStyles(() => ({
  text: {
    color: "#FFF",
  },
}));

const ListItemLink = (props) => {
  return <ListItem button component="a" {...props} />;
};

const NavigationSection = () => {
  const classes = useStyles();

  return (
    <nav>
      <Divider />
      <List>
        <ListItemLink href="/">
          <ListItemIcon>
            <HomeIcon style={{ color: iconColorPrimary }} />
          </ListItemIcon>
          <ListItemText primary="Home" className={classes.text} />
        </ListItemLink>
        <ListItemLink href="/resume">
          <ListItemIcon>
            <InfoIcon style={{ color: iconColorPrimary }} />
          </ListItemIcon>
          <ListItemText primary="Resume" className={classes.text} />
        </ListItemLink>
        <ListItemLink href="/portfolio">
          <ListItemIcon>
            <WorkIcon style={{ color: iconColorPrimary }} />
          </ListItemIcon>
          <ListItemText primary="Portfolio" className={classes.text} />
        </ListItemLink>
        <ListItemLink href="/about" disabled>
          <ListItemIcon>
            <PersonIcon style={{ color: iconColorPrimary }} />
          </ListItemIcon>
          <ListItemText primary="About" className={classes.text} />
        </ListItemLink>
        <ListItemLink href="/contact">
          <ListItemIcon>
            <SendIcon style={{ color: iconColorPrimary }} />
          </ListItemIcon>
          <ListItemText primary="Contact" className={classes.text} />
        </ListItemLink>
      </List>
    </nav>
  );
};

export default NavigationSection;
