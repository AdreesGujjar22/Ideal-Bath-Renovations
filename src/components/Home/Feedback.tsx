import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import { Star } from "lucide-react";
import { reviews } from "../../data/ReviewsData";


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
            Homeowner Reviews
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
            What Our Customers Say
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
                    <Box sx={{ display: "flex", alignItems: "center", color: "#f59e0b" }}>
                      {[...Array(rev.stars)].map((_, i) => (
                        <Star key={i} size={17} fill="#f59e0b" stroke="none" />
                      ))}
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
                      <Typography sx={{ fontSize: "12px", color: "#64748b" }}>{rev.date}</Typography>
                      <Typography sx={{ fontSize: "10px", fontWeight: 700, color: "#334155", border: "1px solid #cbd5e1", borderRadius: "3px", px: 0.6, py: 0.1 }}>
                        NEW
                      </Typography>
                    </Box>
                  </Box>

                  <Typography
                    sx={{
                      fontSize: "13.5px",
                      color: "#475569",
                      lineHeight: 1.7,

                      mb: 3,
                    }}
                  >
                    {rev.comment}
                  </Typography>
                </Box>

                <Box sx={{ pt: 2, borderTop: "1px solid #e2e8f0" }}>
                  <Typography sx={{ fontWeight: 700, fontSize: "15px", color: "#0f172a" }}>
                    {rev.name}
                  </Typography>
                  <Typography sx={{ fontSize: "12.5px", color: "#64748b", mt: 0.2 }}>
                    {rev.profileDetails}
                  </Typography>
                  {rev.context && (
                    <Box sx={{ mt: 1.5, pt: 1.2, borderTop: "1px solid #e2e8f0" }}>
                      <Typography sx={{ fontSize: "12px", fontWeight: 700, color: "#0f172a" }}>
                        {rev.context.label}
                      </Typography>
                      <Typography sx={{ fontSize: "12px", color: "#475569" }}>
                        {rev.context.value}
                      </Typography>
                    </Box>
                  )}
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
