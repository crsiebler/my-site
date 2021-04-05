import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const AlbumCardSection = ({ title, description, href, imgSrc, imgTitle }) => (
  <Card className="m-portfolio__card">
    <CardMedia
      className="m-portfolio__card__media"
      image={imgSrc}
      title={imgTitle}
    />
    <CardContent className="m-portfolio__card__content">
      <Typography gutterBottom variant="h5" component="h2">
        {title}
      </Typography>
      <Typography>{description}</Typography>
    </CardContent>
    <CardActions>
      <Button
        size="small"
        color="primary"
        component="a"
        href={href}
        target="_blank"
      >
        More Information
      </Button>
    </CardActions>
  </Card>
);

export default AlbumCardSection;
