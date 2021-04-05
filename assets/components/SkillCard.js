import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";

const SkillCard = ({ title, body, icons }) => (
  <Card className="m-skillcard">
    <CardHeader
      avatar={
        <Grid container spacing={1}>
          {icons.map((Icon, index) => (
            <Grid key={index} item>
              <Icon className="m-skillcard__avatar" />
            </Grid>
          ))}
        </Grid>
      }
      title={title}
      titleTypographyProps={{ variant: "h6" }}
      className="m-skillcard__header"
    />
    <CardContent className="m-skillcard__content">{body}</CardContent>
  </Card>
);

export default SkillCard;
