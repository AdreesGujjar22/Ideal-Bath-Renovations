import React from "react";
import PrimaryBanner from "../UI/PrimaryBanner";
import { homeSeo } from "../../data/SeoContent";

const Header: React.FC = () => {
  return (
    <PrimaryBanner
      img="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80"
      badge={homeSeo.badge}
      primaryContent={homeSeo.h1}
      secondaryContent={homeSeo.intro}
      bannerHeight={540}
      fontsize={46}
      fontsizeSecondary={17}
      btn={true}
      btncontent="Request Free In-Home Quote"
      hideTrustBadges={true}
    />
  );
};

export default Header;
