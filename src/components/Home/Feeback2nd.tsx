import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import PrimaryButton from "../UI/PrimaryButton";
import { Award, CheckCircle, Wrench } from "lucide-react";

const Feedback2nd: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#f1f5f9" }}>
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 15px 35px -10px rgba(0,0,0,0.2)",
              }}
            >
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
                alt="Renovation Master Craftsmanship"
                sx={{
                  width: "100%",
                  height: { xs: "320px", sm: "440px" },
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 20,
                  left: 20,
                  right: 20,
                  backgroundColor: "rgba(15, 23, 42, 0.9)",
                  backdropFilter: "blur(6px)",
                  p: 2.5,
                  borderRadius: "10px",
                  color: "#ffffff",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Award size={24} color="#dfba5a" />
                  <Box>
                    <Typography sx={{ fontWeight: 700, fontSize: "14.5px" }}>
                      Schluter® Certified Master Pro
                    </Typography>
                    <Typography sx={{ fontSize: "12px", color: "#94a3b8" }}>
                      15+ Years Specializing in Bathroom Architecture & Waterproofing
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.8,
                  backgroundColor: "rgba(194, 155, 56, 0.15)",
                  color: "#b45309",
                  px: 1.5,
                  py: 0.5,
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  width: "fit-content",
                }}
              >
                <Wrench size={14} /> Master Craftsmanship
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: { xs: "26px", sm: "34px", md: "38px" },
                  fontWeight: 800,
                  color: "#0f172a",
                  lineHeight: 1.2,
                }}
              >
                Precision Remodeling Backed by Local Accountability
              </Typography>

              <Typography sx={{ fontSize: "14.5px", color: "#475569", lineHeight: 1.7 }}>
                Unlike general contractors who subcontract key steps to unknown third parties, Ideal Bath Renovations provides dedicated in-house specialists for every stage of your renovation — from 3D planning and demolition to certified Schluter waterproofing, tile setting, and precision plumbing.
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, my: 1 }}>
                {[
                  "Direct owner supervision on every Langley project",
                  "Dust barriers & negative air HEPA filtration systems",
                  "Daily cleanup & progress updates with photo logs",
                  "Guaranteed start & completion timeline commitments",
                ].map((point, idx) => (
                  <Box key={idx} sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                    <CheckCircle size={17} color="#c29b38" />
                    <Typography sx={{ fontSize: "14px", fontWeight: 600, color: "#1e293b" }}>
                      {point}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Box sx={{ pt: 2, display: "flex", gap: 2, flexWrap: "wrap" }}>
                <PrimaryButton
                  content="Meet Our Team & Process"
                  variant="gold"
                  btnpadding="12px 24px"
                  to="/about"
                />
                <PrimaryButton
                  content="See Our Workshop"
                  variant="outlined"
                  btnpadding="12px 24px"
                  to="/contact"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Feedback2nd;
