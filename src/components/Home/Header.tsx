import React from "react";
import PrimaryBanner from "../UI/PrimaryBanner";

const Header: React.FC = () => {
  return (
    <PrimaryBanner
      img="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80"
      badge="Langley Township's Trusted Bathroom Remodeler"
      primaryContent="Bathroom Renovations in Langley, BC You Can Trust"
      secondaryContent="Ideal Bath Renovations handles full bathroom renovations, tub-to-shower conversions, and walk-in shower remodels in Langley Township, Surrey, Abbotsford, and the Fraser Valley."
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
