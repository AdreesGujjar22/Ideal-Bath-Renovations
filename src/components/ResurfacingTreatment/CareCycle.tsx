import React from "react";
import { Box, Typography } from "@mui/material";
import CareCard from "../UI/CareCard";
import { Stack } from "@mui/system";

const CareCycle: React.FC = () => {
  return (
    <Box
      sx={{
        width: "87%",
        m: "auto",
        py: { xs: 4, md: 8 },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "24px", md: "36px" },
          fontWeight: 800,
          textAlign: "center",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          color: "#0f172a",
          mb: 4,
        }}
      >
        Steam & Curbless Shower Installation Phases
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{ flexWrap: { md: "wrap", lg: "nowrap" } }}
        justifyContent={{ lg: "space-between", md: "center" }}
        spacing={2}
      >
        <CareCard
          img="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=600&q=80"
          title="Framing & Vapor Barrier:"
          duration="Days 1-3: Recessed Subfloor & Sloped Steam Ceiling"
        />
        <CareCard
          img="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80"
          title="Steam & Electrical Rough-in:"
          duration="Days 3-5: Red Seal Plumbing & 240V Electrical Circuits"
        />
        <CareCard
          img="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=600&q=80"
          title="Tile & Full Height Glass:"
          duration="Days 6-9: Precision Tile, Heated Bench & Sealed Enclosure"
        />
      </Stack>
    </Box>
  );
};

export default CareCycle;
