import React from "react";
import { Box } from "@mui/material";
import PrimaryBanner from "../../components/UI/PrimaryBanner";

const ImgBanner: React.FC = () => (
  <Box sx={{ my: 0 }}>
    <PrimaryBanner
      img="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=2000&q=80"
      badge="Craftsmanship"
      primaryContent="Engineered Precision & Modern Craftsmanship"
      secondaryContent="Dedicated to lasting quality in every bathroom remodel across the Fraser Valley."
      bannerHeight={380}
      fontsize={36}
      fontweight={800}
      textTransform="none"
      alignItems="center"
      btn={false}
    />
  </Box>
);

export default ImgBanner;
