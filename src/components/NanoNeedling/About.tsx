import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { ShieldCheck } from "lucide-react";

const accessibilityFeatures = [
  {
    title: "Barrier-Free Curbless Roll-In Showers",
    desc: "Seamless flush transitions into the shower area with non-slip textured mosaic tile flooring and linear high-flow drainage.",
  },
  {
    title: "Architectural Grab Bars & Reinforced Backing",
    desc: "Solid wood 2x6 blocking installed behind all shower walls and toilet zones to anchor luxury, modern grab bars rated up to 500 lbs.",
  },
  {
    title: "Comfort-Height Smart Bidets & Toilets",
    desc: "Ergonomic 17-19 inch seating heights with warm water wash, heated seat, nightlight, and hands-free automatic flush.",
  },
  {
    title: "Roll-Under Floating Vanities & Lever Faucets",
    desc: "Custom open-knee clearance counters with insulated pipe guards, touchless or single-lever ADA compliant faucets.",
  },
];

const About: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: "#ffffff" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
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
            <ShieldCheck size={14} /> Certified CAPS Aging-in-Place Specialists
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: { xs: "24px", sm: "32px", md: "38px" },
              fontWeight: 800,
              color: "#0f172a",
              mb: 2,
            }}
          >
            Senior Safety Meets Modern Luxury
          </Typography>
          <Typography sx={{ fontSize: "15px", color: "#64748b", maxWidth: "750px", mx: "auto", lineHeight: 1.7 }}>
            At Ideal Bath Renovations, we believe accessibility shouldn't look institutional or clinical. We craft gorgeous, spa-like bathroom spaces that preserve independence, prevent slip-and-fall incidents, and maintain your home's market value.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {accessibilityFeatures.map((item, idx) => (
            <Grid size={{ xs: 12, sm: 6 }} key={idx}>
              <Box
                sx={{
                  p: 3.5,
                  height: "100%",
                  backgroundColor: "#f8fafc",
                  borderRadius: "14px",
                  border: "1px solid #e2e8f0",
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.5,
                }}
              >
                <Typography sx={{ fontSize: "17px", fontWeight: 700, color: "#0f172a" }}>
                  {item.title}
                </Typography>
                <Typography sx={{ fontSize: "14px", color: "#64748b", lineHeight: 1.6 }}>
                  {item.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
