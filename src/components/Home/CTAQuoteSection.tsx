import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Phone, Mail, MapPin, Sparkles } from "lucide-react";
import EstimateForm from "./EstimateForm";

const CTAQuoteSection: React.FC = () => {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: "#ffffff" }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 6 } }}>
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
            <span>Zero-Obligation Estimate</span>
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
            Get Your Free Bathroom Renovation Quote
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "15px", md: "16.5px" },
              color: "#64748b",
              maxWidth: "760px",
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            Ready to transform your bathroom? Contact Ideal Bath Renovations today for a free, no-obligation quote and take the first step toward the bathroom you've been dreaming of.
          </Typography>
        </Box>

        {/* Contact info badges row */}
        <Grid container spacing={3} sx={{ mb: 5, maxWidth: "1000px", mx: "auto" }}>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Box
              component="a"
              href="tel:6722730434"
              sx={{
                p: 2.5,
                borderRadius: "12px",
                backgroundColor: "#f8fafc",
                border: "1px solid #e2e8f0",
                display: "flex",
                alignItems: "center",
                gap: 2,
                textDecoration: "none",
                color: "#0f172a",
                transition: "all 0.2s ease",
                "&:hover": {
                  borderColor: "#c29b38",
                  backgroundColor: "#fffdfa",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "10px",
                  backgroundColor: "rgba(194, 155, 56, 0.15)",
                  color: "#c29b38",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Phone size={20} />
              </Box>
              <Box>
                <Typography sx={{ fontSize: "12px", color: "#64748b", fontWeight: 600, textTransform: "uppercase" }}>
                  Direct Phone
                </Typography>
                <Typography sx={{ fontSize: "15px", fontWeight: 700, color: "#0f172a" }}>
                  (672) 273-0434
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 4 }}>
            <Box
              component="a"
              href="mailto:info@idealbathrenovations.ca"
              sx={{
                p: 2.5,
                borderRadius: "12px",
                backgroundColor: "#f8fafc",
                border: "1px solid #e2e8f0",
                display: "flex",
                alignItems: "center",
                gap: 2,
                textDecoration: "none",
                color: "#0f172a",
                transition: "all 0.2s ease",
                "&:hover": {
                  borderColor: "#c29b38",
                  backgroundColor: "#fffdfa",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "10px",
                  backgroundColor: "rgba(194, 155, 56, 0.15)",
                  color: "#c29b38",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Mail size={20} />
              </Box>
              <Box>
                <Typography sx={{ fontSize: "12px", color: "#64748b", fontWeight: 600, textTransform: "uppercase" }}>
                  Email Inquiries
                </Typography>
                <Typography sx={{ fontSize: "14px", fontWeight: 700, color: "#0f172a" }}>
                  info@idealbathrenovations.ca
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 4 }}>
            <Box
              sx={{
                p: 2.5,
                borderRadius: "12px",
                backgroundColor: "#f8fafc",
                border: "1px solid #e2e8f0",
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "10px",
                  backgroundColor: "rgba(194, 155, 56, 0.15)",
                  color: "#c29b38",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <MapPin size={20} />
              </Box>
              <Box>
                <Typography sx={{ fontSize: "12px", color: "#64748b", fontWeight: 600, textTransform: "uppercase" }}>
                  Langley HQ
                </Typography>
                <Typography sx={{ fontSize: "13.5px", fontWeight: 700, color: "#0f172a" }}>
                  20819 78B Ave, Langley Twp, BC
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Embedded Estimate Form */}
        <EstimateForm />
      </Container>
    </Box>
  );
};

export default CTAQuoteSection;
