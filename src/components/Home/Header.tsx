import React from "react";
import PrimaryBanner from "../UI/PrimaryBanner";

const Header: React.FC = () => {
  return (
    <PrimaryBanner
      img="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80"
      badge="Langley's Trusted Bathroom Remodeler"
      primaryContent="Bathroom Remodeling & Renovation in Langley Twp, BC"
      secondaryContent="We remodel bathrooms, convert tubs to showers, and build walk-in showers in Langley Township, Surrey, Abbotsford, and the Fraser Valley."
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
