import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import { Gift, Sparkles, CheckCircle2 } from "lucide-react";

const ReferralCard: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: "#ffffff" }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          alignItems="center"
          sx={{
            backgroundColor: "#f8fafc",
            borderRadius: "16px",
            border: "1px solid #e2e8f0",
            overflow: "hidden",
            p: { xs: 3, md: 5 },
          }}
        >
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                position: "relative",
                borderRadius: "12px",
                overflow: "hidden",
                height: { xs: "240px", md: "360px" },
              }}
            >
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                alt="Luxury Remodeled Bathroom"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 16,
                  left: 16,
                  backgroundColor: "#c29b38",
                  color: "#ffffff",
                  px: 2,
                  py: 0.6,
                  borderRadius: "20px",
                  fontWeight: 700,
                  fontSize: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                }}
              >
                <Gift size={15} /> $500 Referral Program
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.8,
                  backgroundColor: "rgba(194, 155, 56, 0.12)",
                  color: "#b45309",
                  px: 1.5,
                  py: 0.4,
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: 700,
                  width: "fit-content",
                }}
              >
                <Sparkles size={14} /> Homeowner Appreciation
              </Box>

              <Typography
                variant="h3"
                sx={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: { xs: "22px", sm: "28px", md: "32px" },
                  fontWeight: 800,
                  color: "#0f172a",
                  lineHeight: 1.2,
                }}
              >
                Love Your New Bathroom? Refer a Friend & Receive $500 CAD
              </Typography>

              <Typography sx={{ fontSize: "14px", color: "#475569", lineHeight: 1.6 }}>
                Word of mouth from satisfied homeowners across Langley, Surrey, and Abbotsford is the foundation of Ideal Bath Renovations. When you refer a neighbor, family member, or friend who contracts a bathroom remodel with us:
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <CheckCircle2 size={16} color="#c29b38" />
                  <Typography sx={{ fontSize: "13.5px", color: "#1e293b", fontWeight: 600 }}>
                    You receive a <b>$500 Visa Gift Card</b> or cash credit upon project completion.
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <CheckCircle2 size={16} color="#c29b38" />
                  <Typography sx={{ fontSize: "13.5px", color: "#1e293b", fontWeight: 600 }}>
                    Your referred friend receives a <b>$500 Upgrade Credit</b> towards custom quartz or heated floors.
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <CheckCircle2 size={16} color="#c29b38" />
                  <Typography sx={{ fontSize: "13.5px", color: "#1e293b", fontWeight: 600 }}>
                    Includes our Free In-Home 3D Design Consultation and itemized estimate.
                  </Typography>
                </Box>
              </Box>

              <Typography sx={{ fontSize: "13px", color: "#64748b", fontStyle: "italic", mt: 1 }}>
                Simply have your referral mention your name and address (or submit their request below), and we'll credit both accounts automatically.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ReferralCard;
