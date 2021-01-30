import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import WorkIcon from "@material-ui/icons/Work";
import InfoIcon from "@material-ui/icons/Info";
import EmailIcon from "@material-ui/icons/Email";

const ListItemLink = (props) => {
  return <ListItem button component="a" {...props} />;
};

const NavagationSection = () => {
  return (
    <List>
      <ListItemLink href="/">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemLink>
      <ListItemLink href="/resume">
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Resume" />
      </ListItemLink>
      <ListItemLink href="/portfolio">
        <ListItemIcon>
          <WorkIcon />
        </ListItemIcon>
        <ListItemText primary="Portfolio" />
      </ListItemLink>
      <ListItemLink href="/about">
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="About" />
      </ListItemLink>
      <ListItemLink href="/contact">
        <ListItemIcon>
          <EmailIcon />
        </ListItemIcon>
        <ListItemText primary="Contact" />
      </ListItemLink>
    </List>
  );
};

export default NavagationSection;
