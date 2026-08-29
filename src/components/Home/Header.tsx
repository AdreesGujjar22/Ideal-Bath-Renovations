import React from "react";
import PrimaryBanner from "../UI/PrimaryBanner";

const Header: React.FC = () => {
  return (
    <PrimaryBanner
      img="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=2000&q=85"
      badge="Langley's Trusted Bathroom Remodeler"
      primaryContent="Luxury Bathroom Remodeling in Langley Twp, BC"
      secondaryContent="Full-Service Renovations • Tub-to-Shower Conversions • Curbless Walk-In Showers • Heated Floors & Custom Vanities"
      bannerHeight={620}
      fontsize={50}
      fontsizeSecondary={19}
      btn={true}
      btncontent="Get Free In-Home 3D Estimate"
      secondaryBtnContent="View Project Portfolio"
    />
  );
};

export default Header;
