import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import imgsData from "../../data/InfoIImgData";

const StandardImageList: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 9 }, backgroundColor: "#f8fafc" }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: 5 }}>
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
            Design Gallery
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: { xs: "24px", sm: "32px", md: "36px" },
              fontWeight: 800,
              color: "#0f172a",
            }}
          >
            Recent Bathroom Craftsmanship Across Langley
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {imgsData.map((item, idx) => (
            <Grid size={{ xs: 6, sm: 4, md: 3 }} key={idx}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "12px",
                  overflow: "hidden",
                  height: { xs: "180px", sm: "240px", md: "280px" },
                  boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                  cursor: "pointer",
                  "&:hover img": {
                    transform: "scale(1.06)",
                  },
                  "&:hover .overlay": {
                    opacity: 1,
                  },
                }}
              >
                <Box
                  component="img"
                  src={item.img}
                  alt={item.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                  }}
                  loading="lazy"
                />
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(15, 23, 42, 0.65)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    p: 2,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#ffffff",
                      fontWeight: 700,
                      fontSize: { xs: "14px", md: "16px" },
                      letterSpacing: "0.02em",
                    }}
                  >
                    {item.title}
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

export default StandardImageList;
