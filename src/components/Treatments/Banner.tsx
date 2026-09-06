import React from "react";
import PrimaryBanner from "../UI/PrimaryBanner";
import { Box } from "@mui/material";

const Banner: React.FC = () => {
  return (
    <Box sx={{ my: 0 }}>
      <PrimaryBanner
        img="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=2000&q=80"
        badge="Zero Obligation"
        primaryContent="Ready to Remodel Your Bathroom in Langley?"
        secondaryContent="Contact Ideal Bath Renovations today for a free on-site design consultation, laser space scan, and itemized 3D estimate."
        bannerHeight={380}
        fontsize={38}
        fontweight={800}
        textTransform="none"
        alignItems="center"
        btn={true}
        btncontent="Request Free 3D Estimate"
        secondaryBtnContent="Call (672) 273-0434"
      />
    </Box>
  );
};

export default Banner;
