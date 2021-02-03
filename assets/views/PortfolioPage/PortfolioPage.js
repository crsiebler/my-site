import React from "react";
import PageLayout from "components/PageLayout/PageLayout";
import AlbumHeroSection from "./Sections/AlbumHeroSection";
import AlbumGridSection from "./Sections/AlbumGridSection";

const PorfolioPage = () => {
  return (
    <PageLayout title="Portfolio">
      <>
        <AlbumHeroSection />
        <AlbumGridSection />
      </>
    </PageLayout>
  );
};

export default PorfolioPage;
