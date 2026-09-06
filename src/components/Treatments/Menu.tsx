import React from "react";
import { Box, Typography, Container } from "@mui/material";
import MenuDetail from "./MenuDetail";
import {
  MenuRemodelingData,
  MenuResurfacingData,
  MenuPlumbingWellnessData,
} from "../../data/MenuData";
import { ShieldCheck } from "lucide-react";

const Menu: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 9 }, backgroundColor: "#ffffff" }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              backgroundColor: "rgba(194,155,56,0.12)",
              color: "#b45309",
              px: 2,
              py: 0.5,
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              mb: 1.5,
            }}
          >
            <ShieldCheck size={14} /> Certified Red Seal & Schluter® Installers
          </Box>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: { xs: "28px", sm: "36px", md: "42px" },
              fontWeight: 800,
              color: "#0f172a",
              mb: 2,
            }}
          >
            Comprehensive Remodeling & Renovation Services
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
              color: "#64748b",
              maxWidth: "750px",
              mx: "auto",
            }}
          >
            Transparent pricing, comprehensive materials & labor packages, and guaranteed timelines across Langley Township and the Fraser Valley.
          </Typography>
        </Box>

        <MenuDetail
          content="Full Renovations, Conversions & Space Planning"
          categoryBadge="Core Renovation Services"
          menuData={MenuRemodelingData}
        />

        <MenuDetail
          content="Tile, Heated Flooring & Custom Vanities"
          categoryBadge="Surfaces & Custom Cabinetry"
          menuData={MenuResurfacingData}
        />

        <MenuDetail
          content="Steam Suites, Smart Fixtures & Aging-in-Place"
          categoryBadge="Specialty Plumbing & Wellness"
          menuData={MenuPlumbingWellnessData}
        />
      </Container>
    </Box>
  );
};

export default Menu;
