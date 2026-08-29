import React from "react";
import { Stack, Typography, Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Star, ShieldCheck, Hammer, Palette, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: <ShieldCheck size={28} color="#c29b38" />,
    title: "100% Schluter® Waterproofed",
    desc: "Backed by 24-hour hydrostatic flood tests & up to 25-year manufacturer warranties.",
  },
  {
    icon: <Hammer size={28} color="#c29b38" />,
    title: "Red Seal Trades & Full Permits",
    desc: "All plumbing, electrical, and structural framing inspected to BC Building Code.",
  },
  {
    icon: <Palette size={28} color="#c29b38" />,
    title: "Photorealistic 3D CAD Design",
    desc: "Visualize your tiles, lighting, and layout with our interior team before demo begins.",
  },
  {
    icon: <Sparkles size={28} color="#c29b38" />,
    title: "Fixed-Price Guarantee",
    desc: "Transparent quotes with zero hidden change orders for Langley homeowners.",
  },
];

const Review: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 9 }, backgroundColor: "#ffffff" }}>
      <Container maxWidth="lg">
        <Stack spacing={3} alignItems="center" sx={{ textAlign: "center", mb: 6 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, color: "#f59e0b" }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} fill="#f59e0b" stroke="none" />
            ))}
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: { xs: "24px", sm: "32px", md: "38px" },
              fontWeight: 700,
              color: "#0f172a",
              maxWidth: "850px",
              lineHeight: 1.25,
            }}
          >
            Crafting Exceptional, Spa-Inspired Bathrooms Across Langley Township & The Fraser Valley
          </Typography>

          <Typography
            sx={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: { xs: "14.5px", md: "16px" },
              fontWeight: 400,
              color: "#64748b",
              maxWidth: "750px",
              lineHeight: 1.7,
            }}
          >
            From our headquarters at 20819 78B Avenue, Ideal Bath Renovations delivers uncompromising craftsmanship, premium materials, and stress-free project management. Whether you're planning a master ensuite overhaul, a zero-barrier walk-in shower, or a fast tub-to-shower conversion, we turn your vision into enduring reality.
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {highlights.map((item, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
              <Box
                sx={{
                  p: 3,
                  height: "100%",
                  backgroundColor: "#f8fafc",
                  borderRadius: "12px",
                  border: "1px solid #e2e8f0",
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.5,
                  transition: "transform 0.2s ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    borderColor: "#cbd5e1",
                  },
                }}
              >
                <Box>{item.icon}</Box>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#0f172a",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "13.5px",
                    color: "#64748b",
                    lineHeight: 1.6,
                  }}
                >
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

export default Review;
