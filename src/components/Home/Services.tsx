import React, { useState } from "react";
import { Box, Typography, Container, Tabs, Tab } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ServiceCard from "../UI/ServiceCard";
import ServicesData from "../../data/ServicesData";
import PrimaryButton from "../UI/PrimaryButton";

const categories = [
  "All Services (19)",
  "Full Remodel",
  "Showers & Tubs",
  "Surfaces",
  "Vanities",
  "Plumbing & Tech",
  "Comfort",
  "Accessibility",
];

const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Services (19)");

  const filteredServices = ServicesData.filter((service) => {
    if (selectedCategory === "All Services (19)") return true;
    return service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      (selectedCategory === "Showers & Tubs" && (service.id.includes("shower") || service.id.includes("bathtub") || service.id.includes("tub")));
  });

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#f8fafc" }}>
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
            Comprehensive Remodeling Solutions
          </Typography>
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
            Specialized Bathroom Remodeling Categories
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
              color: "#64748b",
              maxWidth: "700px",
              mx: "auto",
            }}
          >
            Explore our complete suite of 19 specialized services engineered for longevity, waterproof protection, and elevated aesthetic beauty.
          </Typography>

          {/* Category Filter Tabs */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4, overflowX: "auto", pb: 1 }}>
            <Tabs
              value={selectedCategory}
              onChange={(_, newValue) => setSelectedCategory(newValue)}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: "#c29b38",
                  height: "3px",
                  borderRadius: "3px",
                },
                "& .MuiTab-root": {
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "#64748b",
                  minWidth: "auto",
                  px: 2.5,
                  py: 1,
                  "&.Mui-selected": {
                    color: "#0f172a",
                    fontWeight: 700,
                  },
                },
              }}
            >
              {categories.map((cat) => (
                <Tab key={cat} label={cat} value={cat} />
              ))}
            </Tabs>
          </Box>
        </Box>

        {/* Services Grid */}
        <Grid container spacing={3.5} sx={{ justifyContent: "center" }}>
          {filteredServices.map((service) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={service.id}>
              <ServiceCard
                id={service.id}
                category={service.category}
                img={service.img}
                title={service.title}
                price={service.price}
                duration={service.duration}
                about={service.about}
                features={service.features}
                btncontent={service.btncontent}
                popular={service.popular}
              />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 7, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          <Typography sx={{ fontSize: "15px", color: "#64748b" }}>
            Need a custom combination of these services? We build bespoke packages tailored to your floorplan and budget.
          </Typography>
          <PrimaryButton
            content="Request Itemized In-Home Quote"
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

export default Services;
