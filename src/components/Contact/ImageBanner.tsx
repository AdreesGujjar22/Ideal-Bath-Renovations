import React from "react";
import { Box } from "@mui/material";
import PrimaryBanner from "../UI/PrimaryBanner";

const ImageBanner: React.FC = () => (
  <Box sx={{ my: 0 }}>
    <PrimaryBanner
      img="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=2000&q=80"
      badge="Langley Township, BC"
      primaryContent="Visit Our Showroom & Material Selection Studio"
      secondaryContent="20819 78B Avenue, Langley Twp, BC V2Y, Canada • (604) 539-8822"
      bannerHeight={300}
      fontsize={34}
      fontweight={700}
      textTransform="none"
      alignItems="center"
      btn={false}
      gap={1}
    />
  </Box>
);

export default ImageBanner;
