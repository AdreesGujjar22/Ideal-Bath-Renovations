import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Home, Palette, Hammer, ShieldCheck, Sparkles } from "lucide-react";
import PrimaryButton from "../UI/PrimaryButton";

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
    title: "Free In-Home Consultation",
    description:
      "We visit your home to assess the space, discuss your goals, and provide an initial project outline at no cost.",
  },
  {
    stepNumber: "02",
    icon: Palette,
    title: "Custom Design & Material Selection",
    description:
      "Choose fixtures, tile, and finishes with guidance from our design team to create a bathroom that fits your taste and budget.",
  },
  {
    stepNumber: "03",
    icon: Hammer,
    title: "Renovation & Installation",
    description:
      "Our crews complete the renovation efficiently, keeping your home clean and minimizing disruption throughout the build.",
  },
  {
    stepNumber: "04",
    icon: ShieldCheck,
    title: "Final Walkthrough & Warranty",
    description:
      "We review the finished space together and back the completed work with our workmanship warranty.",
  },
];

const ProcessSection: React.FC = () => {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 11 }, backgroundColor: "#f8fafc" }}>
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
            <span>Structured For Peace of Mind</span>
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
            Our Bathroom Remodeling Process
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
            A clear, four-step process keeps your renovation on schedule and on budget from start to finish.
          </Typography>
        </Box>

        <Grid container spacing={3.5}>
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

        <Box sx={{ mt: 6, textAlign: "center" }}>
          <PrimaryButton
            content="Schedule Your Step 1 Consultation"
            variant="gold"
            btnpadding="14px 32px"
            fontsize={15}
            to="/contact"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default ProcessSection;
