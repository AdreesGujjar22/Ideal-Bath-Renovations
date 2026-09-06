import React, { useState } from "react";
import { Box, Typography, Container, Tabs, Tab } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { beforeAfterData } from "../../data/ImagesData";
import PrimaryButton from "../UI/PrimaryButton";
import { Sparkles, CheckCircle2, MapPin, Clock } from "lucide-react";

const categories = ["All Projects", "Tub-to-Shower", "Master Ensuite", "Walk-In Shower", "Custom Vanity", "Powder Room"];

const MainComp: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>("All Projects");

  const filtered = beforeAfterData.filter((itm) => {
    if (selectedTag === "All Projects") return true;
    return (
      (itm.category && itm.category.toLowerCase() === selectedTag.toLowerCase()) ||
      (itm.content && itm.content.toLowerCase().includes(selectedTag.toLowerCase())) ||
      (itm.details && itm.details.toLowerCase().includes(selectedTag.toLowerCase()))
    );
  });

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#f8fafc" }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              backgroundColor: "rgba(194,155,56,0.12)",
              color: "#b45309",
              px: 2,
              py: 0.5,
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              mb: 1.5,
            }}
          >
            <Sparkles size={14} /> Real Langley Transformations
          </Box>

          <Typography
            variant="h1"
            sx={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: { xs: "28px", sm: "36px", md: "42px" },
              fontWeight: 800,
              color: "#0f172a",
              mb: 2,
            }}
          >
            Before & After Bathroom Remodeling Gallery
          </Typography>

          <Typography
            sx={{
              fontSize: "15px",
              color: "#64748b",
              maxWidth: "750px",
              mx: "auto",
            }}
          >
            Explore actual renovation projects completed across Willoughby, Walnut Grove, Fort Langley, Surrey, and Abbotsford. See how we turn dark, dated bathrooms into luminous modern retreats.
          </Typography>

          {/* Filter Tabs */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4, overflowX: "auto" }}>
            <Tabs
              value={selectedTag}
              onChange={(_, val) => setSelectedTag(val)}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                "& .MuiTabs-indicator": { backgroundColor: "#c29b38", height: "3px" },
                "& .MuiTab-root": {
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "#64748b",
                  "&.Mui-selected": { color: "#0f172a", fontWeight: 700 },
                },
              }}
            >
              {categories.map((c) => (
                <Tab key={c} label={c} value={c} />
              ))}
            </Tabs>
          </Box>
        </Box>

        {/* Gallery Grid */}
        <Grid container spacing={3.5}>
          {filtered.map((itm, idx) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={idx}>
              <Box
                sx={{
                  backgroundColor: "#ffffff",
                  borderRadius: "14px",
                  overflow: "hidden",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.04)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.09)",
                    borderColor: "#cbd5e1",
                  },
                }}
              >
                <Box sx={{ position: "relative", height: "260px", overflow: "hidden" }}>
                  <Box
                    component="img"
                    src={itm.img}
                    alt={itm.content}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    loading="lazy"
                  />
                  {itm.duration && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        backgroundColor: "rgba(15,23,42,0.85)",
                        backdropFilter: "blur(4px)",
                        color: "#ffffff",
                        px: 1.5,
                        py: 0.4,
                        borderRadius: "20px",
                        fontSize: "11.5px",
                        fontWeight: 600,
                        display: "flex",
                        alignItems: "center",
                        gap: 0.6,
                      }}
                    >
                      <Clock size={12} color="#dfba5a" />
                      <span>{itm.duration}</span>
                    </Box>
                  )}
                  {itm.category && (
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 12,
                        left: 12,
                        backgroundColor: "#c29b38",
                        color: "#ffffff",
                        px: 1.5,
                        py: 0.4,
                        borderRadius: "6px",
                        fontSize: "11px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                      }}
                    >
                      {itm.category}
                    </Box>
                  )}
                </Box>

                <Box sx={{ p: 3, display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "space-between" }}>
                  <Box>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 700,
                        fontSize: "17px",
                        color: "#0f172a",
                        mb: 1,
                      }}
                    >
                      {itm.content}
                    </Typography>

                    {itm.location && (
                      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mb: 1.5 }}>
                        <MapPin size={13} color="#c29b38" />
                        <Typography sx={{ fontSize: "12.5px", color: "#64748b" }}>
                          {itm.location}
                        </Typography>
                      </Box>
                    )}

                    {itm.details && (
                      <Typography sx={{ fontSize: "13.5px", color: "#475569", lineHeight: 1.6, mb: 2 }}>
                        {itm.details}
                      </Typography>
                    )}
                  </Box>

                  <Box sx={{ pt: 2, borderTop: "1px solid #f1f5f9", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
                      <CheckCircle2 size={15} color="#15803d" />
                      <Typography sx={{ fontSize: "12px", color: "#15803d", fontWeight: 600 }}>
                        Schluter® Certified
                      </Typography>
                    </Box>
                    <PrimaryButton
                      content="Inquire"
                      variant="gold"
                      btnpadding="6px 14px"
                      fontsize={12}
                      to={`/contact?service=${encodeURIComponent(itm.category || itm.content)}`}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* CTA at bottom */}
        <Box
          sx={{
            mt: 8,
            p: { xs: 4, md: 6 },
            borderRadius: "16px",
            background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
            color: "#ffffff",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2.5,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: { xs: "24px", sm: "32px" },
              fontWeight: 800,
            }}
          >
            Ready to Begin Your Bathroom Transformation?
          </Typography>
          <Typography sx={{ fontSize: "15px", color: "#cbd5e1", maxWidth: "650px" }}>
            Schedule an in-home laser measurement with Ideal Bath Renovations. We bring sample materials, render your 3D design, and provide a clear fixed-price quote.
          </Typography>
          <PrimaryButton
            content="Book Free In-Home 3D Consultation"
            variant="gold"
            btnpadding="14px 32px"
            fontsize={16}
            to="/contact"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default MainComp;
