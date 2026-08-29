import React from "react";
import { Box, Typography, Container, Stack, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, ShieldCheck, CheckCircle2, Award, ExternalLink } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0f172a",
        color: "#94a3b8",
        pt: { xs: 8, md: 10 },
        pb: 5,
        borderTop: "3px solid #c29b38",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={5}>
          {/* Company Info & Mission */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#dfba5a",
                    border: "1px solid rgba(194, 155, 56, 0.3)",
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1 0L2 7" />
                    <path d="M4 12V7" />
                    <path d="M22 13v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2a9 9 0 0 0 8.05 8.94V22a1 1 0 0 0 2 0v-0.06A9 9 0 0 0 22 13Z" />
                  </svg>
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      fontSize: "20px",
                      color: "#ffffff",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.1,
                    }}
                  >
                    IDEAL BATH
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      color: "#dfba5a",
                      textTransform: "uppercase",
                    }}
                  >
                    Renovations • Langley Twp
                  </Typography>
                </Box>
              </Box>

              <Typography sx={{ fontSize: "14px", lineHeight: 1.7, color: "#cbd5e1" }}>
                Langley’s trusted bathroom remodeling contractor. Specializing in luxury master ensuite transformations, tub-to-shower conversions, curbless walk-in showers, custom tile craftsmanship, and radiant heated floors.
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2, pt: 1 }}>
                <Box
                  component="a"
                  href="https://maps.app.goo.gl/AyGKysqniA1hfoGJA"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 1.5,
                    color: "#cbd5e1",
                    textDecoration: "none",
                    "&:hover": { color: "#dfba5a" },
                  }}
                >
                  <MapPin size={18} color="#dfba5a" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <Typography sx={{ fontSize: "13.5px" }}>
                    20819 78B Avenue, Langley Twp, BC V2Y, Canada
                  </Typography>
                </Box>

                <Box
                  component="a"
                  href="tel:6045398822"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    color: "#cbd5e1",
                    textDecoration: "none",
                    "&:hover": { color: "#dfba5a" },
                  }}
                >
                  <Phone size={18} color="#dfba5a" style={{ flexShrink: 0 }} />
                  <Typography sx={{ fontSize: "13.5px", fontWeight: 600 }}>
                    (604) 539-8822
                  </Typography>
                </Box>

                <Box
                  component="a"
                  href="mailto:estimates@idealbathrenovations.ca"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    color: "#cbd5e1",
                    textDecoration: "none",
                    "&:hover": { color: "#dfba5a" },
                  }}
                >
                  <Mail size={18} color="#dfba5a" style={{ flexShrink: 0 }} />
                  <Typography sx={{ fontSize: "13.5px" }}>
                    estimates@idealbathrenovations.ca
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, color: "#94a3b8" }}>
                  <Clock size={18} color="#dfba5a" style={{ flexShrink: 0 }} />
                  <Typography sx={{ fontSize: "13px" }}>
                    Mon - Sat: 7:30 AM - 6:00 PM
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Core Services (19 categories grouped) */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#dfba5a",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                mb: 2.5,
              }}
            >
              Bathroom Services
            </Typography>
            <Stack spacing={1.2}>
              {[
                { name: "Full-Service Bathroom Remodeling", to: "/treatments" },
                { name: "Bathroom Design & Space Planning", to: "/treatments" },
                { name: "Tub-to-Shower Conversions", to: "/rfMicroNeedling" },
                { name: "Walk-In & Curbless Showers", to: "/resurfacingTreatment" },
                { name: "Bathtub Replacement & Refinishing", to: "/treatments" },
                { name: "Steam Shower & Sauna Installation", to: "/resurfacingTreatment" },
                { name: "Wall & Floor Tiling", to: "/treatments" },
                { name: "Countertop Installation", to: "/treatments" },
                { name: "Custom Cabinetry & Vanity", to: "/treatments" },
                { name: "Radiant In-Floor Heating", to: "/treatments" },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  to={item.to}
                  style={{
                    color: "#cbd5e1",
                    textDecoration: "none",
                    fontSize: "13px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#dfba5a")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#cbd5e1")}
                >
                  <span style={{ color: "#c29b38", fontSize: "10px" }}>▸</span>
                  {item.name}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* More Categories & Specialty */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#dfba5a",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                mb: 2.5,
              }}
            >
              Specialty Solutions
            </Typography>
            <Stack spacing={1.2}>
              {[
                { name: "Smart Toilet & Bidet Installation", to: "/treatments" },
                { name: "Plumbing Fixture Upgrades", to: "/treatments" },
                { name: "Electrical & Accent Lighting", to: "/treatments" },
                { name: "Ventilation & Exhaust Upgrades", to: "/treatments" },
                { name: "Waterproofing & Vapor Barriers", to: "/treatments" },
                { name: "ADA & Aging-In-Place Modifications", to: "/nanoneedling" },
                { name: "Powder Room Renovations", to: "/treatments" },
                { name: "One-Day Refinishing & Liners", to: "/treatments" },
                { name: "Demolition & Clean Tear-Out", to: "/treatments" },
                { name: "Before & After Transformations", to: "/before&After" },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  to={item.to}
                  style={{
                    color: "#cbd5e1",
                    textDecoration: "none",
                    fontSize: "13px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#dfba5a")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#cbd5e1")}
                >
                  <span style={{ color: "#c29b38", fontSize: "10px" }}>▸</span>
                  {item.name}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Service Areas & Certifications */}
          <Grid size={{ xs: 12, md: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#dfba5a",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                mb: 2.5,
              }}
            >
              Service Areas
            </Typography>
            <Stack spacing={0.8} sx={{ mb: 3 }}>
              {["Langley Township", "Willoughby Heights", "Walnut Grove", "Fort Langley", "Murrayville", "Brookswood", "Surrey / South Surrey", "White Rock", "Abbotsford"].map((area, idx) => (
                <Typography key={idx} sx={{ fontSize: "12.5px", color: "#cbd5e1" }}>
                  • {area}
                </Typography>
              ))}
            </Stack>

            <Box sx={{ pt: 2, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <Box
                component="a"
                href="https://maps.app.goo.gl/AyGKysqniA1hfoGJA"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.8,
                  backgroundColor: "rgba(194, 155, 56, 0.15)",
                  color: "#dfba5a",
                  px: 1.5,
                  py: 0.8,
                  borderRadius: "6px",
                  fontSize: "12px",
                  fontWeight: 600,
                  textDecoration: "none",
                  "&:hover": { backgroundColor: "rgba(194, 155, 56, 0.3)" },
                }}
              >
                <ExternalLink size={13} /> View on Google Maps
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.08)" }} />

        {/* Badges and Guarantees */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            mb: 3,
          }}
        >
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <ShieldCheck size={18} color="#dfba5a" />
              <Typography sx={{ fontSize: "12.5px", color: "#e2e8f0", fontWeight: 600 }}>
                5-Year Workmanship Warranty
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Award size={18} color="#dfba5a" />
              <Typography sx={{ fontSize: "12.5px", color: "#e2e8f0", fontWeight: 600 }}>
                Schluter® Certified Waterproofing
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CheckCircle2 size={18} color="#dfba5a" />
              <Typography sx={{ fontSize: "12.5px", color: "#e2e8f0", fontWeight: 600 }}>
                Licensed Red Seal Trades & WorkSafeBC Insured
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1.5,
            fontSize: "12px",
            color: "#64748b",
          }}
        >
          <Typography sx={{ fontSize: "12px", color: "#64748b" }}>
            © {new Date().getFullYear()} Ideal Bath Renovations. All rights reserved. 20819 78B Avenue, Langley Twp, BC V2Y.
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Link to="/about" style={{ color: "#64748b", textDecoration: "none" }}>About</Link>
            <Link to="/treatments" style={{ color: "#64748b", textDecoration: "none" }}>Services</Link>
            <Link to="/before&After" style={{ color: "#64748b", textDecoration: "none" }}>Gallery</Link>
            <Link to="/contact" style={{ color: "#64748b", textDecoration: "none" }}>Free Quote</Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
