import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import imgsData from "../../data/InfoIImgData";

const StandardImageList: React.FC = () => {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: "#ffffff" }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 6 } }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.8,
              backgroundColor: "rgba(194, 155, 56, 0.12)",
              color: "#b45309",
              px: 1.8,
              py: 0.5,
              borderRadius: "20px",
              fontSize: "12.5px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              mb: 1.5,
            }}
          >
            <Sparkles size={14} color="#c29b38" />
            <span>Design Portfolio</span>
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: { xs: "28px", sm: "36px", md: "42px" },
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            Recent Bathroom Transformations
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "15px", md: "16.5px" },
              color: "#64748b",
              maxWidth: "760px",
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            Browse our portfolio of completed bathroom renovations across Langley Twp and the Fraser Valley, showcasing tub-to-shower conversions, curbless showers, and full remodels.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {imgsData.map((item, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
              <Box
                component={Link}
                to="/before-after"
                sx={{
                  textDecoration: "none",
                  display: "block",
                  position: "relative",
                  borderRadius: "14px",
                  overflow: "hidden",
                  height: { xs: "240px", sm: "260px", md: "290px" },
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
                  "&:hover img": {
                    transform: "scale(1.08)",
                  },
                  "&:hover .overlay": {
                    opacity: 1,
                  },
                }}
              >
                <Box
                  component="img"
                  src={item.img}
                  alt={item.alt}
                  title={item.alt}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                  }}
                  loading="lazy"
                />

                {/* Permanent subtle caption pill */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 12,
                    left: 12,
                    right: 12,
                    backgroundColor: "rgba(15, 23, 42, 0.8)",
                    backdropFilter: "blur(4px)",
                    borderRadius: "8px",
                    px: 1.5,
                    py: 0.8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography sx={{ color: "#ffffff", fontWeight: 700, fontSize: "13px" }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: "#dfba5a", fontSize: "11px", fontWeight: 600 }}>
                    {item.category}
                  </Typography>
                </Box>

                {/* Hover overlay */}
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(15, 23, 42, 0.75)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    p: 2.5,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#ffffff",
                      fontWeight: 700,
                      fontSize: "15px",
                      mb: 1,
                    }}
                  >
                    {item.alt}
                  </Typography>
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.5,
                      color: "#dfba5a",
                      fontSize: "12.5px",
                      fontWeight: 700,
                    }}
                  >
                    <span>View Before & After Project</span>
                    <ArrowRight size={14} />
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

export default StandardImageList;

