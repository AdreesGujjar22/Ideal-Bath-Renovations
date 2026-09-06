import React from "react";
import PrimaryBanner from "../UI/PrimaryBanner";

const Header: React.FC = () => {
  return (
    <PrimaryBanner
      img="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80"
      badge="Langley Twp's Trusted Bathroom Remodeler"
      primaryContent="Modern Bathroom Remodeler & Renovation Contractor in Langley, BC"
      secondaryContent="Ideal Bath Renovations creates modern and comfortable bathrooms designed around the way you live. Serving homeowners throughout Langley Township and the Fraser Valley, we handle everything from complete bathroom remodels and tub to shower conversions to curbless walk in showers and custom vanities. Our focus is simple with thoughtful design, quality craftsmanship, clear pricing, and beautiful results that last for years."
      bannerHeight={620}
      fontsize={46}
      fontsizeSecondary={17}
      btn={true}
      btncontent="Request Free Quote"
      secondaryBtnContent="View Recent Transformations"
    />
  );
};

export default Header;


