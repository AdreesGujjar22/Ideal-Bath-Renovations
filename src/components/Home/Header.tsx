import React from "react";
import PrimaryBanner from "../UI/PrimaryBanner";

const Header: React.FC = () => {
  return (
    <PrimaryBanner
      img="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80"
      badge="Family-run bathroom renovations in Langley Township"
      primaryContent="A bathroom you'll actually enjoy using again"
      secondaryContent="We're a small Langley crew that rebuilds tired bathrooms — full renovations, tub-to-shower conversions and walk-in showers — for homes in Langley Township, Surrey, Abbotsford and across the Fraser Valley. One team, a fixed price, and your bathroom back on the day we promised."
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
