import React from "react";
import { microneedlingData } from "../../data/ImagesData";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const ImgBanner: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: "#f8fafc" }}>
      <Container maxWidth="xl">
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 800,
            fontSize: "24px",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: "#0f172a",
            mb: 4,
          }}
        >
          Recent Tub-to-Shower Transformations in Langley
        </Typography>
        <Grid container spacing={3}>
          {microneedlingData.map((itm, idx) => (
            <Grid size={{ xs: 12, md: 6 }} key={idx}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "14px",
                  overflow: "hidden",
                  height: { xs: "240px", sm: "320px", md: "380px" },
                  boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
                }}
              >
                <Box
                  component="img"
                  src={itm.img}
                  alt={itm.content}
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: "rgba(15,23,42,0.8)",
                    backdropFilter: "blur(6px)",
                    p: 2.5,
                    color: "#ffffff",
                  }}
                >
                  <Typography sx={{ fontWeight: 700, fontSize: "15px" }}>
                    {itm.content}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ImgBanner;
