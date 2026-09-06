import React from "react";
import PrimaryButton from "./PrimaryButton";
import { Box, Typography, Container, Stack } from "@mui/material";
import { ShieldCheck, Sparkles, Clock, Hammer } from "lucide-react";

const PrimaryBookCard: React.FC = () => {
  return (
    <Box sx={{ width: "100%", py: { xs: 6, md: 9 }, backgroundColor: "#f8fafc" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            position: "relative",
            borderRadius: "20px",
            overflow: "hidden",
            backgroundColor: "#0f172a",
            color: "#ffffff",
            p: { xs: 4, sm: 6, md: 8 },
            boxShadow: "0 20px 40px -15px rgba(15,23,42,0.3)",
          }}
        >
          {/* Background image subtle overlay */}
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80"
            alt="Luxury Bathroom"
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              width: { xs: "100%", md: "60%" },
              height: "100%",
              objectFit: "cover",
              opacity: 0.22,
              mixBlendMode: "luminosity",
            }}
          />

          <Box sx={{ position: "relative", zIndex: 2, maxWidth: "650px" }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                backgroundColor: "rgba(194,155,56,0.2)",
                color: "#dfba5a",
                px: 2,
                py: 0.5,
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                mb: 2,
              }}
            >
              <Sparkles size={14} /> Ready to Transform Your Bathroom?
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "26px", sm: "34px", md: "40px" },
                fontWeight: 700,
                lineHeight: 1.2,
                mb: 2,
                color: "#ffffff",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Book Your Free In-Home 3D Design Consultation
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                color: "#cbd5e1",
                lineHeight: 1.6,
                mb: 4,
              }}
            >
              Our Langley renovation experts will inspect your space, discuss your design vision, and provide a fixed-price, no-obligation estimate with full 3D renderings.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mb: 4 }}
            >
              <PrimaryButton
                content="Get Free Instant Estimate"
                variant="gold"
                btnpadding="14px 28px"
                fontsize={15}
                to="/contact"
              />
              <PrimaryButton
                content="Explore All 12 Services"
                variant="outlined"
                btnpadding="14px 28px"
                fontsize={15}
                to="/services"
              />
            </Stack>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: { xs: 2, sm: 3 },
                pt: 3,
                borderTop: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <ShieldCheck size={16} color="#c29b38" />
                <Typography sx={{ fontSize: "12.5px", color: "#94a3b8" }}>
                  5-Yr Workmanship Guarantee
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Hammer size={16} color="#c29b38" />
                <Typography sx={{ fontSize: "12.5px", color: "#94a3b8" }}>
                  Red Seal Certified Trades
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Clock size={16} color="#c29b38" />
                <Typography sx={{ fontSize: "12.5px", color: "#94a3b8" }}>
                  On-Time & On-Budget
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PrimaryBookCard;
