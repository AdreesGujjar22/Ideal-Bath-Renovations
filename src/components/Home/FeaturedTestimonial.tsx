import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { Star, ArrowRight } from "lucide-react";
import { Link } from "@/lib/router-compat";

const FeaturedTestimonial: React.FC = () => {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 9 }, backgroundColor: "#ffffff" }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: { xs: "28px", sm: "34px", md: "38px" },
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.2,
              mb: 3,
            }}
          >
            What Langley Bathroom Remodeling Clients Say
          </Typography>

          <Box
            sx={{
              p: { xs: 3.5, md: 4.5 },
              backgroundColor: "#f8fafc",
              borderRadius: "16px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center", gap: 0.5, mb: 2 }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="#f59e0b" color="#f59e0b" />
              ))}
            </Box>

            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                color: "#1e293b",
                fontStyle: "italic",
                lineHeight: 1.7,
                mb: 2.5,
                maxWidth: "680px",
                mx: "auto",
              }}
            >
              "Ideal Bath Renovations did a fantastic job with our bathroom remodel. The crew was punctual, kept the work area clean every day, and finished right on schedule with zero pricing surprises."
            </Typography>

            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#64748b",
                mb: 3,
              }}
            >
              — Homeowner in Langley Twp
            </Typography>

            <Box
              component={Link}
              to="/reviews"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.8,
                color: "#b45309",
                fontWeight: 700,
                fontSize: "14.5px",
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <span>Read More Reviews</span>
              <ArrowRight size={16} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedTestimonial;
