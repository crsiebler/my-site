import React from "react";
import PageLayout from "components/PageLayout/PageLayout";
import Album from "./Album/Album";

const PorfolioPage = () => {
  return (
    <PageLayout title="Portfolio">
      <div>
        <Album />
      </div>
    </PageLayout>
  );
};

export default PorfolioPage;
