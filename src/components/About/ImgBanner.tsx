import React from "react";
import { Box } from "@mui/material";
import PrimaryBanner from "../../components/UI/PrimaryBanner";

const ImgBanner: React.FC = () => (
  <Box sx={{ my: 0 }}>
    <PrimaryBanner
      img="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=2000&q=80"
      badge="Complimentary Service"
      primaryContent="Book Your In-Home 3D Design Consultation in Langley"
      secondaryContent="Let our specialists measure your space, address your design preferences, and give you an itemized fixed-price proposal."
      bannerHeight={420}
      fontsize={38}
      fontweight={800}
      textTransform="none"
      alignItems="center"
      btn={true}
      btncontent="Request Free In-Home Estimate"
      secondaryBtnContent="Call (604) 539-8822"
    />
  </Box>
);

export default ImgBanner;
