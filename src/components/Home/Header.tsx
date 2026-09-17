import React from "react";
import PrimaryBanner from "../UI/PrimaryBanner";

const Header: React.FC = () => {
  return (
    <PrimaryBanner
      img="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80"
      badge="Langley's Trusted Bathroom Remodeler"
      primaryContent="Bathroom Remodeling & Renovation in Langley Twp, BC"
      secondaryContent="Professional bathroom remodeling, tub-to-shower conversions, and custom walk-in showers based in Langley Township, BC. Serving Langley, Surrey, Abbotsford, and the Fraser Valley with transparent pricing and licensed trades."
      bannerHeight={540}
      fontsize={46}
      fontsizeSecondary={17}
      btn={true}
      btncontent="Request Free In-Home Quote"
      trustBadges={["Licensed Red Seal Trades", "10-Year Warranty", "Fraser Valley Service"]}
    />
  );
};

export default Header;


