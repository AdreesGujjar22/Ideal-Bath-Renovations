import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { MapPin, Navigation, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { serviceAreasData } from "../../data/ServiceAreasData";
import GoogleMapEmbed from "../UI/GoogleMapEmbed";

const ServiceAreas: React.FC = () => {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: "#f8fafc" }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.8,
              backgroundColor: "rgba(194, 155, 56, 0.12)",
              color: "#b45309",
              px: 1.8,
              py: 0.5,
              borderRadius: "20px",
              fontSize: "12.5px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              mb: 1.5,
            }}
          >
            <MapPin size={14} color="#c29b38" />
            <span>Local Community Presence</span>
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: { xs: "28px", sm: "36px", md: "42px" },
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            Areas We Serve in Fraser Valley, BC
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "15px", md: "16.5px" },
              color: "#64748b",
              maxWidth: "740px",
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            Ideal Bath Renovations proudly serves homeowners throughout the following communities. Click any service area to explore localized project galleries, client reviews, and local map overviews:
          </Typography>
        </Box>

        {/* Service Area Cards Grid */}
        <Grid container spacing={3.5} sx={{ mb: { xs: 6, md: 8 } }}>
          {serviceAreasData.map((area) => (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={area.id}>
              <Box
                component={Link}
                to={`/service-areas/${area.slug}`}
                sx={{
                  textDecoration: "none",
                  height: "100%",
                  p: { xs: 3, md: 3.5 },
                  backgroundColor: "#ffffff",
                  borderRadius: "14px",
                  border: "1px solid #e2e8f0",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: "#c29b38",
                    boxShadow: "0 12px 28px rgba(15,23,42,0.08)",
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: "10px",
                      backgroundColor: "rgba(194, 155, 56, 0.12)",
                      color: "#c29b38",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Navigation size={20} />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "#b45309",
                      backgroundColor: "rgba(194, 155, 56, 0.12)",
                      px: 1.2,
                      py: 0.4,
                      borderRadius: "12px",
                      textTransform: "uppercase",
                    }}
                  >
                    {area.badge}
                  </Typography>
                </Box>

                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#0f172a",
                    lineHeight: 1.3,
                    mb: 1.5,
                  }}
                >
                  {area.name}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#64748b",
                    lineHeight: 1.65,
                    mb: 2.5,
                    flex: 1,
                  }}
                >
                  {area.description}
                </Typography>

                <Box sx={{ pt: 2, borderTop: "1px solid #f1f5f9", mb: 2 }}>
                  <Typography sx={{ fontSize: "11.5px", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", mb: 0.8, letterSpacing: "0.05em" }}>
                    Key Neighborhoods
                  </Typography>
                  <Typography sx={{ fontSize: "12.5px", color: "#475569", lineHeight: 1.5 }}>
                    {area.neighborhoods.slice(0, 5).join(" • ")}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.8,
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#c29b38",
                    mt: "auto",
                  }}
                >
                  <span>Explore {area.shortName} Page</span>
                  <ArrowRight size={14} />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Embedded Google Map Overview (Matching User Request & Image) */}
        <Box
          sx={{
            p: { xs: 2.5, md: 4 },
            backgroundColor: "#ffffff",
            borderRadius: "18px",
            border: "1px solid #e2e8f0",
            boxShadow: "0 6px 24px rgba(15, 23, 42, 0.04)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "flex-start", md: "center" },
              justifyContent: "space-between",
              gap: 2,
              mb: 3,
            }}
          >
            <Box>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: { xs: "20px", md: "24px" },
                  fontWeight: 800,
                  color: "#0f172a",
                  mb: 0.5,
                }}
              >
                Our Langley Twp HQ & Service Area Map
              </Typography>
              <Typography sx={{ fontSize: "14px", color: "#64748b" }}>
                Centrally located at 20819 78B Ave, Langley Twp with direct daily mobile units serving Surrey, Abbotsford & Fraser Valley.
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, flexShrink: 0 }}>
              <Box
                component="a"
                href="https://maps.app.goo.gl/AyGKysqniA1hfoGJA"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.8,
                  backgroundColor: "rgba(194, 155, 56, 0.12)",
                  color: "#b45309",
                  px: 2,
                  py: 1,
                  borderRadius: "8px",
                  fontSize: "13px",
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    backgroundColor: "rgba(194, 155, 56, 0.2)",
                  },
                }}
              >
                <span>Open in Google Maps</span>
                <ExternalLink size={14} />
              </Box>
            </Box>
          </Box>

          {/* Embedded Google Map Component */}
          <GoogleMapEmbed
            businessName="IDEAL BATH RENOVATIONS"
            address="20819 78B Ave, Langley Twp, BC V2Y 0A1"
            rating={5.0}
            reviewsCount="28+"
            mapQuery="20819 78B Ave, Langley Twp, BC V2Y 0A1, Canada"
            googleMapsLink="https://maps.app.goo.gl/AyGKysqniA1hfoGJA"
            directionsQuery="20819 78B Ave, Langley Twp, BC V2Y 0A1"
            bottomLabel="IDEAL BATH RENOVATIONS HQ • 20819 78B Ave, Langley Twp, BC, Canada"
            height={480}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default ServiceAreas;

