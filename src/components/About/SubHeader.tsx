import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Sparkles, Eye, Shield } from "lucide-react";

const pillars = [
  {
    icon: <Eye size={24} color="#c29b38" />,
    title: "3D Architectural Planning",
    desc: "3D models help you review the layout before work begins.",
  },
  {
    icon: <Shield size={24} color="#c29b38" />,
    title: "Complete Waterproofing",
    desc: "Schluter membranes and flood testing protect tiled shower walls.",
  },
  {
    icon: <Sparkles size={24} color="#c29b38" />,
    title: "Master Finishing",
    desc: "Careful tile installation, quartz fabrication, and licensed plumbing.",
  },
];

const SubHeader: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: "#f8fafc", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 5 }}>
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
            Our Standards
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
            Our Approach to Every Project
          </Typography>
          <Typography
            sx={{
              fontSize: "15.5px",
              color: "#475569",
              maxWidth: "750px",
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Every project combines licensed trade work with careful waterproofing and practical planning.
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
