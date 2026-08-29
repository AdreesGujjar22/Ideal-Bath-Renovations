import React from "react";
import PrimaryBanner from "../UI/PrimaryBanner";

const Header: React.FC = () => {
  return (
    <PrimaryBanner
      img="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=2000&q=85"
      badge="Full Service Catalog"
      primaryContent="Bathroom Remodeling Services & Packages"
      secondaryContent="Explore all 19 specialized services — from turnkey master ensuite overhauls to rapid tub-to-shower conversions and custom tile systems."
      bannerHeight={480}
      fontsize={42}
      fontsizeSecondary={17}
      btn={true}
      btncontent="Get Free 3D Estimate"
      secondaryBtnContent="Call (604) 539-8822"
    />
  );
};

export default Header;
