import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { MapPin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { serviceAreasData } from "../../data/ServiceAreasData";
import GoogleMapEmbed from "../UI/GoogleMapEmbed";

const ServiceAreas: React.FC = () => {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: "#f8fafc" }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 5 } }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: { xs: "28px", sm: "36px", md: "42px" },
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.2,
              mb: 3,
            }}
          >
            Service Areas
          </Typography>

          {/* Short list of served area names as links */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            {serviceAreasData.map((area) => (
              <Box
                key={area.id}
                component={Link}
                to={`/service-areas/${area.slug}`}
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.8,
                  px: 2.2,
                  py: 1,
                  borderRadius: "8px",
                  backgroundColor: "#ffffff",
                  border: "1px solid #e2e8f0",
                  color: "#1e293b",
                  fontSize: "14px",
                  fontWeight: 600,
                  textDecoration: "none",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    borderColor: "#c29b38",
                    color: "#b45309",
                    backgroundColor: "rgba(194, 155, 56, 0.05)",
                  },
                }}
              >
                <MapPin size={15} color="#c29b38" />
                <span>{area.name}</span>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Embedded Google Map Overview */}
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
                Our location at 20819 78B Ave, Langley Twp and our regional service coverage.
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

