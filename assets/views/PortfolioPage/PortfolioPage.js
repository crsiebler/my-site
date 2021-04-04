import React from "react";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import PageLayout from "components/PageLayout/PageLayout";
import AlbumHeroSection from "./Sections/AlbumHeroSection";
import AlbumGridSection from "./Sections/AlbumGridSection";

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
