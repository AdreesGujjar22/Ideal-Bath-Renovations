import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Sparkles, Shield, Flame, Droplets } from "lucide-react";

const features = [
  {
    icon: <Droplets size={24} color="#c29b38" />,
    title: "Vapor-Tight Enclosures",
    desc: "Complete ceiling and wall membrane sealing engineered to withstand 100% relative humidity and high-pressure steam.",
  },
  {
    icon: <Flame size={24} color="#c29b38" />,
    title: "Therapeutic Steam & Aromatherapy",
    desc: "Instant-start steam generators, essential oil aroma injectors, and digital touchscreen wellness controls.",
  },
  {
    icon: <Shield size={24} color="#c29b38" />,
    title: "Curbless Linear Drain Engineering",
    desc: "Recessed subflooring allowing seamless continuous floor tiles from the main room right into the shower stall.",
  },
  {
    icon: <Sparkles size={24} color="#c29b38" />,
    title: "Custom Heated Stone Benches",
    desc: "Ergonomic quartz or tile bench seating wired with radiant heating cables for soothing muscle relaxation.",
  },
];

const About: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: "#ffffff" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            sx={{
              color: "#c29b38",
              fontWeight: 700,
              fontSize: "13px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              mb: 1,
            }}
          >
            Spa Sanctuary Engineering
          </Typography>
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
            Custom Walk-In Showers & Luxury Steam Rooms
          </Typography>
          <Typography sx={{ fontSize: "15px", color: "#64748b", maxWidth: "750px", mx: "auto", lineHeight: 1.7 }}>
            Ideal Bath Renovations is the premier contractor in Langley Twp for custom wet rooms. We combine structural subfloor modification with Schluter-KERDI-DS steam vapor retarders to ensure lifetime performance.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {features.map((item, idx) => (
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
                <Box>{item.icon}</Box>
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
