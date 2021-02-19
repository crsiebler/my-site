import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  header: {
    display: "block",
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  content: {
    paddingTop: 0,
  },
}));

const SkillCard = (props) => {
  const classes = useStyles();
  const { title, body, icons } = props;

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Grid container spacing={1}>
            {icons.map((Icon, index) => (
              <Grid key={index} item>
                <Icon className={classes.avatar} />
              </Grid>
            ))}
          </Grid>
        }
        title={title}
        titleTypographyProps={{ variant: "h6" }}
        className={classes.header}
      />
      <CardContent className={classes.content}>{body}</CardContent>
    </Card>
  );
};

export default SkillCard;
