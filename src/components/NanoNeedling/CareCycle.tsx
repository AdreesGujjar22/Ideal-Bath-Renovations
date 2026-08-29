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
        Aging-in-Place Modification Process
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{ flexWrap: { md: "wrap", lg: "nowrap" } }}
        justifyContent={{ lg: "space-between", md: "center" }}
        spacing={2}
      >
        <CareCard
          img="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=600&q=80"
          title="Occupational & Mobility Assessment:"
          duration="Day 1: In-Home Ergonomics & Reach Radius Planning"
        />
        <CareCard
          img="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80"
          title="Curbless Floor & Blocking:"
          duration="Days 2-4: Subfloor Recess & 500lb Wall Backing"
        />
        <CareCard
          img="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=600&q=80"
          title="Safety Fixtures & Commissioning:"
          duration="Days 5-6: Grab Bars, Smart Bidet & Zero-Step Testing"
        />
      </Stack>
    </Box>
  );
};

export default CareCycle;
