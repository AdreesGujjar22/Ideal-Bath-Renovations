import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { ShieldCheck, MapPin, FileCheck2, Award } from "lucide-react";

interface BenefitItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

const benefits: BenefitItem[] = [
  {
    icon: ShieldCheck,
    title: "Licensed Red Seal Trades",
    description:
      "Plumbing, electrical, and structural work is completed by certified Red Seal trades and inspected to applicable BC Building Code standards.",
  },
  {
    icon: Award,
    title: "Certified Schluter Waterproofing",
    description:
      "We install Schluter-KERDI shower membranes and DITRA uncoupling floors with manufacturer-backed warranty coverage.",
  },
  {
    icon: FileCheck2,
    title: "Fixed-Price Remodeling Quotes",
    description:
      "You receive an itemized written proposal before demolition starts, so you know the project cost in advance.",
  },
  {
    icon: MapPin,
    title: "Clean Worksites & Dust Control",
    description:
      "Floor protection, air filtration, and daily cleanup help keep the rest of your home tidy during the renovation.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: "#ffffff" }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 6 } }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: { xs: "28px", sm: "36px", md: "42px" },
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.2,
              mb: 1.5,
            }}
          >
            Why Homeowners in Langley Choose Us
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "15px", md: "16.5px" },
              color: "#64748b",
              maxWidth: "820px",
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            Clear quotes, licensed trades, and certified waterproofing for bathroom projects across the Fraser Valley.
          </Typography>
        </Box>

        <Grid container spacing={3}>
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
                      width: 48,
                      height: 48,
                      borderRadius: "12px",
                      backgroundColor: "rgba(194, 155, 56, 0.15)",
                      color: "#c29b38",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2.5,
                    }}
                  >
                    <Icon size={24} strokeWidth={2.2} />
                  </Box>

                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#0f172a",
                      lineHeight: 1.35,
                      mb: 1.2,
                    }}
                  >
                    {benefit.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "#64748b",
                      lineHeight: 1.6,
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
