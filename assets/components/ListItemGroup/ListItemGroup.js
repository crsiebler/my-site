import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles(() => ({
  text: {
    color: "#FFF",
  },
}));

const ListItemLink = (props) => {
  return <ListItem button component="a" {...props} />;
};

const ListItemGroup = (props) => {
  const classes = useStyles();
  const { href, icon, primary, onClick } = props;

  return (
    <ListItemLink href={href} onClick={onClick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={primary} className={classes.text} />
    </ListItemLink>
  );
};

export default ListItemGroup;
