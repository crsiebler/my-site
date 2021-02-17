import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PageLayout from "components/PageLayout/PageLayout";
import AlbumHeroSection from "./Sections/AlbumHeroSection";
import AlbumGridSection from "./Sections/AlbumGridSection";

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0, 1),
  },
}));

const PorfolioPage = () => {
  const classes = useStyles();

  return (
    <PageLayout title="Portfolio">
      <div className={classes.content}>
        <AlbumHeroSection />
        <AlbumGridSection />
      </div>
    </PageLayout>
  );
};

export default PorfolioPage;
