import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import "styles/modules/_m-listitemgroup.scss";

const ListItemLink = (props) => {
  return <ListItem button component="a" {...props} />;
};

const ListItemGroup = ({ href, icon, primary, onClick }) => (
  <ListItemLink href={href} onClick={onClick}>
    <ListItemIcon>{icon}</ListItemIcon>
    <ListItemText primary={primary} className="m-listitemgroup__text" />
  </ListItemLink>
);

export default ListItemGroup;
