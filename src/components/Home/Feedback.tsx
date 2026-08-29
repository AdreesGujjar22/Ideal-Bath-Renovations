import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import { Star, Quote, CheckCircle } from "lucide-react";

const reviews = [
  {
    name: "David & Karen M.",
    location: "Willoughby Heights, Langley Twp",
    project: "Full Master Ensuite Remodel & Steam Shower",
    stars: 5,
    date: "Verified Google Review",
    comment:
      "Ideal Bath Renovations transformed our outdated 1990s ensuite into a five-star spa sanctuary! The 3D CAD design helped us visualize the curbless shower and heated tile floors before work started. The crew arrived promptly at 7:30 AM every morning, kept the dust completely contained with HEPA filters, and finished on the exact day promised. Zero leaks, exquisite craftsmanship, and honest pricing!",
  },
  {
    name: "Robert S.",
    location: "Walnut Grove, Langley",
    project: "Tub-to-Shower Conversion",
    stars: 5,
    date: "Verified Google Review",
    comment:
      "Converted a slippery acrylic tub into a gorgeous modern walk-in shower with 10mm frameless glass and matte black fixtures. The Schluter waterproofing system gave us total peace of mind. Completed in just 4 days from demo to sparkling clean walkthrough. Highly recommend their team!",
  },
  {
    name: "Eileen & Thomas B.",
    location: "Brookswood, Langley Twp",
    project: "Aging-in-Place ADA Accessible Shower",
    stars: 5,
    date: "Verified Google Review",
    comment:
      "We needed a zero-barrier roll-in shower and secure designer grab bars for my mother. The Ideal Bath team treated our home with immense respect and helped us navigate the BC Home Renovation accessibility tax credit. The bathroom is safe, functional, and looks stunning!",
  },
];

const Feedback: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#ffffff" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            sx={{
              color: "#c29b38",
              fontWeight: 700,
              fontSize: "13px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              mb: 1,
            }}
          >
            Real Homeowner Experiences
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: { xs: "26px", sm: "34px", md: "38px" },
              fontWeight: 800,
              color: "#0f172a",
            }}
          >
            What Langley Homeowners Say
          </Typography>
        </Box>

        <Grid container spacing={3.5}>
          {reviews.map((rev, idx) => (
            <Grid size={{ xs: 12, md: 4 }} key={idx}>
              <Box
                sx={{
                  p: 3.5,
                  height: "100%",
                  backgroundColor: "#f8fafc",
                  borderRadius: "14px",
                  border: "1px solid #e2e8f0",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    borderColor: "#c29b38",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Box>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                    <Box sx={{ display: "flex", color: "#f59e0b" }}>
                      {[...Array(rev.stars)].map((_, i) => (
                        <Star key={i} size={17} fill="#f59e0b" stroke="none" />
                      ))}
                    </Box>
                    <Quote size={20} color="#cbd5e1" />
                  </Box>

                  <Typography
                    sx={{
                      fontSize: "13.5px",
                      color: "#475569",
                      lineHeight: 1.7,
                      fontStyle: "italic",
                      mb: 3,
                    }}
                  >
                    "{rev.comment}"
                  </Typography>
                </Box>

                <Box sx={{ pt: 2, borderTop: "1px solid #e2e8f0" }}>
                  <Typography sx={{ fontWeight: 700, fontSize: "15px", color: "#0f172a" }}>
                    {rev.name}
                  </Typography>
                  <Typography sx={{ fontSize: "12.5px", color: "#64748b" }}>
                    📍 {rev.location}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.8, mt: 0.5 }}>
                    <CheckCircle size={13} color="#c29b38" />
                    <Typography sx={{ fontSize: "11.5px", color: "#c29b38", fontWeight: 600 }}>
                      {rev.project}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Feedback;
