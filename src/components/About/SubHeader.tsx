import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Sparkles, Eye, Shield } from "lucide-react";

const pillars = [
  {
    icon: <Eye size={24} color="#c29b38" />,
    title: "1. 3D Architectural Planning",
    desc: "We never guess. Photorealistic 3D space renders let you experience every fixture, tile pattern, and lighting scene before demo begins.",
  },
  {
    icon: <Shield size={24} color="#c29b38" />,
    title: "2. Absolute Waterproofing",
    desc: "Schluter-KERDI membranes, uncoupling layers, and 24-hour flood testing ensure complete moisture protection behind every wall.",
  },
  {
    icon: <Sparkles size={24} color="#c29b38" />,
    title: "3. Master Finishing",
    desc: "Mitered tile edges, laser-aligned grout lines, custom quartz fabrication, and silent whisper ventilation systems.",
  },
];

const SubHeader: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 9 }, backgroundColor: "#f8fafc", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}>
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
            Our Core Philosophy
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: { xs: "24px", sm: "32px", md: "36px" },
              fontWeight: 800,
              color: "#0f172a",
              mb: 2,
            }}
          >
            Built on Integrity, Engineered for Decades
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
              color: "#475569",
              maxWidth: "750px",
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            “A bathroom is the most technically complex room in any Canadian home. By honoring structural engineering, precision moisture management, and tailored ergonomic aesthetics, we deliver sanctuaries that enhance your daily routine and protect your home's equity.”
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {pillars.map((p, idx) => (
            <Grid size={{ xs: 12, md: 4 }} key={idx}>
              <Box
                sx={{
                  p: 3.5,
                  height: "100%",
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  border: "1px solid #e2e8f0",
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.5,
                }}
              >
                <Box>{p.icon}</Box>
                <Typography sx={{ fontSize: "17px", fontWeight: 700, color: "#0f172a" }}>
                  {p.title}
                </Typography>
                <Typography sx={{ fontSize: "14px", color: "#64748b", lineHeight: 1.6 }}>
                  {p.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SubHeader;
