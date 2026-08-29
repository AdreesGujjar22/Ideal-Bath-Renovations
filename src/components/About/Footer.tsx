import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";

const bathroomGallery = [
  {
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    title: "Master Ensuite Walk-In",
  },
  {
    img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80",
    title: "Custom Floating Walnut Vanity",
  },
  {
    img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80",
    title: "Curbless Hexagon Tile Shower",
  },
  {
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    title: "Freestanding Soaker Tub & Chandelier",
  },
];

const ImageBanner: React.FC = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: "#ffffff" }}>
      <Container maxWidth="xl">
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 700,
            fontSize: "13px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#c29b38",
            mb: 3,
          }}
        >
          Featured Project Highlights
        </Typography>

        <Grid container spacing={2}>
          {bathroomGallery.map((item, idx) => (
            <Grid size={{ xs: 6, md: 3 }} key={idx}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "10px",
                  overflow: "hidden",
                  height: { xs: "160px", sm: "240px", md: "300px" },
                  "&:hover img": { transform: "scale(1.05)" },
                  "&:hover .overlay": { opacity: 1 },
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
                    backgroundColor: "rgba(15,23,42,0.6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 2,
                    textAlign: "center",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  <Typography sx={{ color: "#ffffff", fontWeight: 600, fontSize: "14px" }}>
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

export default ImageBanner;
