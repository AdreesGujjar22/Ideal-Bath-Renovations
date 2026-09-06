import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { servicesDetailList, ServiceDetailItem } from "../data/ServicesDetailData";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/UI/Breadcrumbs";
import PrimaryButton from "../components/UI/PrimaryButton";
import {
  ShieldCheck,
  Search,
  Sparkles,
  CheckCircle2,
  Clock,
} from "lucide-react";

const categories = ["All Services", "Full Remodel", "Modernization", "Showers & Tubs", "Tile & Flooring", "Vanities & Cabinetry", "Repairs & Fixes"];

const ServicesHub: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Services");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredServices = servicesDetailList.filter((item) => {
    const matchesCat =
      selectedCategory === "All Services" ||
      item.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <>
      <SEO
        title="12 Luxury Bathroom Remodeling & Renovation Services | Ideal Bath Langley"
        description="Explore all 12 specialized bathroom remodeling and renovation services in Langley & Fraser Valley. From tub-to-shower conversions to custom quartz vanities and 3D CAD design."
        canonical="https://idealbathrenovations.ca/services"
      />

      <Breadcrumbs currentLabel="Services" />

      {/* Hero Header */}
      <Box
        sx={{
          backgroundColor: "#0f172a",
          color: "#ffffff",
          py: { xs: 7, md: 10 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1600&q=80"
          alt="Bathroom Remodeling Services"
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.18,
            mixBlendMode: "luminosity",
          }}
        />

        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              backgroundColor: "rgba(194,155,56,0.18)",
              color: "#dfba5a",
              border: "1px solid rgba(223,186,90,0.3)",
              px: 2.5,
              py: 0.6,
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              mb: 2.5,
            }}
          >
            <Sparkles size={14} /> Full-Scope Renovation Services in Langley, BC
          </Box>

          <Typography
            variant="h1"
            sx={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: { xs: "32px", sm: "44px", md: "52px" },
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              maxWidth: "900px",
              mx: "auto",
              mb: 2.5,
              color: "#ffffff",
            }}
          >
            Comprehensive Bathroom Remodeling & Renovation Services
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "15px", md: "18px" },
              color: "#cbd5e1",
              maxWidth: "780px",
              mx: "auto",
              lineHeight: 1.7,
              mb: 4,
            }}
          >
            From turnkey master ensuite transformations to precision tile setting and tub-to-shower conversions, our certified Red Seal craftsmen and Schluter® installers deliver lasting excellence.
          </Typography>

          {/* Search bar inside hero */}
          <Box sx={{ maxWidth: "550px", mx: "auto" }}>
            <TextField
              fullWidth
              placeholder="Search services (e.g. Shower Remodeling, Tile, Vanity)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search size={18} color="#c29b38" />
                    </InputAdornment>
                  ),
                  sx: {
                    backgroundColor: "#ffffff",
                    borderRadius: "10px",
                    fontSize: "14.5px",
                    "& fieldset": { border: "none" },
                  },
                },
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* Services Grid Section */}
      <Box sx={{ py: { xs: 6, md: 9 }, backgroundColor: "#f8fafc" }}>
        <Container maxWidth="xl">
          {/* Category Tabs */}
          <Box sx={{ mb: 6, display: "flex", justifyContent: "center" }}>
            <Tabs
              value={selectedCategory}
              onChange={(_, val) => setSelectedCategory(val)}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                "& .MuiTabs-indicator": { backgroundColor: "#c29b38", height: "3px", borderRadius: "3px" },
                "& .MuiTab-root": {
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "14.5px",
                  color: "#64748b",
                  minWidth: "auto",
                  px: 2.5,
                  "&.Mui-selected": { color: "#0f172a", fontWeight: 800 },
                },
              }}
            >
              {categories.map((cat) => (
                <Tab key={cat} label={cat} value={cat} />
              ))}
            </Tabs>
          </Box>

          {/* 12 Services Grid */}
          <Grid container spacing={3.5}>
            {filteredServices.map((service: ServiceDetailItem) => (
              <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={service.id}>
                <Paper
                  elevation={0}
                  sx={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: "1px solid #e2e8f0",
                    backgroundColor: "#ffffff",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 14px 30px rgba(0,0,0,0.08)",
                      borderColor: "#c29b38",
                    },
                  }}
                >
                  <Box>
                    {/* Thumbnail Image */}
                    <Box sx={{ position: "relative", height: "220px", overflow: "hidden" }}>
                      <Box
                        component="img"
                        src={service.heroImage}
                        alt={service.title}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.4s ease",
                          "&:hover": { transform: "scale(1.04)" },
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 12,
                          left: 12,
                          backgroundColor: "rgba(15, 23, 42, 0.88)",
                          color: "#ffffff",
                          fontSize: "11px",
                          fontWeight: 700,
                          px: 1.5,
                          py: 0.4,
                          borderRadius: "4px",
                          backdropFilter: "blur(4px)",
                        }}
                      >
                        {service.category}
                      </Box>
                    </Box>

                    {/* Card Content */}
                    <Box sx={{ p: 3.5 }}>
                      <Typography
                        variant="h3"
                        sx={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 800,
                          fontSize: "20px",
                          color: "#0f172a",
                          lineHeight: 1.3,
                          mb: 1.2,
                        }}
                      >
                        {service.title}
                      </Typography>

                      <Typography sx={{ fontSize: "13.5px", color: "#64748b", lineHeight: 1.6, mb: 2.5 }}>
                        {service.tagline}
                      </Typography>

                      {/* Pricing & Timeline Pills */}
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2.5 }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", px: 1.2, py: 0.4, borderRadius: "6px" }}>
                          <Sparkles size={13} color="#c29b38" />
                          <Typography sx={{ fontSize: "12px", fontWeight: 700, color: "#0f172a" }}>
                            {service.priceRange || "Complimentary In-Home"}
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", px: 1.2, py: 0.4, borderRadius: "6px" }}>
                          <Clock size={13} color="#64748b" />
                          <Typography sx={{ fontSize: "12px", fontWeight: 600, color: "#64748b" }}>
                            {service.typicalTimeline}
                          </Typography>
                        </Box>
                      </Box>

                      {/* Top Features Checkmarks */}
                      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.8, pt: 2, borderTop: "1px dashed #e2e8f0" }}>
                        {service.keyBenefits.slice(0, 2).map((kb, idx) => (
                          <Box key={idx} sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                            <CheckCircle2 size={14} color="#15803d" style={{ flexShrink: 0, marginTop: "2px" }} />
                            <Typography sx={{ fontSize: "12.5px", color: "#334155", fontWeight: 600 }}>
                              {kb.title}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>

                  {/* Card Footer Actions */}
                  <Box sx={{ p: 3.5, pt: 0, display: "flex", gap: 1.5 }}>
                    <PrimaryButton
                      content="View Service Details"
                      variant="gold"
                      btnwidth="100%"
                      btnpadding="10px"
                      fontsize={13.5}
                      to={`/services/${service.slug}`}
                    />
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {filteredServices.length === 0 && (
            <Box sx={{ textAlign: "center", py: 8 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, color: "#0f172a", mb: 1 }}>
                No services matched your search
              </Typography>
              <Typography sx={{ color: "#64748b", mb: 3 }}>
                Try adjusting your search criteria or explore all available services.
              </Typography>
              <PrimaryButton
                content="Reset Filters"
                variant="outlined"
                onClick={() => {
                  setSelectedCategory("All Services");
                  setSearchQuery("");
                }}
              />
            </Box>
          )}

          {/* Bottom Consultation CTA Banner */}
          <Box
            sx={{
              mt: 10,
              p: { xs: 4, md: 6 },
              borderRadius: "20px",
              backgroundColor: "#0f172a",
              color: "#ffffff",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: 4,
              boxShadow: "0 20px 40px -15px rgba(15,23,42,0.3)",
            }}
          >
            <Box sx={{ maxWidth: "680px" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#dfba5a", mb: 1.5 }}>
                <Sparkles size={16} />
                <Typography sx={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Free In-Home 3D Design Consultation
                </Typography>
              </Box>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: { xs: "24px", sm: "32px" },
                  fontWeight: 800,
                  color: "#ffffff",
                  mb: 1.5,
                }}
              >
                Not sure which service fits your bathroom?
              </Typography>
              <Typography sx={{ fontSize: "14.5px", color: "#cbd5e1", lineHeight: 1.6 }}>
                Our Langley renovation experts will inspect your current space, listen to your goals, and prepare a tailored design plan with transparent fixed pricing.
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, flexShrink: 0, width: { xs: "100%", sm: "auto" } }}>
              <PrimaryButton
                content="Schedule Free Consultation"
                variant="gold"
                btnpadding="14px 28px"
                fontsize={15}
                to="/contact"
              />
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>
                <ShieldCheck size={14} color="#dfba5a" />
                <Typography sx={{ fontSize: "12px", color: "#94a3b8" }}>
                  5-Yr Workmanship Guarantee
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ServicesHub;
