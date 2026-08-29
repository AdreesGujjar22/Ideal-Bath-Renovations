import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { CheckCircle2, XCircle } from "lucide-react";

const idealAdvantages = [
  "Custom hand-laid porcelain or natural stone tile tailored to your aesthetic",
  "100% bonded Schluter® waterproof membrane with flood test verification",
  "Heavy 10mm architectural tempered glass with EnduroShield stain protection",
  "Red Seal licensed plumbing relocations with full BC Building Code compliance",
  "5-Year transferable workmanship warranty & dedicated Langley project manager",
];

const acrylicIssues = [
  "Flimsy, hollow acrylic or fiberglass modular inserts that creak and fade",
  "Caulking failure along seams leading to hidden mold and subfloor rot",
  "Thin 4mm-6mm framed sliding glass doors that easily derail and catch grime",
  "Generic, one-size-fits-all dimensions that waste space in your bathroom",
  "Limited cosmetic lifespan with no real property value enhancement",
];

const Features: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: "#f8fafc" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: { xs: "24px", sm: "32px", md: "36px" },
              fontWeight: 800,
              color: "#0f172a",
              mb: 1.5,
            }}
          >
            Custom Tile Conversions vs. Cheap Acrylic Liners
          </Typography>
          <Typography sx={{ fontSize: "15px", color: "#64748b", maxWidth: "700px", mx: "auto" }}>
            Why discerning Langley homeowners choose Ideal Bath Renovations for lasting custom tile craftsmanship over temporary plastic shells.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Ideal Bath Renovations */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                p: 4,
                height: "100%",
                backgroundColor: "#ffffff",
                borderRadius: "14px",
                border: "2px solid #c29b38",
                boxShadow: "0 8px 24px rgba(194,155,56,0.08)",
              }}
            >
              <Typography sx={{ fontWeight: 800, fontSize: "18px", color: "#0f172a", mb: 2.5 }}>
                ✨ Ideal Bath Custom Tile Conversions
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {idealAdvantages.map((adv, idx) => (
                  <Box key={idx} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                    <CheckCircle2 size={18} color="#15803d" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <Typography sx={{ fontSize: "14px", color: "#1e293b", lineHeight: 1.5 }}>
                      {adv}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Cheap Acrylic Inserts */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                p: 4,
                height: "100%",
                backgroundColor: "#ffffff",
                borderRadius: "14px",
                border: "1px solid #e2e8f0",
              }}
            >
              <Typography sx={{ fontWeight: 800, fontSize: "18px", color: "#64748b", mb: 2.5 }}>
                ⚠️ Generic Acrylic / One-Day Liners
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {acrylicIssues.map((issue, idx) => (
                  <Box key={idx} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                    <XCircle size={18} color="#dc2626" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <Typography sx={{ fontSize: "14px", color: "#64748b", lineHeight: 1.5 }}>
                      {issue}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
