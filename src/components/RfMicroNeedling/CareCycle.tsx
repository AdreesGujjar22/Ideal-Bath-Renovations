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
        Tub-to-Shower Project Timeline & Expectations
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{ flexWrap: { md: "wrap", lg: "nowrap" } }}
        justifyContent={{ lg: "space-between", md: "center" }}
        spacing={2}
      >
        <CareCard
          img="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80"
          title="Demolition & Waterproofing:"
          duration="Days 1-2: Clean Tear-Out & Schluter® Membrane"
        />
        <CareCard
          img="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=600&q=80"
          title="Tile Setting & Grouting:"
          duration="Days 2-3: Laser Precision Tile & Epoxy Grout"
        />
        <CareCard
          img="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=600&q=80"
          title="Glass & Fixtures Walkthrough:"
          duration="Day 4-5: 10mm Frameless Glass & Plumbing Inspection"
        />
      </Stack>
    </Box>
  );
};

export default CareCycle;
