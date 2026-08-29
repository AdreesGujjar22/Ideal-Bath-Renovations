import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { CheckCircle2 } from "lucide-react";

const conversionFeatures = [
  "Zero-trip low threshold or curbless entry",
  "Schluter®-KERDI complete vapor and moisture membrane",
  "10mm heavy architectural frameless glass with EnduroShield coating",
  "Thermostatic pressure-balanced valves (Moen, Kohler, Delta)",
  "LED illuminated shampoo & soap niche shelves",
  "Slip-resistant mosaic shower floor tile pan",
  "Fold-down teak or floating quartz bench seating",
];

const SubHeader: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 9 }, backgroundColor: "#ffffff" }}>
      <Box sx={{ width: "87%", mx: "auto" }}>
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography
                sx={{
                  color: "#c29b38",
                  fontWeight: 700,
                  fontSize: "13px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Why Convert Your Tub?
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: { xs: "26px", sm: "34px", md: "38px" },
                  fontWeight: 800,
                  color: "#0f172a",
                  lineHeight: 1.2,
                }}
              >
                Modernize Your Bathroom with a Walk-In Shower
              </Typography>
              <Typography sx={{ fontSize: "14.5px", color: "#475569", lineHeight: 1.7 }}>
                Old tubs occupy precious floor real estate and present significant slip-and-fall hazards. By converting your alcove or freestanding tub into an open, light-filled walk-in shower, you instantly modernize your space, double your usable showering room, and increase resale value.
              </Typography>

              <Typography sx={{ fontSize: "15px", fontWeight: 700, color: "#0f172a", mt: 1 }}>
                Every Tub Conversion Includes:
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {conversionFeatures.map((feat, idx) => (
                  <Box key={idx} sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                    <CheckCircle2 size={16} color="#c29b38" />
                    <Typography sx={{ fontSize: "13.5px", color: "#1e293b", fontWeight: 600 }}>
                      {feat}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: "relative",
                borderRadius: "14px",
                overflow: "hidden",
                boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
              }}
            >
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=80"
                alt="Tub to Shower Conversion Langley"
                sx={{ width: "100%", height: "400px", objectFit: "cover" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SubHeader;
