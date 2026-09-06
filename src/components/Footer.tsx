import React from "react";
import { Box, Typography, Container, Stack, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, ShieldCheck, CheckCircle2, Award, ExternalLink, Bath } from "lucide-react";
import { servicesDetailList } from "../data/ServicesDetailData";

const Footer: React.FC = () => {
  const firstColServices = servicesDetailList.slice(0, 6);
  const secondColServices = servicesDetailList.slice(6, 12);

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
                  <Bath size={24} color="#dfba5a" />
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
                  href="tel:6722730434"
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
                    (672) 273-0434 (24/7 Phone Support)
                  </Typography>
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
                    Open 24 Hours / 7 Days a Week
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* 12 Core Renovation Services - Column 1 */}
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
              Remodeling Services
            </Typography>
            <Stack spacing={1.2}>
              {firstColServices.map((item) => (
                <Link
                  key={item.id}
                  to={`/services/${item.slug}`}
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
                  {item.title}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* 12 Core Renovation Services - Column 2 */}
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
              Specialty Installations
            </Typography>
            <Stack spacing={1.2}>
              {secondColServices.map((item) => (
                <Link
                  key={item.id}
                  to={`/services/${item.slug}`}
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
                  {item.title}
                </Link>
              ))}
              <Link
                to="/services"
                style={{
                  color: "#dfba5a",
                  textDecoration: "none",
                  fontSize: "13px",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  marginTop: "6px",
                }}
              >
                <span>★ View All 12 Services Hub</span>
              </Link>
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
            <Stack spacing={1.1} sx={{ mb: 2.5 }}>
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
                  {area.name}
                </Link>
              ))}
              <Link
                to="/service-areas"
                style={{
                  color: "#dfba5a",
                  textDecoration: "none",
                  fontSize: "12.5px",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  marginTop: "4px",
                }}
              >
                <span>View All Service Areas &rarr;</span>
              </Link>
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
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Link to="/about" style={{ color: "#64748b", textDecoration: "none" }}>About</Link>
            <Link to="/services" style={{ color: "#64748b", textDecoration: "none" }}>Services Hub</Link>
            <Link to="/before-after" style={{ color: "#64748b", textDecoration: "none" }}>Transformations</Link>
            <Link to="/contact" style={{ color: "#64748b", textDecoration: "none" }}>Free Quote</Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
