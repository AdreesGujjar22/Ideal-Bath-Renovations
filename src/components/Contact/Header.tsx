import React from "react";
import PrimaryBanner from "../UI/PrimaryBanner";

const Header: React.FC = () => {
  return (
    <PrimaryBanner
      img="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=2000&q=85"
      badge="Free Estimates & 3D Consultations"
      primaryContent="Plan Your Langley Bathroom Renovation"
      secondaryContent="Call (672) 273-0434 or send us your project details below."
      bannerHeight={450}
      fontsize={42}
      fontsizeSecondary={17}
      btn={false}
    />
  );
};

export default Header;
