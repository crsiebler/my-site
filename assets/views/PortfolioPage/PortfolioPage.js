import React from "react";
import PageLayout from "components/PageLayout/PageLayout";
import AlbumHeroSection from "./Sections/AlbumHeroSection";
import AlbumGridSection from "./Sections/AlbumGridSection";

const PorfolioPage = () => {
  return (
    <PageLayout title="Portfolio">
      <main>
        <AlbumHeroSection />
        <AlbumGridSection />
      </main>
    </PageLayout>
  );
};

export default PorfolioPage;
