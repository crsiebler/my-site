import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import portrait from "images/portrait.jpeg";
import { menuItems } from "constants/navagationConstants";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "5px",
    marginBottom: "5px",
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
        <Avatar alt="Cory Siebler" src={portrait} className={classes.avatar} />
      </Grid>
      <Grid item>
        <Typography variant="body2" className={classes.caption}>
          Hi! My name is Cory Siebler, a Senior Software Engineer. Welcome to my
          personal website!
        </Typography>
      </Grid>
      <Grid item xs>
        <Grid container spacing={1}>
          {menuItems.map((item, index) => (
            <Grid item xs key={index}>
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
    </Grid>
  );
};

export default AvatarSection;
