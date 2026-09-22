import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import PrimaryButton from "../UI/PrimaryButton";
import { Award, ShieldCheck, CheckCircle2 } from "lucide-react";

const Header: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#ffffff" }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
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
                About Ideal Bath Renovations
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: { xs: "28px", sm: "36px", md: "42px" },
                  fontWeight: 800,
                  color: "#0f172a",
                  lineHeight: 1.15,
                }}
              >
                Meet the Team Behind Ideal Bath Renovations
              </Typography>

              <Typography sx={{ fontSize: "15.5px", color: "#475569", lineHeight: 1.7 }}>
                Based at 20819 78B Avenue in Langley Township, we remodel bathrooms, convert tubs to showers, and install custom tile across Langley Twp, Surrey, Abbotsford, and the Fraser Valley. Licensed trades and fixed-price contracts keep the project clear from the start.
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2, my: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <ShieldCheck size={18} color="#c29b38" />
                  <Typography sx={{ fontSize: "14px", fontWeight: 600, color: "#1e293b" }}>
                    Workmanship Guarantee
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Award size={18} color="#c29b38" />
                  <Typography sx={{ fontSize: "14px", fontWeight: 600, color: "#1e293b" }}>
                    Schluter Waterproofing Systems
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <CheckCircle2 size={18} color="#c29b38" />
                  <Typography sx={{ fontSize: "14px", fontWeight: 600, color: "#1e293b" }}>
                    Licensed Trades & BC Building Code Compliant
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ pt: 1 }}>
                <PrimaryButton content="Request In-Home Consultation" variant="gold" to="/contact" />
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 20px 40px -10px rgba(0,0,0,0.15)",
              }}
            >
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1000&q=80"
                alt="Ideal Bath Renovations Craftsmanship"
                sx={{
                  width: "100%",
                  height: { xs: "320px", sm: "460px" },
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
