import React from "react";
import Helmet from "react-helmet";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
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
      <Helmet>
        <title>Portfolio | Cory Siebler</title>
      </Helmet>
      <Container maxWidth={false} className={classes.content}>
        <AlbumHeroSection />
        <Divider />
        <AlbumGridSection />
      </Container>
    </PageLayout>
  );
};

export default PorfolioPage;
