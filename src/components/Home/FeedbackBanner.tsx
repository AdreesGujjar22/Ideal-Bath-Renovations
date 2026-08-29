import React from "react";
import PrimaryBanner from "../UI/PrimaryBanner";
import { Box } from "@mui/material";

const FeedbackBanner: React.FC = () => {
  return (
    <Box sx={{ my: 0 }}>
      <PrimaryBanner
        img="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=2000&q=80"
        badge="Proven Track Record"
        primaryContent="Trusted by Over 250+ Homeowners Across Langley & The Fraser Valley"
        secondaryContent="Read authentic homeowner reviews and see how we deliver beautiful, leak-free bathrooms on time and on budget."
        bannerHeight={480}
        fontsize={40}
        fontweight={700}
        textTransform="none"
        fontsizeSecondary={17}
        btn={true}
        btncontent="Read Client Stories"
        secondaryBtnContent="Explore Transformations"
      />
    </Box>
  );
};

export default FeedbackBanner;
