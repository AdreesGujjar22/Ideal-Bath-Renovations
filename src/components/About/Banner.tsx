import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { MapPin, Phone, Clock } from "lucide-react";
import PrimaryButton from "../UI/PrimaryButton";

const AboutBanner: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#ffffff" }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
              }}
            >
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=80"
                alt="Langley Renovation Showroom & Design Studio"
                sx={{
                  width: "100%",
                  height: { xs: "280px", sm: "380px" },
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
              <Typography
                sx={{
                  color: "#c29b38",
                  fontWeight: 700,
                  fontSize: "13px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Langley Design Studio & Workshop
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: { xs: "24px", sm: "32px", md: "36px" },
                  fontWeight: 800,
                  color: "#0f172a",
                  lineHeight: 1.2,
                }}
              >
                Visit Our Langley Headquarters
              </Typography>

              <Typography sx={{ fontSize: "15px", color: "#475569", lineHeight: 1.7 }}>
                At <b>20819 78B Avenue, Langley Township, BC</b>, you can review tile, quartz, and vanity options in person during a consultation.
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2, py: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <MapPin size={18} color="#c29b38" />
                  <Typography sx={{ fontSize: "14px", color: "#1e293b", fontWeight: 600 }}>
                    Based at 20819 78B Avenue, Langley Township, BC
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Phone size={18} color="#c29b38" />
                  <Typography sx={{ fontSize: "14px", color: "#1e293b", fontWeight: 600 }}>
                    (672) 273-0434
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Clock size={18} color="#c29b38" />
                  <Typography sx={{ fontSize: "13.5px", color: "#64748b" }}>
                    Phone consultations available 24/7
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ pt: 1 }}>
                <PrimaryButton content="Schedule a Consultation" variant="gold" to="/contact" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutBanner;
