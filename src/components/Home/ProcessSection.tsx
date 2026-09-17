import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Home, Palette, Hammer, ShieldCheck } from "lucide-react";

interface ProcessStep {
  stepNumber: string;
  icon: React.ElementType;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    stepNumber: "01",
    icon: Home,
    title: "In-Home Consultation & Estimate",
    description:
      "We visit your home, measure your space, and provide a clear written estimate.",
  },
  {
    stepNumber: "02",
    icon: Palette,
    title: "Material Selection & Planning",
    description:
      "Select your tile, fixtures, and vanity before demolition starts to keep work on schedule.",
  },
  {
    stepNumber: "03",
    icon: Hammer,
    title: "Demolition & Waterproof Construction",
    description:
      "We protect your floors, complete clean demolition, update plumbing, and install waterproof backing.",
  },
  {
    stepNumber: "04",
    icon: ShieldCheck,
    title: "Finishing & Final Walkthrough",
    description:
      "We install tile and fixtures, clean up thoroughly, and conduct a final walkthrough together.",
  },
];

const ProcessSection: React.FC = () => {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: "#f8fafc" }}>
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
            Our Bathroom Renovation Process in Langley
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
            A simple four-step approach so you always know what is happening next.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={idx}>
                <Box
                  sx={{
                    position: "relative",
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
                  {/* Step badge top right */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mb: 2.5,
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: "12px",
                        backgroundColor: "#0f172a",
                        color: "#dfba5a",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={24} color="#dfba5a" />
                    </Box>

                    <Typography
                      sx={{
                        fontSize: "24px",
                        fontWeight: 900,
                        color: "#e2e8f0",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        lineHeight: 1,
                      }}
                    >
                      {step.stepNumber}
                    </Typography>
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
                    {step.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "#64748b",
                      lineHeight: 1.65,
                    }}
                  >
                    {step.description}
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

export default ProcessSection;
