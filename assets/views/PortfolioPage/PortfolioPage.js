import React from "react";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import PageLayout from "components/PageLayout";
import AlbumHeroSection from "./Sections/AlbumHeroSection";
import AlbumGridSection from "./Sections/AlbumGridSection";
import "styles/modules/_m-portfolio.scss";

const PorfolioPage = () => (
  <PageLayout title="Portfolio">
    <Container maxWidth={false} className="m-portfolio">
      <AlbumHeroSection />
      <Divider />
      <AlbumGridSection />
    </Container>
  </PageLayout>
);

export default PorfolioPage;
