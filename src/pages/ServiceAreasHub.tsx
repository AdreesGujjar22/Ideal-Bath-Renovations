import React, { useEffect } from "react";
import { Box, Typography, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { MapPin, Navigation, ArrowRight, Phone, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { serviceAreasData } from "../data/ServiceAreasData";
import SEO from "../components/SEO";
import PrimaryButton from "../components/UI/PrimaryButton";
import GoogleMapEmbed from "../components/UI/GoogleMapEmbed";
import EstimateForm from "../components/Home/EstimateForm";

const ServiceAreasHub: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Service Areas | Bathroom Remodeler Langley, Surrey & Fraser Valley, BC"
        description="Explore Ideal Bath Renovations service areas across Langley Twp, Surrey, Abbotsford, White Rock & Fraser Valley. Free in-home estimates and licensed contractors."
        canonical="https://idealbathrenovations.ca/service-areas"
        keywords="bathroom renovations service areas, bathroom remodeling Langley, bathroom remodeler Surrey BC, bathroom renovation Abbotsford, Fraser Valley bathroom contractors"
      />

      {/* Hero */}
      <Box
        component="section"
        sx={{
          pt: { xs: 12, md: 16 },
          pb: { xs: 8, md: 10 },
          background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)",
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.8,
              backgroundColor: "rgba(194, 155, 56, 0.2)",
              color: "#dfba5a",
              px: 2,
              py: 0.6,
              borderRadius: "20px",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              mb: 2.5,
              border: "1px solid rgba(194, 155, 56, 0.3)",
            }}
          >
            <MapPin size={15} />
            <span>Regional Coverage • Fraser Valley & Lower Mainland</span>
          </Box>

          <Typography
            variant="h1"
            sx={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: { xs: "32px", sm: "44px", md: "52px" },
              fontWeight: 800,
              lineHeight: 1.15,
              mb: 2.5,
            }}
          >
            Areas We Serve Throughout Fraser Valley, BC
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              color: "#cbd5e1",
              maxWidth: "780px",
              mx: "auto",
              lineHeight: 1.7,
              mb: 4,
            }}
          >
            From our headquarters in Langley Township, Ideal Bath Renovations delivers master bathroom remodels, tub-to-shower conversions, and Schluter waterproofing across the Fraser Valley.
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
            <PrimaryButton
              content="Request In-Home Estimate"
              variant="gold"
              btnpadding="14px 32px"
              fontsize={15}
              to="/contact"
            />
            <Box
              component="a"
              href="tel:6722730434"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 3,
                py: "14px",
                borderRadius: "8px",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                color: "#ffffff",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                fontSize: "15px",
                fontWeight: 700,
                textDecoration: "none",
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.16)",
                  borderColor: "#dfba5a",
                  color: "#dfba5a",
                },
              }}
            >
              <Phone size={18} />
              <span>(672) 273-0434</span>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Service Areas Grid */}
      <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: "#f8fafc" }}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {serviceAreasData.map((area) => (
              <Grid size={{ xs: 12, md: 6 }} key={area.id}>
                <Box
                  sx={{
                    p: { xs: 3.5, md: 4.5 },
                    backgroundColor: "#ffffff",
                    borderRadius: "18px",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 6px 20px rgba(15,23,42,0.04)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      borderColor: "#c29b38",
                      boxShadow: "0 14px 32px rgba(15,23,42,0.08)",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2.5 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: "12px",
                          backgroundColor: "rgba(194, 155, 56, 0.12)",
                          color: "#c29b38",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Navigation size={22} />
                      </Box>
                      <Box>
                        <Typography
                          variant="h2"
                          sx={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontSize: "24px",
                            fontWeight: 800,
                            color: "#0f172a",
                          }}
                        >
                          {area.name}
                        </Typography>
                        <Typography sx={{ fontSize: "12px", color: "#64748b", fontWeight: 600 }}>
                          {area.populationServed}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography
                      sx={{
                        fontSize: "11.5px",
                        fontWeight: 700,
                        color: "#b45309",
                        backgroundColor: "rgba(194, 155, 56, 0.12)",
                        px: 1.4,
                        py: 0.5,
                        borderRadius: "12px",
                        textTransform: "uppercase",
                      }}
                    >
                      {area.badge}
                    </Typography>
                  </Box>

                  <Typography sx={{ fontSize: "15px", color: "#475569", lineHeight: 1.7, mb: 3 }}>
                    {area.description}
                  </Typography>

                  <Box sx={{ mb: 3, pt: 2, borderTop: "1px solid #f1f5f9" }}>
                    <Typography sx={{ fontSize: "12px", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", mb: 1, letterSpacing: "0.05em" }}>
                      Key Neighborhoods Served:
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {area.neighborhoods.map((n, i) => (
                        <Box
                          key={i}
                          sx={{
                            fontSize: "12px",
                            color: "#334155",
                            backgroundColor: "#f1f5f9",
                            px: 1.2,
                            py: 0.4,
                            borderRadius: "6px",
                            fontWeight: 600,
                          }}
                        >
                          {n}
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  <Box sx={{ mt: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", pt: 2, borderTop: "1px solid #f1f5f9" }}>
                    <Box
                      component={Link}
                      to={`/service-areas/${area.slug}`}
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 1,
                        fontSize: "14px",
                        fontWeight: 700,
                        color: "#c29b38",
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      <span>Explore {area.shortName} Full Page</span>
                      <ArrowRight size={16} />
                    </Box>

                    <Box
                      component="a"
                      href={area.googleMapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        fontSize: "12.5px",
                        color: "#2563eb",
                        fontWeight: 600,
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      Google Map &rarr;
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Central Fraser Valley Map Overview */}
      <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: "#ffffff" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
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
              <Sparkles size={14} color="#c29b38" />
              <span>Interactive Google Map Overview</span>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: { xs: "28px", sm: "36px", md: "42px" },
                fontWeight: 800,
                color: "#0f172a",
                mb: 1.5,
              }}
            >
              Ideal Bath Renovations Headquarters & Service Dispatch
            </Typography>
            <Typography sx={{ fontSize: "15px", color: "#64748b", maxWidth: "720px", mx: "auto" }}>
              Located at 20819 78B Ave, Langley Twp, BC V2Y 0A1. We dispatch certified renovation teams across all Fraser Valley municipalities daily.
            </Typography>
          </Box>

          <GoogleMapEmbed
            businessName="IDEAL BATH RENOVATIONS"
            address="20819 78B Ave, Langley Twp, BC V2Y 0A1"
            rating={5.0}
            reviewsCount="28+"
            mapQuery="20819 78B Ave, Langley Twp, BC V2Y 0A1, Canada"
            googleMapsLink="https://maps.app.goo.gl/AyGKysqniA1hfoGJA"
            directionsQuery="20819 78B Ave, Langley Twp, BC V2Y 0A1"
            bottomLabel="IDEAL BATH RENOVATIONS HQ • 20819 78B Ave, Langley Twp, BC, Canada"
            height={500}
          />
        </Container>
      </Box>

      {/* Free Quote Form */}
      <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: "#f8fafc" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: { xs: "28px", sm: "36px", md: "40px" },
                fontWeight: 800,
                color: "#0f172a",
                mb: 1.5,
              }}
            >
              Request Your Free Bathroom Renovation Quote
            </Typography>
            <Typography sx={{ fontSize: "15px", color: "#64748b", maxWidth: "700px", mx: "auto" }}>
              Serving Langley Twp, Surrey, Abbotsford, and the entire Fraser Valley with upfront written pricing.
            </Typography>
          </Box>
          <EstimateForm />
        </Container>
      </Box>
    </>
  );
};

export default ServiceAreasHub;
