import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { ShieldCheck, MapPin, FileCheck2, Award, Sparkles } from "lucide-react";

interface BenefitItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

const benefits: BenefitItem[] = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured Bathroom Contractors",
    description:
      "Our team is fully licensed and insured, giving you peace of mind from the first consultation to the final walkthrough.",
  },
  {
    icon: MapPin,
    title: "Locally Owned in Langley Twp",
    description:
      "As a locally owned business, we understand the homes, building codes, and style preferences unique to Langley Twp and the surrounding Fraser Valley communities.",
  },
  {
    icon: FileCheck2,
    title: "Transparent Pricing & Written Quotes",
    description:
      "Every project starts with a clear, written quote — no hidden fees, no surprise costs once work begins.",
  },
  {
    icon: Award,
    title: "Quality Craftsmanship Guarantee",
    description:
      "We stand behind our work with a craftsmanship guarantee, ensuring your renovation looks great and performs well for years after completion.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: "#ffffff" }}>
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
            <Sparkles size={14} color="#c29b38" />
            <span>The Ideal Bath Standard</span>
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
            Why Homeowners in Langley Choose Ideal Bath Renovations
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
            We combine local expertise with dependable service, so every renovation is handled honestly, safely, and to a high standard of craftsmanship.
          </Typography>
        </Box>

        <Grid container spacing={3.5}>
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={idx}>
                <Box
                  sx={{
                    height: "100%",
                    p: { xs: 3, md: 3.5 },
                    backgroundColor: "#f8fafc",
                    borderRadius: "14px",
                    border: "1px solid #e2e8f0",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      borderColor: "#c29b38",
                      boxShadow: "0 10px 24px rgba(15,23,42,0.06)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: "12px",
                      backgroundColor: "rgba(194, 155, 56, 0.15)",
                      color: "#c29b38",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2.5,
                    }}
                  >
                    <Icon size={26} strokeWidth={2.2} />
                  </Box>

                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#0f172a",
                      lineHeight: 1.35,
                      mb: 1.5,
                    }}
                  >
                    {benefit.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "#64748b",
                      lineHeight: 1.65,
                    }}
                  >
                    {benefit.description}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
