import React from "react";
import { Box, Typography, Container, Stack, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, ExternalLink, Star } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0f172a",
        color: "#94a3b8",
        pt: { xs: 7, md: 9 },
        pb: 5,
        borderTop: "3px solid #c29b38",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={5}>
          {/* Company Info */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
              <Box
                component="img"
                src="/logo.png"
                alt="Ideal Bath Renovations"
                sx={{
                  width: 220,
                  height: 54,
                  objectFit: "contain",
                  objectPosition: "left center",
                }}
              />

              <Typography sx={{ fontSize: "14px", lineHeight: 1.7, color: "#cbd5e1" }}>
                Ideal Bath Renovations is a bathroom renovation contractor based in Langley Township, serving Langley Twp, Surrey, Abbotsford, and the Fraser Valley. We handle full remodels, tub-to-shower conversions, and walk-in showers.
              </Typography>

              <Box
                component="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.3,
                  pt: 1,
                  fontStyle: "normal",
                }}
              >
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
                  <Typography sx={{ fontSize: "13.5px", lineHeight: 1.5 }}>
                    <span itemProp="streetAddress">20819 78B Avenue</span>,{" "}
                    <span itemProp="addressLocality">Langley Township</span>,{" "}
                    <span itemProp="addressRegion">BC</span>{" "}
                    <span itemProp="postalCode">V2Y 0A1</span>,{" "}
                    <span itemProp="addressCountry">Canada</span>
                  </Typography>
                </Box>

                <Box
                  component="a"
                  href="tel:16722730434"
                  itemProp="telephone"
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
                  <Typography sx={{ fontSize: "13.5px", fontWeight: 700 }}>
                    +1 (672) 273-0434
                  </Typography>
                </Box>

                <Box
                  component="a"
                  href="https://maps.app.goo.gl/AyGKysqniA1hfoGJA"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    backgroundColor: "rgba(194, 155, 56, 0.12)",
                    border: "1px solid rgba(194, 155, 56, 0.35)",
                    borderRadius: "6px",
                    px: 1.5,
                    py: 0.8,
                    color: "#dfba5a",
                    textDecoration: "none",
                    fontSize: "12.5px",
                    fontWeight: 600,
                    width: "fit-content",
                    "&:hover": { backgroundColor: "rgba(194, 155, 56, 0.22)" },
                  }}
                >
                  <Star size={15} color="#dfba5a" fill="#dfba5a" />
                  <span>Google Business Profile &amp; Reviews</span>
                </Box>

                <Box
                  component="a"
                  href="mailto:info@idealbathrenovations.ca"
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
                    info@idealbathrenovations.ca
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, color: "#94a3b8" }}>
                  <Clock size={18} color="#dfba5a" style={{ flexShrink: 0 }} />
                  <Typography sx={{ fontSize: "13px" }}>
                    Monday – Saturday: 8:00 AM – 6:00 PM (Emergency Dispatch 24/7)
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Quick Navigation Links */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              component="div"
              sx={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#dfba5a",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                mb: 2.5,
              }}
            >
              Navigation
            </Typography>
            <Stack spacing={1.4}>
              {[
                { label: "Renovation Services", path: "/services" },
                { label: "Before & After Gallery", path: "/before-after" },
                { label: "Client Reviews", path: "/reviews" },
                { label: "About Us", path: "/about" },
                { label: "Contact & Free Quote", path: "/contact" },
              ].map((link, idx) => (
                <Link
                  key={idx}
                  to={link.path}
                  style={{
                    color: "#cbd5e1",
                    textDecoration: "none",
                    fontSize: "13.5px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#dfba5a")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#cbd5e1")}
                >
                  <span style={{ color: "#c29b38", fontSize: "10px" }}>▸</span>
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Service Areas */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography
              component="div"
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
            <Stack spacing={1.3} sx={{ mb: 3 }}>
              {[
                { name: "Langley Twp HQ", path: "/service-areas/langley-twp" },
                { name: "Surrey, BC", path: "/service-areas/surrey" },
                { name: "Abbotsford, BC", path: "/service-areas/abbotsford" },
                { name: "Fraser Valley", path: "/service-areas/fraser-valley" },
              ].map((area, idx) => (
                <Link
                  key={idx}
                  to={area.path}
                  style={{
                    color: "#cbd5e1",
                    textDecoration: "none",
                    fontSize: "13.5px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#dfba5a")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#cbd5e1")}
                >
                  <span style={{ color: "#c29b38", fontSize: "10px" }}>▸</span>
                  {area.name}
                </Link>
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
                  px: 1.8,
                  py: 0.9,
                  borderRadius: "6px",
                  fontSize: "12.5px",
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
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.4 }}>
            <Typography sx={{ fontSize: "12px", color: "#64748b" }}>
              © 2026 Ideal Bath Renovations. All rights reserved.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Link to="/about" style={{ color: "#64748b", textDecoration: "none" }}>About</Link>
            <Link to="/services" style={{ color: "#64748b", textDecoration: "none" }}>Services</Link>
            <Link to="/reviews" style={{ color: "#64748b", textDecoration: "none" }}>Reviews</Link>
            <Link to="/contact" style={{ color: "#64748b", textDecoration: "none" }}>Contact</Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
