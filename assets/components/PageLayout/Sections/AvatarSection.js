import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import avatar from "images/avatar.jpg";
import { menuItems } from "constants/navigationConstants";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(1, 1, 1),
  },
  avatar: {
    width: theme.spacing(18),
    height: theme.spacing(18),
  },
  caption: {
    textAlign: "center",
    color: "#FFF",
  },
  drawerTitle: {
    color: "#FFF",
  },
  socials: {
    textAlign: "center",
  },
}));

const AvatarSection = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={3}
      direction="column"
      justify="flex-start"
      alignItems="center"
      className={classes.container}
    >
      <Grid item xs>
        <Typography variant="h6" align="center" className={classes.drawerTitle}>
          Cory Siebler
        </Typography>
      </Grid>
      <Grid item xs>
        <Avatar alt="Cory Siebler" src={avatar} className={classes.avatar} />
      </Grid>
      <Grid item>
        <Typography variant="body2" className={classes.caption}>
          Hi! My name is Cory Siebler. Welcome to my personal website!
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs
        direction="row"
        alignItems="center"
        justify="space-evenly"
        className={classes.socials}
      >
        {menuItems.map((item, index) => (
          <Grid item xs={4} key={index}>
            <IconButton
              aria-label={item.ariaLabel}
              aria-controls="menu-appbar"
              aria-haspopup="true"
              href={item.href}
              target={item.target ? item.target : "_self"}
            >
              {item.icon}
            </IconButton>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default AvatarSection;
